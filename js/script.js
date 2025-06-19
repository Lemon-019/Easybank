// script.js

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggleBtn");
    const navLinks = document.getElementById("navLinks");
  
    // Toggle mobile menu visibility
    toggleBtn.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  
    // Close mobile menu when clicking a link (optional UX improvement)
    const navItems = navLinks.querySelectorAll("a");
    navItems.forEach(item => {
      item.addEventListener("click", () => {
        if (navLinks.classList.contains("show")) {
          navLinks.classList.remove("show");
        }
      });
    });
  
    // Optionally hide nav on outside click
    window.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target) && e.target !== toggleBtn && navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
      }
    });
  });
  