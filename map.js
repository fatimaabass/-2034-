/**
 * Map functionality for World Cup 2034 Saudi Arabia Guide
 * Uses Leaflet.js for interactive maps
 */

let mainMap = null;
let markersLayer = null;

document.addEventListener('DOMContentLoaded', () => {
    // Initialize preview map on homepage
    if (document.getElementById('preview-map')) {
        initPreviewMap();
    }
    
    // Initialize stadiums map on stadiums page
    if (document.getElementById('stadiums-map')) {
        initStadiumsMap();
    }
    
    // Initialize tourism map on tourism page
    if (document.getElementById('tourism-map')) {
        initTourismMap();
    }
    
    // Initialize emergency services map on emergency page
    if (document.getElementById('emergency-services-map')) {
        initEmergencyMap();
    }
});

/**
 * Initialize the preview map displayed on the homepage
 */
function initPreviewMap() {
    // Center the map on Saudi Arabia
    const map = L.map('preview-map').setView([24.774265, 46.738586], 6); // Centered on Riyadh
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);
    
    // Add markers for main cities (if stadium info is available)
    if (typeof stadiumsInfo !== 'undefined') {
        // Create a markers layer group
        markersLayer = L.layerGroup().addTo(map);
        
        // Get unique cities from stadium info and add a marker for each
        const cities = new Set();
        stadiumsInfo.forEach(stadium => {
            cities.add(stadium.city);
        });
        
        cities.forEach(city => {
            const cityData = getCityData(city);
            if (cityData) {
                const marker = L.marker([cityData.lat, cityData.lng])
                    .bindPopup(`<strong>${cityData.name}</strong><br>${getCityStadiumCount(city)} stadiums`);
                markersLayer.addLayer(marker);
            }
        });
        
        // Fit map to markers
        const bounds = markersLayer.getBounds();
        if (bounds.isValid()) {
            map.fitBounds(bounds, {padding: [50, 50]});
        }
    }
}

/**
 * Initialize the detailed stadiums map
 */
