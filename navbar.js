// Determine correct path to navbar.html based on current location
let navbarPath = "./navbar.html";
if (window.location.pathname.includes("/messages/")) {
  navbarPath = "../navbar.html";
}

fetch(navbarPath)
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
    // Fungsi untuk menyesuaikan link navbar jika berada di folder messages
    function adjustNavbarLinksForMessages() {
      const links = document.querySelectorAll(".sidebar-nav a");
      const path = window.location.pathname;
      const isInMessages = /\/messages\//.test(path);
      links.forEach((link) => {
        let href = link.getAttribute("href");
        if (isInMessages) {
          // Jika link menuju ke messages, hapus ./messages/ agar tetap di folder yang sama
          if (href.startsWith("./messages/")) {
            link.setAttribute("href", href.replace("./messages/", ""));
          }
          // Jika link menuju ke index.html, naik satu folder
          if (href === "./index.html") {
            link.setAttribute("href", "../index.html");
          }
        } else {
          // Jika di root, biarkan link tetap relative
          link.setAttribute("href", href);
        }
      });
    }
    adjustNavbarLinksForMessages();
    // Sidebar toggle functionality (must run after HTML is injected)
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
  });
