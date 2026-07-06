const terminal = document.getElementById("terminalText");

const lines = [
  "Initializing...",

  "",

  "Connecting to heart.exe",

  "",

  "Searching for recipient...",

  "",

  "Recipient Found ❤️",

  "",

  "Name: Soraya",

  "",

  "Loading memories...",

  "",

  "Calculating feelings...",

  "",

  "ERROR",

  "",

  "Feelings exceed integer limit.",

  "",

  "Switching to manual mode...",

  "",

  "Launching surprise...",
];

function showBirthday() {
  const terminalScreen = document.getElementById("terminal");
  const birthday = document.getElementById("birthday");

  terminalScreen.classList.add("fade-out");

  setTimeout(() => {
    terminalScreen.style.display = "none";

    birthday.style.display = "flex";
    birthday.style.flexDirection = "column";
    birthday.style.justifyContent = "center";
    birthday.style.alignItems = "center";
    birthday.style.height = "100vh";

    birthday.classList.add("fade-in");

    typeTitle();
  }, 1000);
}

const title = document.getElementById("title");
const message = document.getElementById("message");

const text = "Happy Birthday, Soraya ❤️";

const msg = `

Today isn't just another day.

It's the day someone incredibly special came into this world.

Even though there are miles between us,
I wanted to build something instead of just saying it.

Every line of code here was written with you in mind.

I hope today brings you as much happiness
as you've brought into my life.

Happy Birthday.

❤️
- Mikeal

`;

let i = 0;

function typeTitle() {
  if (i < text.length) {
    title.innerHTML += text.charAt(i);

    i++;

    setTimeout(typeTitle, 100);
  } else {
    typeMessage();
  }
}

let j = 0;

function typeMessage() {
  if (j < msg.length) {
    message.innerHTML += msg.charAt(j);

    j++;

    setTimeout(typeMessage, 35);
  }
}

let line = 0;
let char = 0;

function typeTerminal() {
  if (line >= lines.length) {
    setTimeout(showBirthday, 2500);
    return;
  }

  if (char < lines[line].length) {
    terminal.innerHTML =
      terminal.innerHTML.replace("|", "") +
      lines[line].charAt(char) +
      '<span class="cursor">|</span>';

    char++;

    setTimeout(typeTerminal, 40);
  } else {
    terminal.innerHTML += "\n";

    line++;
    char = 0;

    setTimeout(typeTerminal, 250);
  }
}
function createHeart() {
  const heart = document.createElement("div");

  heart.className = "floating-heart";

  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "%";

  heart.style.fontSize = 15 + Math.random() * 30 + "px";

  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 350);
typeTerminal();
setInterval(() => {
  const sparkle = document.createElement("div");

  sparkle.innerHTML = "✨";

  sparkle.style.position = "fixed";
  sparkle.style.left = Math.random() * 100 + "%";
  sparkle.style.top = Math.random() * 100 + "%";
  sparkle.style.fontSize = "18px";
  sparkle.style.pointerEvents = "none";
  sparkle.style.opacity = "1";

  document.body.appendChild(sparkle);

  sparkle.animate(
    [
      { opacity: 1, transform: "translateY(0px)" },
      { opacity: 0, transform: "translateY(-30px)" },
    ],
    {
      duration: 1200,
    }
  );

  setTimeout(() => sparkle.remove(), 1200);
}, 400);
