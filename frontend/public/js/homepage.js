// You can add future interactivity here
console.log("LifeLink homepage loaded.");
// Animate count-up effect
document.querySelectorAll('.number').forEach(counter => {
    const target = +counter.getAttribute('data-count');
    const duration = 1500;
    let start = 0;
    const stepTime = 20;
    const increment = target / (duration / stepTime);
  
    const updateCount = () => {
      start += increment;
      if (start < target) {
        counter.textContent = Math.ceil(start);
        requestAnimationFrame(updateCount);
      } else {
        counter.textContent = target.toLocaleString();
      }
    };
  
    updateCount();
  });



  // drop down menu
  function toggleDropdown() {
    const dropdown = document.getElementById("bloodDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }

  // Close dropdown if clicked outside
  document.addEventListener("click", function(event) {
    const dropdown = document.getElementById("bloodDropdown");
    const button = document.querySelector(".dropdown-button");
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.style.display = "none";
    }
  });
  