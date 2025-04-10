document.addEventListener("DOMContentLoaded", function () {
  function createEmoji() {
    const emojiList = [
      "💖",
      "😊",
      "🌸",
      "✨",
      "💌",
      "💜",
      "💞",
      "💟",
      "💗",
      "💋",
      "🐇",
    ];
    const emoji = document.createElement("div");
    emoji.classList.add("falling-emoji");
    emoji.innerText = emojiList[Math.floor(Math.random() * emojiList.length)];
    document.body.appendChild(emoji);

    // Случайное положение по оси X и Y
    emoji.style.left = Math.random() * window.innerWidth + "px"; // Случайное положение по X
    emoji.style.top = Math.random() * window.innerHeight + "px"; // Случайное положение по Y

    // Задаем случайную продолжительность анимации
    emoji.style.animationDuration = Math.random() * 2 + 3 + "s"; // Плавное исчезновение

    // Убираем эмодзи после завершения анимации
    setTimeout(() => {
      emoji.remove();
    }, 4000); // Убираем через 4 секунды (по времени анимации)
  }

  setInterval(createEmoji, 200); // Эмодзи создаются каждые 500 миллисекунд
});
