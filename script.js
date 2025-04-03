let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const music = document.getElementById("background-music");

function showSlide(index) {
  slides[currentIndex].classList.remove("active");
  slides[index].classList.add("active");
  currentIndex = index;
}

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    // Prevent looping back to first slide
    let nextIndex = currentIndex + 1;
    showSlide(nextIndex);
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    // Prevent looping back to the last slide
    let prevIndex = currentIndex - 1;
    showSlide(prevIndex);
  }
}

// Create floating bubbles animation
function createBubbles() {
  const animationContainer = document.querySelector(".background-animation");
  for (let i = 0; i < 20; i++) {
    let bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.animationDuration = Math.random() * 5 + 5 + "s";
    bubble.style.width = bubble.style.height = Math.random() * 20 + 10 + "px";
    animationContainer.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 10000);
  }
}
setInterval(createBubbles, 3000);
