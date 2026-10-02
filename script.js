const button = document.getElementById("openMessage");
const messageCard = document.getElementById("messageCard");


// Open birthday message
button.addEventListener("click", () => {

  messageCard.classList.add("show");

  messageCard.scrollIntoView({
    behavior: "smooth"
  });

  // Create a celebration burst
  for (let i = 0; i < 25; i++) {
    createHeart();
  }

});


// Floating hearts
function createHeart() {

  const heart = document.createElement("div");

  const hearts = ["💜", "💗", "💕", "💖", "🌸", "✨"];

  heart.classList.add("heart");

  heart.innerHTML =
    hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize =
    Math.random() * 20 + 15 + "px";

  heart.style.animationDuration =
    Math.random() * 5 + 5 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}


// Continuously create hearts
setInterval(createHeart, 700);


// Reveal elements when scrolling
const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });

  },
  {
    threshold: 0.15
  }
);


document
  .querySelectorAll(".card, .photo, .final-card")
  .forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

  });
