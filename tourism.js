/**
 * Tourism page functionality for World Cup 2034 Saudi Arabia Guide
 * Handles city tabs, attraction filtering, and interactive elements
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize city tabs functionality
    initCityTabs();
    
    // Populate city panels with data
    populateCityPanels();
    
    // Add event listeners for city vicinity options
    initVicinityToggles();
    
    // Handle URL hash for direct navigation
    handleUrlHash();
});

/**
 * Initialize city tabs functionality
 */
function initCityTabs() {
    const cityTabs = document.querySelectorAll('.city-tab');
    const cityPanels = document.querySelectorAll('.city-panel');
    
    cityTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and panels
            cityTabs.forEach(t => t.classList.remove('active'));
            cityPanels.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding panel
            const cityId = this.getAttribute('data-city');
            const panel = document.getElementById(cityId);
            if (panel) {
                panel.classList.add('active');
                
                // Update URL hash without triggering scroll
                const scrollPos = window.scrollY;
                window.location.hash = cityId;
                window.scrollTo(0, scrollPos);
            }
        });
    });
}

/**
 * Populate city panels with data from tourism.js
 */
function populateCityPanels() {
    if (typeof tourismData === 'undefined') return;
    
    const cities = ['riyadh', 'jeddah', 'khobar', 'neom'];
    
    cities.forEach(cityId => {
        const cityPanel = document.getElementById(cityId);
        if (!cityPanel) return;
        
        // Skip if the panel already has content
        if (cityPanel.querySelector('.attractions-grid')) return;
        
        const cityData = tourismData.cities.find(city => city.id === cityId);
        if (!cityData) return;
        
        // Create attractions container if it doesn't exist
        let attractionsContainer = cityPanel.querySelector('.attractions-container');
        if (!attractionsContainer) {
            attractionsContainer = document.createElement('div');
            attractionsContainer.className = 'attractions-container';
            attractionsContainer.innerHTML = `
                <h3>
                    <span class="en">Top Attractions</span>
                    <span class="ar">أبرز المعالم السياحية</span>
                </h3>
            `;
            cityPanel.appendChild(attractionsContainer);
        }
        
        // Create attractions grid
        const attractionsGrid = document.createElement('div');
        attractionsGrid.className = 'attractions-grid';
        
        // Add attractions
        cityData.attractions.forEach(attraction => {
            const attractionCard = document.createElement('div');
            attractionCard.className = 'attraction-card';
            
            attractionCard.innerHTML = `
                <div class="attraction-image">
                    <img src="${attraction.image}" alt="${attraction.name}">
                </div>
                <div class="attraction-info">
                    <h4>
                        <span class="en">${attraction.name}</span>
                        <span class="ar">${attraction.nameAr}</span>
                    </h4>
                    <p>
                        <span class="en">${attraction.description}</span>
                        <span class="ar">${attraction.descriptionAr}</span>
                    </p>
                    <div class="attraction-details">
                        <div class="detail-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span class="en">${attraction.location}</span>
                            <span class="ar">${attraction.locationAr}</span>
                        </div>
                        <div class="detail-item">
                            <i class="far fa-clock"></i>
                            <span class="en">${attraction.hours}</span>
                            <span class="ar">${attraction.hoursAr}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-ticket-alt"></i>
                            <span class="en">${attraction.fee}</span>
                            <span class="ar">${attraction.feeAr}</span>
                        </div>
                    </div>
                </div>
            `;
            
            attractionsGrid.appendChild(attractionCard);
        });
        
        attractionsContainer.appendChild(attractionsGrid);
        
        // Create dining options
        let diningOptions = cityPanel.querySelector('.dining-options');
        if (!diningOptions && cityData.restaurants && cityData.restaurants.length > 0) {
            diningOptions = document.createElement('div');
            diningOptions.className = 'dining-options';
            diningOptions.innerHTML = `
                <h3>
                    <span class="en">Where to Eat</span>
                    <span class="ar">أماكن الطعام</span>
                </h3>
            `;
            
            const diningGrid = document.createElement('div');
            diningGrid.className = 'dining-grid';
            
            cityData.restaurants.forEach(restaurant => {
                const diningCard = document.createElement('div');
                diningCard.className = 'dining-card';
                
                diningCard.innerHTML = `
                    <h4>
                        <span class="en">${restaurant.name}</span>
                        <span class="ar">${restaurant.nameAr}</span>
                    </h4>
                    <p>
                        <span class="en">${restaurant.description}</span>
                        <span class="ar">${restaurant.descriptionAr}</span>
                    </p>
                    <div class="dining-details">
                        <div class="detail-item">
                            <i class="fas fa-utensils"></i>
                            <span class="en">${restaurant.cuisine}</span>
                            <span class="ar">${restaurant.cuisineAr}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-money-bill-wave"></i>
                            <span class="en">Price Range: ${restaurant.priceRange}</span>
                            <span class="ar">نطاق السعر: ${restaurant.priceRangeAr}</span>
                        </div>
                    </div>
                `;
                
                diningGrid.appendChild(diningCard);
            });
            
            diningOptions.appendChild(diningGrid);
            cityPanel.appendChild(diningOptions);
        }
        
        // Create near stadiums section
        let nearStadiums = cityPanel.querySelector('.near-stadiums');
        if (!nearStadiums && cityData.stadiums && cityData.stadiums.length > 0) {
            nearStadiums = document.createElement('div');
            nearStadiums.className = 'near-stadiums';
            nearStadiums.innerHTML = `
                <h3>
                    <span class="en">Near the Stadiums</span>
                    <span class="ar">بالقرب من الملاعب</span>
                </h3>
            `;
            
            // Get stadium data if available
            const stadiums = typeof stadiumsData !== 'undefined' ? 
                            stadiumsData.filter(s => s.city.toLowerCase() === cityId) : 
                            cityData.stadiums;
            
            stadiums.forEach(stadium => {
                const stadiumVicinity = document.createElement('div');
                stadiumVicinity.className = 'stadium-vicinity';
                
                stadiumVicinity.innerHTML = `
                    <h4>
                        <span class="en">Around ${stadium.name}</span>
                        <span class="ar">حول ${stadium.nameAr}</span>
                    </h4>
                `;
                
                // Add vicinity options if available
                if (stadium.nearby) {
                    const vicinityOptions = document.createElement('div');
                    vicinityOptions.className = 'vicinity-options';
                    
                    // Add hotels
                    if (stadium.nearby.hotels && stadium.nearby.hotels.length > 0) {
                        const hotelsCategory = document.createElement('div');
                        hotelsCategory.className = 'option-category';
                        
                        hotelsCategory.innerHTML = `
                            <h5>
                                <i class="fas fa-hotel"></i>
                                <span class="en">Hotels</span>
                                <span class="ar">الفنادق</span>
                            </h5>
                            <ul>
                                ${stadium.nearby.hotels.map(hotel => `
                                    <li>
                                        <span class="en">${hotel.name}</span>
                                        <span class="ar">${hotel.nameAr}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        `;
                        
                        vicinityOptions.appendChild(hotelsCategory);
                    }
                    
                    // Add restaurants
                    if (stadium.nearby.restaurants && stadium.nearby.restaurants.length > 0) {
                        const restaurantsCategory = document.createElement('div');
                        restaurantsCategory.className = 'option-category';
                        
                        restaurantsCategory.innerHTML = `
                            <h5>
                                <i class="fas fa-utensils"></i>
                                <span class="en">Restaurants</span>
                                <span class="ar">المطاعم</span>
                            </h5>
                            <ul>
                                ${stadium.nearby.restaurants.map(restaurant => `
                                    <li>
                                        <span class="en">${restaurant.name}</span>
                                        <span class="ar">${restaurant.nameAr}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        `;
                        
                        vicinityOptions.appendChild(restaurantsCategory);
                    }
                    
                    // Add shopping
                    if (stadium.nearby.shopping && stadium.nearby.shopping.length > 0) {
                        const shoppingCategory = document.createElement('div');
                        shoppingCategory.className = 'option-category';
                        
                        shoppingCategory.innerHTML = `
                            <h5>
                                <i class="fas fa-shopping-bag"></i>
                                <span class="en">Shopping</span>
                                <span class="ar">التسوق</span>
                            </h5>
                            <ul>
                                ${stadium.nearby.shopping.map(shop => `
                                    <li>
                                        <span class="en">${shop.name}</span>
                                        <span class="ar">${shop.nameAr}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        `;
                        
                        vicinityOptions.appendChild(shoppingCategory);
                    }
                    
                    stadiumVicinity.appendChild(vicinityOptions);
                }
                
                nearStadiums.appendChild(stadiumVicinity);
            });
            
            cityPanel.appendChild(nearStadiums);
        }
    });
}

/**
 * Initialize toggles for vicinity options
 */
function initVicinityToggles() {
    document.body.addEventListener('click', event => {
        // Check if clicked element is a vicinity category heading (h5)
        const heading = event.target.closest('.option-category h5');
        
        if (heading) {
            const category = heading.closest('.option-category');
            const list = category.querySelector('ul');
            
            if (list) {
                list.classList.toggle('collapsed');
                heading.classList.toggle('collapsed');
            }
        }
    });
}

/**
 * Handle URL hash for direct navigation to city tabs
 */
function handleUrlHash() {
    const hash = window.location.hash.substring(1);
    
    if (hash) {
        // Check if hash corresponds to a city
        const cityTab = document.querySelector(`.city-tab[data-city="${hash}"]`);
        
        if (cityTab) {
            // Trigger click on the tab
            cityTab.click();
            
            // Scroll to the city section
            const citySection = document.getElementById('city-selector');
            if (citySection) {
                citySection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}

/**
 * Initialize carousel for images if they exist
 * @param {HTMLElement} container - Container element for the carousel
 */
function initImageCarousel(container) {
    const carousel = container.querySelector('.image-carousel');
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    const nextBtn = carousel.querySelector('.carousel-next');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    
    let currentSlide = 0;
    
    // Function to show a specific slide
    const showSlide = (index) => {
        // Wrap around if needed
        if (index >= slides.length) {
            index = 0;
        } else if (index < 0) {
            index = slides.length - 1;
        }
        
        // Update current slide
        currentSlide = index;
        
        // Hide all slides
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        // Show current slide
        slides[currentSlide].style.display = 'block';
        
        // Update indicators
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === currentSlide);
        });
    };
    
    // Event listeners for next and previous buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });
    }
    
    // Event listeners for indicators
    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            showSlide(i);
        });
    });
    
    // Auto-advance slides
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
    
    // Show initial slide
    showSlide(0);
}