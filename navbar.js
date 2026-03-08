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

fetch("/navbar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
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
