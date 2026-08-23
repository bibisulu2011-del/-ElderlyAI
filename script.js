/* VOICE INPUT */

function startVoiceInput() {

    const status =
        document.getElementById("voice-status");

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

        status.textContent =
            translations[currentLanguage].voiceNotSupported;

        return;

    }


    const recognition =
        new SpeechRecognition();

    recognition.lang =
        currentLanguage === "ru"
            ? "ru-RU"
            : currentLanguage === "kk"
                ? "kk-KZ"
                : "en-US";

    recognition.interimResults =
        false;

    recognition.maxAlternatives =
        1;


    status.textContent =
        translations[currentLanguage].voiceListening;


    recognition.start();


    recognition.onresult =
        function(event) {

            const text =
                event.results[0][0].transcript;

            document.getElementById("user-input").value =
                text;

            sendMessage();

        };


    recognition.onerror =
        function() {

            status.textContent = "";

        };


    recognition.onend =
        function() {

            setTimeout(function() {

                status.textContent = "";

            }, 1500);

        };

}


/* VOICE OUTPUT */

function speak(text) {

    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.lang =
        currentLanguage === "ru"
            ? "ru-RU"
            : currentLanguage === "kk"
                ? "kk-KZ"
                : "en-US";

    speech.rate = 0.9;

    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

}


/* LANGUAGE */

function changeLanguage() {

    currentLanguage =
        document.getElementById("language-select").value;

    const t =
        translations[currentLanguage];


    document.getElementById("greeting").textContent =
        t.greeting;

    document.getElementById("hello-text").textContent =
        t.hello;

    document.getElementById("subtitle").textContent =
        t.subtitle;


    document.getElementById("checkin-title").textContent =
        t.checkinTitle;

    document.getElementById("checkin-description").textContent =
        t.checkinDescription;


    document.getElementById("great-text").textContent =
        t.great;

    document.getElementById("good-text").textContent =
        t.good;

    document.getElementById("okay-text").textContent =
        t.okay;

    document.getElementById("sad-text").textContent =
        t.sad;


    document.getElementById("medicine-title").textContent =
        t.medicineTitle;

    document.getElementById("medicine-description").textContent =
        t.medicineDescription;

    document.getElementById("medicine-name").textContent =
        t.medicineName;

    document.getElementById("medicine-time").textContent =
        t.medicineTime;


    document.getElementById("medicine-button").textContent =
        t.medicineButton;


    document.getElementById("assistant-title").textContent =
        t.assistantTitle;

    document.getElementById("assistant-description").textContent =
        t.assistantDescription;

    document.getElementById("user-input").placeholder =
        t.placeholder;

    document.getElementById("send-button").textContent =
        t.send;


    document.getElementById("summary-title").textContent =
        t.summaryTitle;

    document.getElementById("summary-checkin").textContent =
        t.summaryCheckin;

    document.getElementById("summary-medication").textContent =
        t.summaryMedication;

    document.getElementById("summary-conversation").textContent =
        t.summaryConversation;


    document.getElementById("footer-text").textContent =
        t.footer;

}


/* START */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadApp();

    }
);