function initStadiumsMap() {
    // Center the map on Saudi Arabia
    const map = L.map('stadiums-map').setView([24.774265, 46.738586], 6); // Centered on Riyadh
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);
    
    // Add stadium markers if info is available
    if (typeof stadiumsInfo !== 'undefined') {
        // Create a markers layer group
        markersLayer = L.layerGroup().addTo(map);
        
        // Add a marker for each stadium
        stadiumsInfo.forEach(stadium => {
            // Determine marker icon based on stadium type
            let markerColor = '#006c35'; // Default green for regular stadiums
            
            if (stadium.matches.includes('final')) {
                markerColor = '#e94a87'; // Pink/magenta for final stadium
            } else if (stadium.matches.includes('semifinal')) {
                markerColor = '#ffc107'; // Warning color for semifinal stadiums
            }
            
            // Create custom icon
            const icon = L.divIcon({
                className: 'custom-div-icon',
                html: `<div style="background-color: ${markerColor}; width: 30px; height: 30px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
                         <i class="fas fa-futbol" style="color: white;"></i>
                       </div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });
            
            // Add marker with popup
            const marker = L.marker([stadium.lat, stadium.lng], {icon: icon})
                .bindPopup(`
                    <strong>${stadium.name}</strong><br>
                    ${stadium.city}<br>
                    Capacity: ${stadium.capacity.toLocaleString()}<br>
                    <a href="#${stadium.id}" class="map-popup-link">View Details</a>
                `);
            markersLayer.addLayer(marker);
        });
        
        // Fit map to markers
        const bounds = markersLayer.getBounds();
        if (bounds.isValid()) {
            map.fitBounds(bounds, {padding: [50, 50]});
        }
        
        // Add popup link click event listener
        map.on('popupopen', function(e) {
            const links = document.querySelectorAll('.map-popup-link');
            links.forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    const stadiumId = this.getAttribute('href').substring(1);
                    const stadiumElement = document.getElementById(stadiumId);
                    if (stadiumElement) {
                        stadiumElement.scrollIntoView({behavior: 'smooth'});
                        // Highlight the stadium card
                        stadiumElement.classList.add('highlight');
                        setTimeout(() => {
                            stadiumElement.classList.remove('highlight');
                        }, 2000);
                    }
                });
            });
        });
    }
}

/**
 * Initialize the tourism map
 */
function initTourismMap() {
    // Center the map on Saudi Arabia
    const map = L.map('tourism-map').setView([24.774265, 46.738586], 6); // Centered on Riyadh
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);
    
    // Add markers if info is available
    if (typeof tourismInfo !== 'undefined') {
        // Create a markers layer group
        markersLayer = L.layerGroup().addTo(map);
        
        // Create layer groups for filtering
        const stadiumsLayer = L.layerGroup().addTo(map);
        const attractionsLayer = L.layerGroup().addTo(map);
        const hotelsLayer = L.layerGroup().addTo(map);
        const restaurantsLayer = L.layerGroup().addTo(map);
        
        // Add stadiums first (if available)
        if (typeof stadiumsInfo !== 'undefined') {
            stadiumsInfo.forEach(stadium => {
                const stadiumIcon = L.divIcon({
                    className: 'custom-div-icon',
                    html: `<div style="background-color: #006c35; width: 30px; height: 30px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
                             <i class="fas fa-futbol" style="color: white;"></i>
                           </div>`,
                    iconSize: [30, 30],
                    iconAnchor: [15, 15]
                });
                
                const marker = L.marker([stadium.lat, stadium.lng], {icon: stadiumIcon})
                    .bindPopup(`
                        <strong>${stadium.name}</strong><br>
                        ${stadium.city}<br>
                        <a href="stadiums.html#${stadium.id}" target="_blank">View Stadium Details</a>
                    `);
                stadiumsLayer.addLayer(marker);
            });
        }
        
        // Add attractions
        tourismInfo.attractions.forEach(attraction => {
            const attractionIcon = L.divIcon({
                className: 'custom-div-icon',
                html: `<div style="background-color: #e94a87; width: 30px; height: 30px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
                         <i class="fas fa-monument" style="color: white;"></i>
                       </div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });
            
            const marker = L.marker([attraction.lat, attraction.lng], {icon: attractionIcon})
                .bindPopup(`
                    <strong>${attraction.name}</strong><br>
                    ${attraction.city}<br>
                    ${attraction.description}<br>
                    <span class="small">${attraction.address}</span>
                `);
            attractionsLayer.addLayer(marker);
        });
        
        // Add hotels
        tourismInfo.hotels.forEach(hotel => {
            const hotelIcon = L.divIcon({
                className: 'custom-div-icon',
                html: `<div style="background-color: #17a2b8; width: 30px; height: 30px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
                         <i class="fas fa-hotel" style="color: white;"></i>
                       </div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });
            
            const marker = L.marker([hotel.lat, hotel.lng], {icon: hotelIcon})
                .bindPopup(`
                    <strong>${hotel.name}</strong><br>
                    ${hotel.city}<br>
                    ${hotel.rating} Star Hotel<br>
                    <span class="small">${hotel.address}</span>
                `);
            hotelsLayer.addLayer(marker);
        });
        
        // Add restaurants
        tourismInfo.restaurants.forEach(restaurant => {
            const restaurantIcon = L.divIcon({
                className: 'custom-div-icon',
                html: `<div style="background-color: #ffc107; width: 30px; height: 30px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
                         <i class="fas fa-utensils" style="color: white;"></i>
                       </div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });
            
            const marker = L.marker([restaurant.lat, restaurant.lng], {icon: restaurantIcon})
                .bindPopup(`
                    <strong>${restaurant.name}</strong><br>
                    ${restaurant.cuisine} Cuisine<br>
                    ${restaurant.city}<br>
                    <span class="small">${restaurant.address}</span>
                `);
            restaurantsLayer.addLayer(marker);
        });
        
        // Add layer controls
        const overlays = {
            "Stadiums": stadiumsLayer,
            "Attractions": attractionsLayer,
            "Hotels": hotelsLayer,
            "Restaurants": restaurantsLayer
        };
        
        L.control.layers(null, overlays).addTo(map);
        
        // Get bounds from all layers
        const bounds = L.featureGroup([stadiumsLayer, attractionsLayer, hotelsLayer, restaurantsLayer]).getBounds();
        if (bounds.isValid()) {
            map.fitBounds(bounds, {padding: [50, 50]});
        }
    }
}

/**
 * Initialize the emergency services map
 */
