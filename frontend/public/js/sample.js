document.addEventListener("DOMContentLoaded", function () {
    // Log site loaded
    console.log("LifLink site is active.");
  
    // Smooth scroll for internal anchor links (if added in the future)
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });
  
    // Dropdown on hover (desktop only)
    const dropdowns = document.querySelectorAll(".navbar .dropdown");
  
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener("mouseenter", function () {
        if (window.innerWidth > 768) {
          const toggle = this.querySelector(".dropdown-toggle");
          const menu = this.querySelector(".dropdown-menu");
          toggle.classList.add("show");
          menu.classList.add("show");
        }
      });
  
      dropdown.addEventListener("mouseleave", function () {
        if (window.innerWidth > 768) {
          const toggle = this.querySelector(".dropdown-toggle");
          const menu = this.querySelector(".dropdown-menu");
          toggle.classList.remove("show");
          menu.classList.remove("show");
        }
      });
    });
  
    // Simulate button clicks (for example forms, pages)
    const navItems = document.querySelectorAll(".dropdown-item");
    navItems.forEach(item => {
      item.addEventListener("click", () => {
        console.log(`Navigating to: ${item.textContent}`);
        // You can add window.location.href or modal triggers here
      });
    });
  });
  