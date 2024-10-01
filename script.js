// Initialize the map and set its view to New Delhi, India
var map = L.map('map').setView([28.6139, 77.2090], 5); // New Delhi as the default location

// Add the OpenStreetMap tiles to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Marker data - points of interest in India
var locations = [
    { name: "Taj Mahal", lat: 27.1751, lon: 78.0421, description: "An ivory-white marble mausoleum in Agra." },
    { name: "India Gate", lat: 28.6129, lon: 77.2295, description: "A war memorial located in New Delhi." },
    { name: "Gateway of India", lat: 18.9220, lon: 72.8347, description: "A famous monument located in Mumbai." },
    { name: "Qutub Minar", lat: 28.5245, lon: 77.1855, description: "A towering minaret in Delhi." },
    { name: "Mysore Palace", lat: 12.3051, lon: 76.6551, description: "A historical palace in the city of Mysore." },
    { name: "Hawa Mahal", lat: 26.9239, lon: 75.8267, description: "A palace in Jaipur, India." },
    { name: "Red Fort", lat: 28.6562, lon: 77.2410, description: "A historic fort in the city of Delhi." },
    { name: "Charminar", lat: 17.3616, lon: 78.4747, description: "A mosque located in Hyderabad." },
    { name: "Lotus Temple", lat: 28.5535, lon: 77.2588, description: "A Baháʼí House of Worship in New Delhi." },
    { name: "Bengaluru", lat: 22.5448, lon: 88.3426, description: "Capital of Karnakata." },
    { name: "Mumbai", lat: 22.5448, lon: 88.3426, description: "Capital of Maharashtra." },
    { name: "Chennai", lat: 22.5448, lon: 88.3426, description: "Capital of Tamil Nadu." }
    
];

// Add markers to the map
locations.forEach(location => {
    var marker = L.marker([location.lat, location.lon]).addTo(map);
    marker.bindPopup(`<b>${location.name}</b><br>${location.description}`);
});

// Search functionality
document.getElementById('searchBtn').addEventListener('click', function() {
    var searchInput = document.getElementById('search').value.toLowerCase();
    var foundLocation = locations.find(location => location.name.toLowerCase().includes(searchInput));

    if (foundLocation) {
        // Center the map on the found location and open the marker popup
        map.setView([foundLocation.lat, foundLocation.lon], 14);
        L.popup()
            .setLatLng([foundLocation.lat, foundLocation.lon])
            .setContent(`<b>${foundLocation.name}</b><br>${foundLocation.description}`)
            .openOn(map);
    } else {
        alert("Location not found. Please try a different search term.");
    }
});