function initEmergencyMap() {
    // Center the map on Saudi Arabia
    const map = L.map('emergency-services-map').setView([24.774265, 46.738586], 6); // Centered on Riyadh
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);
    
    // Add markers if info is available
    if (typeof emergencyInfo !== 'undefined') {
        // Create layer groups for different types of facilities
        const hospitalsLayer = L.layerGroup().addTo(map);
        const policeLayer = L.layerGroup().addTo(map);
        const embassyLayer = L.layerGroup().addTo(map);
        const stadiumsLayer = L.layerGroup().addTo(map);
        
        // Add hospitals
        emergencyInfo.hospitals.forEach(hospital => {
            const hospitalIcon = L.divIcon({
                className: 'custom-div-icon',
                html: `<div style="background-color: #dc3545; width: 30px; height: 30px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
                         <i class="fas fa-hospital" style="color: white;"></i>
                       </div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });
            
            const marker = L.marker([hospital.lat, hospital.lng], {icon: hospitalIcon})
                .bindPopup(`
                    <strong>${hospital.name}</strong><br>
                    ${hospital.city}<br>
                    Phone: ${hospital.phone}<br>
                    <span class="small">${hospital.address}</span>
                `);
            hospitalsLayer.addLayer(marker);
        });
        
        // Add police stations
        emergencyInfo.policeStations.forEach(police => {
            const policeIcon = L.divIcon({
                className: 'custom-div-icon',
                html: `<div style="background-color: #343a40; width: 30px; height: 30px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
                         <i class="fas fa-shield-alt" style="color: white;"></i>
                       </div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });
            
            const marker = L.marker([police.lat, police.lng], {icon: policeIcon})
                .bindPopup(`
                    <strong>${police.name}</strong><br>
                    ${police.city}<br>
                    Phone: ${police.phone}<br>
                    <span class="small">${police.address}</span>
                `);
            policeLayer.addLayer(marker);
        });
        
        // Add embassies
        emergencyInfo.embassies.forEach(embassy => {
            const embassyIcon = L.divIcon({
                className: 'custom-div-icon',
                html: `<div style="background-color: #6c757d; width: 30px; height: 30px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
                         <i class="fas fa-flag" style="color: white;"></i>
                       </div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });
            
            const marker = L.marker([embassy.lat, embassy.lng], {icon: embassyIcon})
                .bindPopup(`
                    <strong>${embassy.country} Embassy</strong><br>
                    ${embassy.city}<br>
                    Phone: ${embassy.phone}<br>
                    <span class="small">${embassy.address}</span>
                `);
            embassyLayer.addLayer(marker);
        });
        
        // Add stadiums if available
        if (typeof stadiumsInfo !== 'undefined') {
            stadiumsInfo.forEach(stadium => {
                const stadiumIcon = L.divIcon({
                    className: 'custom-div-icon',
                    html: `<div style="background-color: #006c35; width: 30px; height: 30px; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
                             <i class="fas fa-futbol" style="color: white;"></i>
                           </div>`,
                    iconSize: [30, 30],
                    iconAnchor: [15, 15]
                });
                
                const marker = L.marker([stadium.lat, stadium.lng], {icon: stadiumIcon})
                    .bindPopup(`
                        <strong>${stadium.name}</strong><br>
                        ${stadium.city}<br>
                        <a href="stadiums.html#${stadium.id}" target="_blank">View Stadium Details</a>
                    `);
                stadiumsLayer.addLayer(marker);
            });
        }
        
        // Add layer controls
        const overlays = {
            "Hospitals": hospitalsLayer,
            "Police Stations": policeLayer,
            "Embassies": embassyLayer,
            "Stadiums": stadiumsLayer
        };
        
        L.control.layers(null, overlays).addTo(map);
        
        // Get bounds from all layers
        const bounds = L.featureGroup([hospitalsLayer, policeLayer, embassyLayer, stadiumsLayer]).getBounds();
        if (bounds.isValid()) {
            map.fitBounds(bounds, {padding: [50, 50]});
        }
    }
}

/**
 * Get data for a specific city
 * @param {string} cityName - The name of the city
 * @returns {Object|null} - City data or null if not found
 */
function getCityData(cityName) {
    // City geographic data
    const cities = {
        'Riyadh': {
            name: 'Riyadh',
            nameAr: 'الرياض',
            lat: 24.774265,
            lng: 46.738586
        },
        'Jeddah': {
            name: 'Jeddah',
            nameAr: 'جدة',
            lat: 21.485811,
            lng: 39.192505
        },
        'Khobar': {
            name: 'Khobar',
            nameAr: 'الخبر',
            lat: 26.282151,
            lng: 50.213997
        },
        'NEOM': {
            name: 'NEOM',
            nameAr: 'نيوم',
            lat: 27.5534,
            lng: 35.0080
        },
        'Qiddiya': {
            name: 'Qiddiya',
            nameAr: 'القدية',
            lat: 24.7580,
            lng: 46.2485
        }
    };
    
    return cities[cityName] || null;
}

/**
 * Get the number of stadiums in a city
 * @param {string} cityName - The name of the city
 * @returns {number} - Number of stadiums
 */
function getCityStadiumCount(cityName) {
    if (typeof stadiumsInfo === 'undefined') return 0;
    
    return stadiumsInfo.filter(stadium => stadium.city === cityName).length;
}

/**
 * Show a specific location on the map
 * @param {string} type - Type of location (hospital, police, embassy, stadium)
 * @param {string} id - ID of the location
 */
function showOnMap(type, id) {
    // This function is called from location cards
    // It should find the appropriate map and zoom to the location
    
    let map = null;
    let targetLocation = null;
    
    // Determine which map we're working with based on the current page
    if (document.getElementById('emergency-services-map')) {
        map = L.map('emergency-services-map');
        
        // Find the location based on type and ID
        if (type === 'hospital' && typeof emergencyInfo !== 'undefined') {
            targetLocation = emergencyInfo.hospitals.find(h => h.id === id);
        } else if (type === 'police' && typeof emergencyInfo !== 'undefined') {
            targetLocation = emergencyInfo.policeStations.find(p => p.id === id);
        } else if (type === 'embassy' && typeof emergencyInfo !== 'undefined') {
            targetLocation = emergencyInfo.embassies.find(e => e.id === id);
        }
    } else if (document.getElementById('tourism-map')) {
        map = L.map('tourism-map');
        
        // Find the location based on type and ID
        if (type === 'attraction' && typeof tourismInfo !== 'undefined') {
            targetLocation = tourismInfo.attractions.find(a => a.id === id);
        } else if (type === 'hotel' && typeof tourismInfo !== 'undefined') {
            targetLocation = tourismInfo.hotels.find(h => h.id === id);
        } else if (type === 'restaurant' && typeof tourismInfo !== 'undefined') {
            targetLocation = tourismInfo.restaurants.find(r => r.id === id);
        }
    } else if (document.getElementById('stadiums-map')) {
        map = L.map('stadiums-map');
        
        // Find the stadium by ID
        if (type === 'stadium' && typeof stadiumsInfo !== 'undefined') {
            targetLocation = stadiumsInfo.find(s => s.id === id);
        }
    }
    
    // If we found the map and the location, zoom to it
    if (map && targetLocation) {
        map.setView([targetLocation.lat, targetLocation.lng], 15);
        
        // Create a temporary highlighted marker
        const highlightedIcon = L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="background-color: #ff0000; width: 40px; height: 40px; border-radius: 50%; display: flex; justify-content: center; align-items: center; box-shadow: 0 0 15px #ff0000;">
                     <i class="fas fa-map-marker-alt" style="color: white; font-size: 20px;"></i>
                   </div>`,
            iconSize: [40, 40],
            iconAnchor: [20, 20]
        });
        
        const marker = L.marker([targetLocation.lat, targetLocation.lng], {icon: highlightedIcon})
            .addTo(map)
            .bindPopup(`<strong>${targetLocation.name}</strong>`)
            .openPopup();
        
        // Remove the marker after a few seconds
        setTimeout(() => {
            map.removeLayer(marker);
        }, 5000);
    }
}

// Add global event listener for "Show on Map" buttons
document.addEventListener('click', event => {
    if (event.target.classList.contains('show-on-map') || 
        event.target.closest('.show-on-map')) {
        
        const button = event.target.classList.contains('show-on-map') ? 
                      event.target : 
                      event.target.closest('.show-on-map');
        
        const type = button.getAttribute('data-type');
        const id = button.getAttribute('data-id');
        
        showOnMap(type, id);
    }
});