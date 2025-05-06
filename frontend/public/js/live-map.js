// Initialize map
const map = L.map('map').setView([20.5937, 78.9629], 5); // Centered on India

// Tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
  maxZoom: 19
}).addTo(map);

// Add user's current location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const userCoords = [position.coords.latitude, position.coords.longitude];
      L.marker(userCoords).addTo(map)
        .bindPopup("You are here!").openPopup();
      map.setView(userCoords, 13);
    },
    () => {
      alert("Location access denied.");
    }
  );
} else {
  alert("Geolocation is not supported by your browser.");
}

// Sample help request markers (can be fetched from a database later)
const helpRequests = [
  { lat: 28.6139, lng: 77.2090, message: "Flood relief needed - Delhi" },
  { lat: 19.0760, lng: 72.8777, message: "Medical Aid Required - Mumbai" },
  { lat: 13.0827, lng: 80.2707, message: "Trapped survivors - Chennai" }
];

helpRequests.forEach(req => {
  L.marker([req.lat, req.lng])
    .addTo(map)
    .bindPopup(req.message);
});
