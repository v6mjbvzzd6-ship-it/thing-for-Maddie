// July 1st 2024
const anniversaryDate = new Date(2024, 6, 1);

const reasons = [
    "Your smile makes my whole day better",
    "You make me laugh harder than anyone else can",
    "You believe in me even when I don't",
    "I love how passionate you are about things you care about",
    "You're my favorite person to talk to",
    "You make ordinary days feel special"
];

const funnyMessages = [
    "Nope! Try again before I revoke your girlfriend privileges 😤",
    "Wrong! Do you even know me?? (kidding, try again) 💀",
    "Access denied. The relationship is under review 🕵️",
    "That's cute but incorrect. Try again bb 💗",
    "Denied! I'm telling on you to your mom 😭"
];

const hugMessages = [
    "Sending you the biggest hug right now 🤗",
    "Consider yourself hugged and kissed 💋",
    "Virtual hug incoming... there, delivered 🥰",
    "*squeezes you tight* 💕",
    "Kiss sent. Please confirm receipt 😘"
];

function normalize(str){
    return str.toLowerCase().trim();
}

function checkAnswers(){
    const q1 = normalize(document.getElementById("q1").value);
    const q2 = normalize(document.getElementById("q2").value);
    const q3 = normalize(document.getElementById("q3").value);

    const q1Correct = (q1 === "july 1" || q1 === "july 1st");
    const q2Correct = (q2 === "danthony" || q2 === "d'anthony");
    const q3Correct = (q3 === "red");

    if (q1Correct && q2Correct && q3Correct){
        document.getElementById("quiz-screen").style.display = "none";
        document.getElementById("main-content").style.display = "flex";
    } else {
        const randomMsg = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
        document.getElementById("quiz-message").textContent = randomMsg;
        document.getElementById("q1").value = "";
        document.getElementById("q2").value = "";
        document.getElementById("q3").value = "";
    }
}

function showReason(){
    const randomIndex = Math.floor(Math.random() * reasons.length);
    document.getElementById("reason-display").textContent = reasons[randomIndex];
}

function sendHug(event){
    const randomMsg = hugMessages[Math.floor(Math.random() * hugMessages.length)];
    document.getElementById("hug-display").textContent = randomMsg;

    const emojis = ["💕", "😘", "🤗", "💋", "❤️"];
    const rect = event.target.getBoundingClientRect();

    for (let i = 0; i < 6; i++){
        const emoji = document.createElement("div");
        emoji.className = "floating-emoji";
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = (rect.left + Math.random() * rect.width) + "px";
        emoji.style.top = rect.top + "px";

        document.body.appendChild(emoji);
        setTimeout(() => emoji.remove(), 2000);
    }
}

function updateCountdown(){
    const now = new Date();
    const diff = anniversaryDate - now;

    if (diff <= 0){
        document.getElementById("countdown").textContent = "Happy Anniversary Baby! 💕";
        return;
    }

    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff / (1000*60*60)) % 24);
    const minutes = Math.floor((diff / (1000*60)) % 60);

    document.getElementById("countdown").textContent = `${days}d ${hours}h ${minutes}m`;
}

document.getElementById("unlock-btn").addEventListener("click", checkAnswers);
document.getElementById("reason-btn").addEventListener("click", showReason);
document.getElementById("hug-btn").addEventListener("click", sendHug);

updateCountdown();
setInterval(updateCountdown, 60000);
