function feeling(type) {

    const response = document.getElementById("feeling-response");
    const status = document.getElementById("checkin-status");

    status.textContent = "Completed";

    const messages = {
        great: "That's wonderful to hear! I hope you have a lovely day. 😊",
        good: "I'm glad you're feeling good today. Keep taking care of yourself! 🌷",
        okay: "Thank you for checking in. Remember to take some time for yourself today.",
        sad: "I'm sorry you're feeling sad. I'm here if you'd like to talk about your day. ❤️"
    };

    response.textContent = messages[type];
}


function medicationTaken() {

    const response = document.getElementById("medicine-response");
    const status = document.getElementById("medication-status");

    status.textContent = "Taken";
    status.style.color = "#3a9b63";

    response.textContent =
        "Great! Your medication has been marked as taken. 💊";
}


function sendMessage() {

    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const status = document.getElementById("conversation-status");

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    // User message

    const userMessage = document.createElement("div");

    userMessage.className = "message user-message";
    userMessage.textContent = message;

    chatBox.appendChild(userMessage);

    input.value = "";

    status.textContent = "Active";

    // Simple prototype responses

    setTimeout(function () {

        const assistantMessage =
            document.createElement("div");

        assistantMessage.className =
            "message assistant-message";

        const lowerMessage = message.toLowerCase();

        let reply =
            "Thank you for sharing that with me. Would you like to tell me more?";

        if (
            lowerMessage.includes("sad") ||
            lowerMessage.includes("lonely") ||
            lowerMessage.includes("alone")
        ) {

            reply =
                "I'm sorry you're feeling this way. I'm here to listen. Would you like to tell me about your day?";

        } else if (
            lowerMessage.includes("happy") ||
            lowerMessage.includes("good")
        ) {

            reply =
                "I'm happy to hear that! What made your day good? 😊";

        } else if (
            lowerMessage.includes("tired") ||
            lowerMessage.includes("sleep")
        ) {

            reply =
                "It sounds like you may need some rest. How did you sleep last night?";

        } else if (
            lowerMessage.includes("pain") ||
            lowerMessage.includes("hurt")
        ) {

            reply =
                "I'm sorry you're experiencing discomfort. If the pain is severe, sudden, or worrying you, please contact a healthcare professional or someone you trust.";

        } else if (
            lowerMessage.includes("hello") ||
            lowerMessage.includes("hi")
        ) {

            reply =
                "Hello! It's nice to talk with you. How are you feeling today?";

        }

        assistantMessage.textContent = reply;

        chatBox.appendChild(assistantMessage);

        chatBox.scrollTop = chatBox.scrollHeight;

    }, 700);
}


function handleEnter(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

}


function changeLanguage() {

    alert(
        "Language switching will be added in the next version."
    );

}
