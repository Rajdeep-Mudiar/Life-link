const locationInput = document.getElementById("locationInput");
const mapPopup = document.getElementById("mapPopup");
const closeMapBtn = document.getElementById("closeMap");
const useLocationBtn = document.getElementById("useLocation");
const manualToggleBtn = document.getElementById("manualToggle");

let map, marker, manualMode = false, mapInitialized = false;

locationInput.addEventListener("click", () => {
  mapPopup.style.display = "block";

  if (!mapInitialized) {
    map = L.map("map").setView([20.5937, 78.9629], 5); // Default India

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "Map data © OpenStreetMap contributors"
    }).addTo(map);

    map.on("click", function (e) {
      if (!manualMode) return;
      const { lat, lng } = e.latlng;
      locationInput.value = `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`;
      if (marker) map.removeLayer(marker);
      marker = L.marker(e.latlng).addTo(map);
    });

    mapInitialized = true;
  }
});

closeMapBtn.addEventListener("click", () => {
  mapPopup.style.display = "none";
});

useLocationBtn.addEventListener("click", () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    locationInput.value = `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`;

    if (marker) map.removeLayer(marker);

    const blueIcon = L.icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/64/64113.png", // blue marker icon
      iconSize: [30, 30],
      iconAnchor: [15, 30],
    });

    marker = L.marker([lat, lng], { icon: blueIcon }).addTo(map);
    map.setView([lat, lng], 15);
  }, () => {
    alert("Unable to retrieve your location.");
  });
});

manualToggleBtn.addEventListener("click", () => {
  manualMode = !manualMode;
  manualToggleBtn.textContent = manualMode ? "✅ Manual Mode On" : "🖱️ Add Marker Manually";
});
