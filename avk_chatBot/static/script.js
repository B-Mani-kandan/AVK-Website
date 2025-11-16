/**
 * This script.js file contains all the logic for the frontend chat widget.
 * It does three main things:
 * 1. Toggles the chat window's visibility.
 * 2. Adds messages to the UI.
 * 3. Sends the user's message to your Python server and displays the bot's reply.
 */

document.addEventListener("DOMContentLoaded", () => {

    // --- (1) SELECT ALL THE IMPORTANT HTML ELEMENTS ---
    const chatToggleButton = document.getElementById("chat-toggle-button");
    const chatWidget = document.getElementById("chat-widget");
    const chatCloseButton = document.getElementById("chat-close-button");
    const chatMessages = document.getElementById("chat-messages");
    const chatInput = document.getElementById("chat-input");
    const chatSendButton = document.getElementById("chat-send-button");

    // --- Select the quick reply container ---
    const quickReplyContainer = document.getElementById("quick-replies");

    // --- (2) DEFINE OUR KEY VARIABLES ---
    
    // This is the "address" of your Python backend.
    const BACKEND_URL = "http://127.0.0.1:5000/chat";
    
    // This is the "memory" for the user. We create a random ID
    // so your server can remember the conversation flow.
    const userId = `user_${Date.now()}_${Math.random().toString(16).substr(2, 8)}`;


    // --- (3) ADD EVENT LISTENERS (Buttons, Toggles, etc.) ---

    // Toggles the chat widget open or closed
    chatToggleButton.addEventListener("click", () => {
        chatWidget.classList.toggle("show");
    });

    chatCloseButton.addEventListener("click", () => {
        chatWidget.classList.remove("show");
    });

    // Send a message when the "Send" button is clicked
    chatSendButton.addEventListener("click", () => {
        const messageText = chatInput.value.trim();
        if (messageText) {
            sendMessage(messageText); // Send the text from the input
        }
    });

    // Send a message when the "Enter" key is pressed
    chatInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault(); // Prevents a new line
            const messageText = chatInput.value.trim();
            if (messageText) {
                sendMessage(messageText); // Send the text from the input
            }
        }
    });

    // Auto-resize the textarea as the user types
    chatInput.addEventListener("input", () => {
        chatInput.style.height = 'auto';
        chatInput.style.height = (chatInput.scrollHeight) + 'px';
    });

    // --- Add event listener for the quick reply buttons ---
    quickReplyContainer.addEventListener("click", (event) => {
        // Check if the clicked element is a button
        if (event.target.classList.contains("quick-reply-btn")) {
            const messageText = event.target.dataset.message;
            
            // 1. Send the button's message
            sendMessage(messageText);
            
            // 2. Hide the quick reply buttons
            quickReplyContainer.classList.add("hidden");
        }
    });


    // --- (4) THE CORE FUNCTIONS ---

    /**
     * This is the main function that sends the message to the backend.
     * It now takes the message as an argument.
     * @param {string} messageText - The message to send.
     */
    async function sendMessage(messageText) {
        if (messageText === "") {
            return; // Don't send empty messages
        }

        // 1. Add the user's message to the chat window
        addMessageToUI('user', messageText);
        
        // --- THIS IS THE FIX ---
        // If quick replies are visible, hide them!
        if (!quickReplyContainer.classList.contains("hidden")) {
            quickReplyContainer.classList.add("hidden");
        }

        // 2. Clear the input field
        chatInput.value = "";
        chatInput.style.height = 'auto'; // Reset height

        // 3. Send the message to your Python backend (THE "BRIDGE")
        try {
            const response = await fetch(BACKEND_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "user_id": userId,
                    "message": messageText
                })
            });

            if (!response.ok) {
                throw new Error("Network error. Server is not responding.");
            }

            const data = await response.json();
            const botReply = data.reply;

            // 4. Add the bot's reply to the chat window
            addMessageToUI('bot', botReply);

        } catch (error) {
            console.error("Error sending message:", error);
            // Show an error message in the chat
            addMessageToUI('bot', "Sorry, I'm having trouble connecting to the server. Please try again later.");
        }
    }

    /**
     * A helper function to create a new message div and add it to the chat.
     * @param {'user' | 'bot'} sender - Who sent the message.
     * @param {string} message - The message text.
     */
    function addMessageToUI(sender, message) {
        const messageElement = document.createElement("div");
        
        // This is the fix for the line breaks from our previous step
        messageElement.classList.add("chat-message", sender);
        messageElement.textContent = message; 
        
        chatMessages.appendChild(messageElement);

        // Auto-scroll to the bottom to show the new message
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

});