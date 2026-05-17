// ========================
// 🔥 MATRIX BACKGROUND
// ========================
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let letters = "01HACKAIACCESSGRANTEDSYSTEMERRORWARNING";
letters = letters.split("");

const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) drops[x] = 1;

function drawMatrix() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "#00ff00";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random()*letters.length)];
    ctx.fillText(text, i*fontSize, drops[i]*fontSize);

    if (drops[i]*fontSize > canvas.height && Math.random()>0.975)
      drops[i]=0;

    drops[i]++;
  }
}
setInterval(drawMatrix, 33);


// ========================
// 🔥 INTRO SYSTEM
// ========================
const introLines = [
  "Initializing AI core...",
  "Bypassing firewall...",
  "Injecting system override...",
  "Scanning network...",
  "Loading hacker interface...",
  "SYSTEM COMPROMISED ✔"
];

let introText = document.getElementById("introText");
let i = 0;

function playIntro() {
  if (i < introLines.length) {
    introText.innerHTML += introLines[i] + "<br>";
    i++;
    setTimeout(playIntro, 700);
  } else {
    setTimeout(() => {
      document.getElementById("intro").style.display = "none";
      bootChat();
    }, 1000);
  }
}

playIntro();


// ========================
// 💬 CHAT SYSTEM
// ========================
const chat = document.getElementById("chat");
const input = document.getElementById("input");

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.innerHTML = sender === "user"
    ? ">> YOU: " + text
    : ">> AI: " + text;

  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

// 🤖 AI BRAIN
function aiBrain(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("hack")) return "🚫 Access denied. Security level too high.";
  if (msg.includes("hello")) return "🤖 Hello Operator.";
  if (msg.includes("who")) return "I am CORE-AI Terminal System.";
  if (msg.includes("status")) return "✔ All systems online.";
  if (msg.includes("scan")) return "🧠 Scanning network... clean.";
  if (msg.includes("help")) return "Commands: scan / status / hello / hack";

  return "⚠ Unknown command.";
}

// INPUT
input.addEventListener("keydown", function(e){
  if (e.key === "Enter") {
    const msg = input.value;
    if (!msg) return;

    addMessage(msg, "user");

    setTimeout(() => {
      addMessage(aiBrain(msg), "ai");
    }, 600);

    input.value = "";
  }
});


// ========================
// 🔥 BOOT CHAT MESSAGE
// ========================
function bootChat() {
  setTimeout(() => addMessage("System online ✔", "ai"), 500);
  setTimeout(() => addMessage("AI loaded successfully", "ai"), 1000);
  setTimeout(() => addMessage("Type 'help' to start", "ai"), 1500);
}