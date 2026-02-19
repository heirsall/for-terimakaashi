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

// Sidebar toggle functionality
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");
if (sidebar && sidebarToggle) {
  sidebarToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    sidebar.classList.toggle("open");
  });
  // Optional: close sidebar when clicking outside
  document.addEventListener("click", function (e) {
    if (sidebar.classList.contains("open") && !sidebar.contains(e.target)) {
      sidebar.classList.remove("open");
    }
  });
}
