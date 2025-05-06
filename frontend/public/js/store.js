// Section1
function addToCart() {
  alert("Item added to cart!");
}

// Section2
document.querySelectorAll(".category-card").forEach(card => {
  card.addEventListener("click", () => {
    alert(`Showing results for: ${card.querySelector("h3").innerText}`);
  });
});

//Section3
document.querySelectorAll(".add-cart").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Added to cart!");
  });
});

document.querySelector(".view-all-btn").addEventListener("click", () => {
  alert("Redirecting to all medicines...");
});

// Section4
document.querySelector(".btn-primary").addEventListener("click", () => {
  alert("Redirecting to donation form...");
});

document.querySelector(".btn-secondary").addEventListener("click", () => {
  alert("Opening more info...");
});
