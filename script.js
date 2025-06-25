
const textContainer = document.getElementById("love-text");
for (let i = 0; i < 1000; i++) {
  const line = document.createElement("div");
  line.textContent = "Я тебя люблю, Жаным 💘";
  textContainer.appendChild(line);
}

// Летающие сердечки
const heartsContainer = document.querySelector(".hearts");
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  heart.textContent = "❤️";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 500);
