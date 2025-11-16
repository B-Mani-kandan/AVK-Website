import os
import re
import csv
import logging
import requests
from logging.handlers import RotatingFileHandler
from flask import Flask, request, jsonify, render_template

from bot_brain import get_local_response, top_k_matches

app = Flask(__name__, static_folder='static', template_folder='templates')

LEADS_CSV = os.environ.get("LEADS_CSV", "leads.csv")
OLLAMA_URL = "http://localhost:11434/api/generate"
OLLAMA_MODEL = "llama3:8b"

user_sessions = {}
QUOTE_KEYWORDS = ['quote', 'get a quote', 'pricing', 'price', 'cost', 'contact sales', 'how much']
GENERAL_QUESTION_FALLBACK = "I can only answer questions about AVK Logistics and F-Studio. How can I help with our services?"

SMALL_TALK = {
    "hi": "Hello! How can I help you today?",
    "hello": "Hello! How can I help you today?",
    "hey": "Hi there! How can I help you?",
    "how are you": "I'm a bot, but I'm operating at full capacity! How can I help with your logistics needs?",
    "thanks": "You're welcome!",
    "thank you": "You're welcome! Is there anything else I can help with?",
    "bye": "Goodbye! Have a great day."
}

if not os.path.exists('logs'):
    os.makedirs('logs')
handler = RotatingFileHandler('logs/app.log', maxBytes=2_000_000, backupCount=5)
formatter = logging.Formatter('%(asctime)s %(levelname)s: %(message)s')
handler.setFormatter(formatter)
handler.setLevel(logging.INFO)
app.logger.setLevel(logging.INFO)
app.logger.addHandler(handler)
app.logger.info("Starting AVK assistant app (True Ollama RAG v17)")

def get_user_session(user_id):
    if user_id not in user_sessions:
        user_sessions[user_id] = {'state': None, 'data': {}}
    return user_sessions[user_id]

EMAIL_RE = re.compile(r"^[^@]+@[^@]+\.[^@]+$")
PHONE_RE = re.compile(r"^[\d\+\-\s\(\)]{7,20}$")

def is_valid_email(email: str) -> bool:
    return bool(EMAIL_RE.match(email.strip()))

def is_valid_phone(phone: str) -> bool:
    return bool(PHONE_RE.match(phone.strip()))

def persist_lead(data: dict):
    fields = ["name", "email", "phone", "details"]
    new_file = not os.path.exists(LEADS_CSV)
    with open(LEADS_CSV, 'a', newline='', encoding='utf-8') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=fields)
        if new_file:
            writer.writeheader()
        writer.writerow({k: data.get(k, "") for k in fields})
    app.logger.info(f"Lead persisted: {data}")

def call_ollama(query: str, context: str) -> str:
    
    system_prompt = f"""
    You are a professional chatbot for AVK Logistics.
    Your job is to answer the user's question based *ONLY* on the "Context" I provide.
    
    YOUR RULES:
    1.  **Analyze the Context:** Read the Context. If it seems relevant and contains the answer, use it.
    2.  **Handle Bad Context:** If the Context is empty or seems completely irrelevant to the question (e.g., the user asks about "your office" but the context is about "sundry debtor"), you MUST ignore the context and reply: "I'm sorry, I couldn't find that information in our documents."
    3.  **Handle General Questions:** If the user asks a general, off-topic question (like "what is my name", "what is the weather", "tell me a joke"), you MUST reply with: "I can only answer questions about our logistics services."
    4.  **Format Lists:** If the answer is a list (like "how to add sundry debtor"), format it clearly with newlines (e.g., "1. First step... | 2. Second step..."). Use a "|" as a separator.
    """
    
    user_prompt = f"""
    Context:
    "{context}"
    
    User Question:
    "{query}"
    """
    
    payload = {
        "model": OLLAMA_MODEL,
        "system": system_prompt,
        "prompt": user_prompt,
        "stream": False 
    }
    
    try:
        response = requests.post(OLLAMA_URL, json=payload, timeout=30) 
        response.raise_for_status() 
        
        json_response = response.json()
        
        bot_reply = json_response.get("response", "Sorry, I had an error.").strip()
        if '|' in bot_reply:
            bot_reply = bot_reply.replace(":", ":\n", 1) 
            return bot_reply.replace(" | ", "\n")
        return bot_reply
        
    except requests.exceptions.ConnectionError:
        app.logger.error("Ollama connection failed. Is Ollama running?")
        return "I'm sorry, my 'brain' (Ollama) is not running. Please contact support."
    except Exception as e:
        app.logger.error(f"Ollama request failed: {e}")
        return "I'm sorry, I'm having a technical issue connecting to my brain."

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json(silent=True) or {}
    user_id = data.get('user_id', 'default_user')
    user_message = data.get('message', '')
    user_message_lower = user_message.lower().strip().replace("?", "").replace("!", "")

    if not user_message:
        return jsonify({'error': 'No message provided'}), 400

    session = get_user_session(user_id)
    current_state = session['state']
    bot_reply = ""

    try:
        if current_state == 'getting_name':
            session['data']['name'] = user_message.strip()
            bot_reply = "Thank you. What is your company email address?"
            session['state'] = 'getting_email'
        elif current_state == 'getting_email':
            email = user_message.strip()
            if not is_valid_email(email):
                bot_reply = "That doesn't look like a valid email. Please enter a valid company email address."
                return jsonify({'reply': bot_reply})
            session['data']['email'] = email
            bot_reply = "Got it. And what is the best phone number to reach you?"
            session['state'] = 'getting_phone'
        elif current_state == 'getting_phone':
            phone = user_message.strip()
            if not is_valid_phone(phone):
                bot_reply = "That doesn't look like a valid phone number. Please enter a phone number."
                return jsonify({'reply': bot_reply})
            session['data']['phone'] = phone
            bot_reply = "Great. Finally, please briefly describe your logistics needs."
            session['state'] = 'getting_details'
        elif current_state == 'getting_details':
            session['data']['details'] = user_message.strip()
            persist_lead(session['data'])
            bot_reply = "Thank you! An AVK logistics expert will contact you shortly. Is there anything else I can help you with today?"
            app.logger.info(f"New lead captured: {session['data']}")
            session['state'] = None
            session['data'] = {}
        
        elif user_message_lower in SMALL_TALK:
            bot_reply = SMALL_TALK[user_message_lower]
        
        elif any(keyword in user_message_lower for keyword in QUOTE_KEYWORDS):
            bot_reply = "I can help with a quote. To get started, what is your full name?"
            session['state'] = 'getting_name'
        
        else:
            context = get_local_response(user_message)
            
            if not context:
                 bot_reply = "I'm sorry, I couldn't find that information in our documents."
            else:
                bot_reply = call_ollama(user_message, context)
            
    except Exception as e:
        app.logger.exception("Error handling chat:")
        bot_reply = "Sorry, I'm having a technical issue. Please try again."

    return jsonify({'reply': bot_reply})

@app.route('/debug/top_matches', methods=['POST'])
def debug_top_matches():
    data = request.get_json(silent=True) or {}
    query = data.get('query', '')
    k = int(data.get('k', 3))
    if not query:
        return jsonify({'error': 'No message provided'}), 400
    
    matches = top_k_matches(query, k=k)
    return jsonify({'query': query, 'matches': matches})

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=False)