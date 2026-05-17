// 🔊 MUSIC
const bgm = document.getElementById("bgm");

function startMusic() {
  bgm.volume = 0.3;
  bgm.play().catch(() => {});
}

// ================= MATRIX =================
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let letters = "01HACKAIACCESSGRANTEDSYSTEMERRORWARNING".split("");
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) drops[i] = 1;

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

// ================= INTRO =================
const introLines = [
  "Initializing AI core...",
  "Bypassing firewall...",
  "Injecting system override...",
  "Scanning network...",
  "Loading interface...",
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

// ================= CHAT =================
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

// AI BRAIN
function aiBrain(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("hack")) return "🚫 Access denied.";
  if (msg.includes("hello")) return "🤖 Hello Operator.";
  if (msg.includes("status")) return "✔ System stable.";
  if (msg.includes("scan")) return "🧠 Scanning... clean.";
  if (msg.includes("help")) return "Commands: scan / status / hello / hack";

  return "⚠ Unknown command.";
}

// INPUT
input.addEventListener("keydown", function(e){
  if (e.key === "Enter") {

    startMusic(); // 🔊 START MUSIC

    const msg = input.value;
    if (!msg) return;

    addMessage(msg, "user");

    setTimeout(() => {
      addMessage(aiBrain(msg), "ai");
    }, 600);

    input.value = "";
  }
});

// ================= BOOT =================
function bootChat() {
  setTimeout(() => addMessage("System online ✔", "ai"), 500);
  setTimeout(() => addMessage("AI ready", "ai"), 1000);
  setTimeout(() => addMessage("Type 'help'", "ai"), 1500);
}