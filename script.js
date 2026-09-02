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

function showReason(){
    const randomIndex = Math.floor(Math.random() * reasons.length);
    document.getElementById("reason-display").textContent = reasons[randomIndex];
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

updateCountdown();
setInterval(updateCountdown, 60000);