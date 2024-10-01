var map = L.map("map").setView([28.6139, 77.209], 5);

// Add the OpenStreetMap tiles to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

// Marker data - points of interest in India
var locations = [
  {
    name: "Taj Mahal",
    lat: 27.1751,
    lon: 78.0421,
    description: "An ivory-white marble mausoleum in Agra.",
  },
  {
    name: "India Gate",
    lat: 28.6129,
    lon: 77.2295,
    description: "A war memorial located in New Delhi.",
  },
  {
    name: "Gateway of India",
    lat: 18.922,
    lon: 72.8347,
    description: "A famous monument located in Mumbai.",
  },
  {
    name: "Qutub Minar",
    lat: 28.5245,
    lon: 77.1855,
    description: "A towering minaret in Delhi.",
  },
  {
    name: "Mysore Palace",
    lat: 12.3051,
    lon: 76.6551,
    description: "A historical palace in the city of Mysore.",
  },
  {
    name: "Hawa Mahal",
    lat: 26.9239,
    lon: 75.8267,
    description: "A palace in Jaipur, India.",
  },
  {
    name: "Red Fort",
    lat: 28.6562,
    lon: 77.241,
    description: "A historic fort in the city of Delhi.",
  },
  {
    name: "Charminar",
    lat: 17.3616,
    lon: 78.4747,
    description: "A mosque located in Hyderabad.",
  },
  {
    name: "Lotus Temple",
    lat: 28.5535,
    lon: 77.2588,
    description: "A Baháʼí House of Worship in New Delhi.",
  },
  {
    name: "Andhra Pradesh",
    lat: 16.573,
    lon: 80.3579,
    description: "Known for its rich cultural heritage and IT industry.",
  },
  {
    name: "Amaravati",
    lat: 16.5183,
    lon: 80.555,
    description:
      "Capital city of Andhra Pradesh, known for its historical significance.",
  },

  {
    name: "Arunachal Pradesh",
    lat: 27.0956,
    lon: 93.6168,
    description: "Famous for its stunning landscapes and diverse tribes.",
  },
  {
    name: "Itanagar",
    lat: 27.1095,
    lon: 93.605,
    description: "Capital city of Arunachal Pradesh.",
  },

  {
    name: "Assam",
    lat: 26.1433,
    lon: 91.7898,
    description: "Renowned for tea plantations and wildlife sanctuaries.",
  },
  {
    name: "Dispur",
    lat: 26.1445,
    lon: 91.7897,
    description: "Capital city of Assam.",
  },

  {
    name: "Bihar",
    lat: 25.5941,
    lon: 85.1376,
    description: "An ancient center of learning, significant in Buddhism.",
  },
  {
    name: "Patna",
    lat: 25.61,
    lon: 85.1412,
    description: "Capital city of Bihar.",
  },

  {
    name: "Chhattisgarh",
    lat: 21.2787,
    lon: 81.8661,
    description: "Known for its rich mineral resources and tribal culture.",
  },
  {
    name: "Raipur",
    lat: 21.2514,
    lon: 81.6296,
    description: "Capital city of Chhattisgarh.",
  },

  {
    name: "Goa",
    lat: 15.4909,
    lon: 73.8278,
    description: "Famous for pristine beaches and vibrant nightlife.",
  },
  {
    name: "Panaji",
    lat: 15.4909,
    lon: 73.8274,
    description: "Capital city of Goa.",
  },

  {
    name: "Gujarat",
    lat: 23.2156,
    lon: 72.6369,
    description: "A major industrial hub with rich cultural heritage.",
  },
  {
    name: "Gandhinagar",
    lat: 23.2156,
    lon: 72.6369,
    description: "Capital city of Gujarat.",
  },

  {
    name: "Haryana",
    lat: 29.0588,
    lon: 76.0856,
    description: "Known for agriculture and proximity to Delhi.",
  },
  {
    name: "Chandigarh",
    lat: 30.7333,
    lon: 76.7794,
    description: "Capital city of Haryana and Punjab.",
  },

  {
    name: "Himachal Pradesh",
    lat: 31.1048,
    lon: 77.1734,
    description: "Famous for its picturesque mountains and hill stations.",
  },
  {
    name: "Shimla",
    lat: 31.1048,
    lon: 77.6664,
    description: "Capital city of Himachal Pradesh.",
  },

  {
    name: "Jharkhand",
    lat: 23.3441,
    lon: 85.3096,
    description: "Rich in minerals and known for its dense forests.",
  },
  {
    name: "Ranchi",
    lat: 23.3569,
    lon: 85.3343,
    description: "Capital city of Jharkhand.",
  },

  {
    name: "Karnataka",
    lat: 12.9716,
    lon: 77.5946,
    description: "Home to the IT industry and historical sites.",
  },
  {
    name: "Bengaluru",
    lat: 12.9719,
    lon: 77.5937,
    description: "Capital city of Karnataka.",
  },

  {
    name: "Kerala",
    lat: 8.5241,
    lon: 76.9366,
    description: "Famous for its backwaters and Ayurvedic treatments.",
  },
  {
    name: "Thiruvananthapuram",
    lat: 8.5241,
    lon: 76.9496,
    description: "Capital city of Kerala.",
  },

  {
    name: "Madhya Pradesh",
    lat: 23.2599,
    lon: 77.4126,
    description: "Known for historical landmarks and wildlife sanctuaries.",
  },
  {
    name: "Bhopal",
    lat: 23.2599,
    lon: 77.4126,
    description: "Capital city of Madhya Pradesh.",
  },

  {
    name: "Maharashtra",
    lat: 19.076,
    lon: 72.8777,
    description: "Home to Mumbai, India's financial capital.",
  },
  {
    name: "Mumbai",
    lat: 19.076,
    lon: 72.8777,
    description: "Capital city of Maharashtra.",
  },

  {
    name: "Manipur",
    lat: 24.6637,
    lon: 93.9063,
    description: "Known for its scenic landscapes and rich culture.",
  },
  {
    name: "Imphal",
    lat: 24.817,
    lon: 93.9368,
    description: "Capital city of Manipur.",
  },

  {
    name: "Meghalaya",
    lat: 25.467,
    lon: 91.3662,
    description: "Famous for its high rainfall and lush greenery.",
  },
  {
    name: "Shillong",
    lat: 25.5788,
    lon: 91.8933,
    description: "Capital city of Meghalaya.",
  },

  {
    name: "Mizoram",
    lat: 23.1645,
    lon: 92.9376,
    description: "Known for its picturesque hills and tribal culture.",
  },
  {
    name: "Aizawl",
    lat: 23.1645,
    lon: 92.9376,
    description: "Capital city of Mizoram.",
  },

  {
    name: "Nagaland",
    lat: 26.1584,
    lon: 94.5624,
    description: "Famous for its diverse tribes and festivals.",
  },
  {
    name: "Kohima",
    lat: 25.674,
    lon: 94.102,
    description: "Capital city of Nagaland.",
  },

  {
    name: "Odisha",
    lat: 20.9517,
    lon: 85.0985,
    description: "Known for its temples, beaches, and handicrafts.",
  },
  {
    name: "Bhubaneswar",
    lat: 20.2961,
    lon: 85.8245,
    description: "Capital city of Odisha.",
  },

  {
    name: "Punjab",
    lat: 30.9009,
    lon: 75.8573,
    description: "Known for its agriculture and vibrant culture.",
  },
  {
    name: "Chandigarh",
    lat: 30.7333,
    lon: 76.7794,
    description: "Capital city of Punjab.",
  },

  {
    name: "Rajasthan",
    lat: 27.0238,
    lon: 74.2176,
    description: "Famous for its desert landscapes and historic forts.",
  },
  {
    name: "Jaipur",
    lat: 26.9124,
    lon: 75.7873,
    description: "Capital city of Rajasthan.",
  },

  {
    name: "Sikkim",
    lat: 27.533,
    lon: 88.6139,
    description: "Known for its biodiversity and stunning mountain views.",
  },
  {
    name: "Gangtok",
    lat: 27.3389,
    lon: 88.6139,
    description: "Capital city of Sikkim.",
  },

  {
    name: "Tamil Nadu",
    lat: 13.0827,
    lon: 80.2707,
    description: "Famous for its temples, culture, and cuisine.",
  },
  {
    name: "Chennai",
    lat: 13.0827,
    lon: 80.2707,
    description: "Capital city of Tamil Nadu.",
  },

  {
    name: "Telangana",
    lat: 17.0732,
    lon: 78.6553,
    description: "Known for its rich history and vibrant culture.",
  },
  {
    name: "Hyderabad",
    lat: 17.385,
    lon: 78.4867,
    description: "Capital city of Telangana.",
  },

  {
    name: "Tripura",
    lat: 23.94,
    lon: 91.3882,
    description: "Known for its diverse culture and scenic beauty.",
  },
  {
    name: "Agartala",
    lat: 23.8434,
    lon: 91.27,
    description: "Capital city of Tripura.",
  },

  {
    name: "Uttar Pradesh",
    lat: 27.033,
    lon: 81.27,
    description: "Home to the Taj Mahal and significant historical sites.",
  },
  {
    name: "Lucknow",
    lat: 26.8468,
    lon: 80.9462,
    description: "Capital city of Uttar Pradesh.",
  },

  {
    name: "Uttarakhand",
    lat: 30.0668,
    lon: 79.0193,
    description: "Famous for its mountains and spiritual destinations.",
  },
  {
    name: "Dehradun",
    lat: 30.3165,
    lon: 78.0322,
    description: "Capital city of Uttarakhand.",
  },

  {
    name: "West Bengal",
    lat: 22.5726,
    lon: 88.3639,
    description: "Known for its cultural heritage and vibrant arts.",
  },
  {
    name: "Kolkata",
    lat: 22.5726,
    lon: 88.3639,
    description: "Capital city of West Bengal.",
  },

  {
    name: "Delhi",
    lat: 28.6139,
    lon: 77.209,
    description: "The capital territory known for its historical significance.",
  },
  {
    name: "New Delhi",
    lat: 28.6139,
    lon: 77.209,
    description: "Capital city of India.",
  },
];



// Add markers to the map
locations.forEach((location) => {
  var marker = L.marker([location.lat, location.lon]).addTo(map);
  marker.bindPopup(`<b>${location.name}</b><br>${location.description}`);
});

// Search functionality
document.getElementById("searchBtn").addEventListener("click", function () {
  var searchInput = document.getElementById("search").value.toLowerCase();
  var foundLocation = locations.find((location) =>
    location.name.toLowerCase().includes(searchInput)
  );

// if the input is empty
  if(searchInput === ""){
    alert("Enter the place");
    return;
}

  if (foundLocation) {
    // Center the map on the found location and open the marker popup
    map.setView([foundLocation.lat, foundLocation.lon], 14);
    L.popup()
      .setLatLng([foundLocation.lat, foundLocation.lon])
      .setContent(
        `<b>${foundLocation.name}</b><br>${foundLocation.description}`
      )
      .openOn(map);
  }
  else {
    alert("Location not found. Please try a different search term.");
  }
});



