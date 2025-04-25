function openEnvelope() {
  document.querySelector(".envelope").classList.add("opened");
}

// Music functionality
const music = document.getElementById("bg-music");

function openEnvelope() {
  document.querySelector(".envelope").classList.add("opened");
  music.play(); // Start playing music when opened
}

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
