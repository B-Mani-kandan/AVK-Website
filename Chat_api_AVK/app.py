import os
import google.generativeai as genai
from flask import Flask, request, jsonify, render_template
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__, static_folder='static')
try:
    api_key = os.environ.get("GOOGLE_API_KEY")
    if not api_key:
        raise KeyError("API key not found.")
    
    genai.configure(api_key=api_key)
except KeyError:
    print("="*80)
    print("CRITICAL ERROR: GOOGLE_API_KEY not found in .env file.")
    print("Please make sure your .env file exists and has your key.")
    print("="*80)
    exit()

try:
    with open('AVK_Knowledge_Base_v1.txt', 'r', encoding='utf-8') as f:
        avk_knowledge = f.read()
except FileNotFoundError:
    print("="*80)
    print("CRITICAL ERROR: AVK_Knowledge_Base_v1.txt not found.")
    print("Please make sure that file is in the same folder as app.py.")
    print("="*80)
    exit()


SYSTEM_PROMPT = f"""
You are "AVK Logistics Assistant," a professional and helpful chatbot.
Your one and only job is to answer user questions based *strictly* on the
company documentation provided below.

RULES:
1.  If the answer is in the documentation, answer it.
2.  If the answer is NOT in the documentation, you MUST reply with:
    "I'm sorry, I couldn't find that information in our documents. Can I help with our listed services?"
3.  NEVER make up an answer.
4.  NEVER answer general knowledge questions.

--- START OF COMPANY DOCUMENTATION ---
{avk_knowledge}
--- END OF COMPANY DOCUMENTATION ---
"""

model = genai.GenerativeModel('gemini-2.5-flash')
user_sessions = {}

QUOTE_KEYWORDS = ['quote', 'get a quote', 'pricing', 'price', 'cost', 'contact sales', 'how much']



def get_user_session(user_id):
    """Gets or creates a new session for a user."""
    if user_id not in user_sessions:
        user_sessions[user_id] = {
            'state': None,  
            'data': {}      
        }
    return user_sessions[user_id]

def get_ai_response(user_message):
    """Sends the message to the AI and gets a safe, on-topic response."""
    try:
        chat_session = model.start_chat(
            history=[
                {'role': 'user', 'parts': [SYSTEM_PROMPT]},
                {'role': 'model', 'parts': ["Understood. I am the AVK Logistics Assistant. How can I help you today?"]}
            ]
        )
        response = chat_session.send_message(user_message)
        return response.text
    except Exception as e:
        print(f"Error calling Gemini AI: {e}")
        return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again in a moment."


@app.route('/')
def home():
    """
    This is the "home" page (http://127.0.0.1:5000)
    It finds 'index.html' in the 'templates' folder and returns it.
    """
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    """
    This is the "chat" endpoint (/chat).
    All messages from the frontend JavaScript come here.
    """
    
    data = request.json
    user_id = data.get('user_id', 'default_user')
    user_message = data.get('message', '')

    if not user_message:
        return jsonify({'error': 'No message provided'}), 400

    session = get_user_session(user_id)
    current_state = session['state']
    
    bot_reply = "" 

    if current_state == 'getting_name':
        session['data']['name'] = user_message
        bot_reply = "Thank you. What is your company email address?"
        session['state'] = 'getting_email'

    elif current_state == 'getting_email':
        session['data']['email'] = user_message
        bot_reply = "Got it. And what is the best phone number to reach you?"
        session['state'] = 'getting_phone'

    elif current_state == 'getting_phone':
        session['data']['phone'] = user_message
        bot_reply = "Great. Finally, please briefly describe your logistics needs."
        session['state'] = 'getting_details'

    elif current_state == 'getting_details':
        session['data']['details'] = user_message
        bot_reply = "Thank you! An AVK logistics expert will contact you shortly. Is there anything else I can help you with today?"
        
        print("="*50)
        print(f"!!! NEW LEAD CAPTURED for user {user_id} !!!")
        print(f"Data: {session['data']}")
        print("="*50)
        
        session['state'] = None 
        session['data'] = {}

    elif any(keyword in user_message.lower() for keyword in QUOTE_KEYWORDS):
        bot_reply = "I can definitely help you with a quote. To get started, what is your full name?"
        session['state'] = 'getting_name'

    else:
        bot_reply = get_ai_response(user_message)

    return jsonify({'reply': bot_reply})

if __name__ == '__main__':
    app.run(debug=True, port=5000)