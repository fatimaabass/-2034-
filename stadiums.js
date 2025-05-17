/**
 * Stadiums page functionality for World Cup 2034 Saudi Arabia Guide
 * Handles filtering, modal details, and stadium interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize stadium filtering
    initStadiumFilters();
    
    // Initialize stadium detail modal functionality
    initStadiumDetailsModal();
    
    // Populate remaining stadiums in the grid
    populateStadiumsGrid();
});

/**
 * Initialize filtering functionality for stadiums
 */
function initStadiumFilters() {
    const cityFilter = document.getElementById('city-filter');
    const capacityFilter = document.getElementById('capacity-filter');
    const matchesFilter = document.getElementById('matches-filter');
    const resetFiltersButton = document.getElementById('reset-filters');
    
    // Get all stadium cards
    const stadiumCards = document.querySelectorAll('.stadium-card');
    
    // Filter change event handler
    const applyFilters = () => {
        const cityValue = cityFilter.value;
        const capacityValue = capacityFilter.value;
        const matchesValue = matchesFilter.value;
        
        stadiumCards.forEach(card => {
            let showCard = true;
            
            // Apply city filter
            if (cityValue !== 'all') {
                if (card.getAttribute('data-city') !== cityValue) {
                    showCard = false;
                }
            }
            
            // Apply capacity filter
            if (capacityValue !== 'all' && showCard) {
                const capacity = parseInt(card.getAttribute('data-capacity'), 10);
                
                if (capacityValue === '50000-plus' && capacity < 50000) {
                    showCard = false;
                } else if (capacityValue === '70000-plus' && capacity < 70000) {
                    showCard = false;
                } else if (capacityValue === '90000-plus' && capacity < 90000) {
                    showCard = false;
                }
            }
            
            // Apply matches filter
            if (matchesValue !== 'all' && showCard) {
                const matches = card.getAttribute('data-matches');
                if (!matches.includes(matchesValue)) {
                    showCard = false;
                }
            }
            
            // Show or hide card based on filters
            if (showCard) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Show a message if no stadiums match the filters
        const stadiumsGrid = document.getElementById('stadiums-grid');
        const noResultsMessage = document.querySelector('.no-results-message') || createNoResultsMessage();
        
        let visibleCards = 0;
        stadiumCards.forEach(card => {
            if (card.style.display !== 'none') {
                visibleCards++;
            }
        });
        
        if (visibleCards === 0) {
            stadiumsGrid.appendChild(noResultsMessage);
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
    };
    
    // Create "no results" message element
    const createNoResultsMessage = () => {
        const message = document.createElement('div');
        message.className = 'no-results-message';
        message.innerHTML = `
            <p>
                <span class="en">No stadiums match your filters. Please try different criteria.</span>
                <span class="ar">لا توجد ملاعب تطابق الفلاتر الخاصة بك. يرجى تجربة معايير مختلفة.</span>
            </p>
        `;
        return message;
    };
    
    // Add event listeners to filters
    if (cityFilter) cityFilter.addEventListener('change', applyFilters);
    if (capacityFilter) capacityFilter.addEventListener('change', applyFilters);
    if (matchesFilter) matchesFilter.addEventListener('change', applyFilters);
    
    // Reset filters button
    if (resetFiltersButton) {
        resetFiltersButton.addEventListener('click', () => {
            cityFilter.value = 'all';
            capacityFilter.value = 'all';
            matchesFilter.value = 'all';
            applyFilters();
        });
    }
    
    // Apply filters on page load (in case of URL parameters)
    applyFilters();
    
    // Handle URL hash to show specific stadium
    if (window.location.hash) {
        const stadiumId = window.location.hash.substring(1);
        const stadium = document.getElementById(stadiumId);
        
        if (stadium) {
            // Scroll to the stadium
            setTimeout(() => {
                stadium.scrollIntoView({behavior: 'smooth'});
                // Highlight the stadium briefly
                stadium.classList.add('highlight');
                setTimeout(() => {
                    stadium.classList.remove('highlight');
                }, 2000);
            }, 500);
        }
    }
}

/**
 * Initialize stadium details modal functionality
 */
function initStadiumDetailsModal() {
    const modal = document.getElementById('stadium-detail-modal');
    const modalContent = document.getElementById('stadium-detail-content');
    const closeButton = modal.querySelector('.close-modal');
    const detailButtons = document.querySelectorAll('.stadium-details');
    
    // Open modal when clicking detail buttons
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const stadiumCard = this.closest('.stadium-card');
            const stadiumId = stadiumCard.id;
            
            // Find stadium data
            const stadium = stadiumsData.find(s => s.id === stadiumId);
            
            if (stadium) {
                // Populate modal content
                modalContent.innerHTML = createStadiumDetailContent(stadium);
                
                // Show modal
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent scrolling
                
                // Initialize photo gallery if included
                initPhotoGallery();
            }
        });
    });
    
    // Close modal when clicking close button
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        });
    }
    
    // Close modal when clicking outside of content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
}

/**
 * Create HTML content for stadium detail modal
 * @param {Object} stadium - Stadium data object
 * @returns {string} HTML content
 */
function createStadiumDetailContent(stadium) {
    // Current language
    const lang = document.documentElement.lang;
    
    // Generate HTML content
    return `
        <div class="stadium-detail-header">
            <h2>${lang === 'en' ? stadium.name : stadium.nameAr}</h2>
            <div class="stadium-detail-location">
                <i class="fas fa-map-marker-alt"></i>
                <span>${lang === 'en' ? stadium.city : getCityNameAr(stadium.city)}</span>
            </div>
        </div>
        
        <div class="stadium-detail-image">
            <img src="${stadium.image}" alt="${stadium.name}">
        </div>
        
        <div class="stadium-detail-info">
            <div class="info-section">
                <h3>
                    <span class="en">Stadium Information</span>
                    <span class="ar">معلومات الملعب</span>
                </h3>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">
                            <i class="fas fa-users"></i>
                            <span class="en">Capacity</span>
                            <span class="ar">السعة</span>
                        </div>
                        <div class="info-value">${stadium.capacity.toLocaleString()}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">
                            <i class="fas fa-calendar-alt"></i>
                            <span class="en">Opening Date</span>
                            <span class="ar">تاريخ الافتتاح</span>
                        </div>
                        <div class="info-value">${stadium.opening}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">
                            <i class="fas fa-trophy"></i>
                            <span class="en">Tournament Stages</span>
                            <span class="ar">مراحل البطولة</span>
                        </div>
                        <div class="info-value">${getStadiumMatchStages(stadium.matches, lang)}</div>
                    </div>
                </div>
            </div>
            
            <div class="info-section">
                <h3>
                    <span class="en">Features & Design</span>
                    <span class="ar">المميزات والتصميم</span>
                </h3>
                <p>${lang === 'en' ? stadium.description : stadium.descriptionAr}</p>
                <p>${lang === 'en' ? stadium.features : stadium.featuresAr}</p>
            </div>
            
            <div class="info-section">
                <h3>
                    <span class="en">Transportation Options</span>
                    <span class="ar">خيارات النقل</span>
                </h3>
                <div class="transport-options-grid">
                    ${createTransportOptions(stadium.transportation, lang)}
                </div>
            </div>
            
            <div class="info-section">
                <h3>
                    <span class="en">Nearby Amenities</span>
                    <span class="ar">المرافق القريبة</span>
                </h3>
                <div class="nearby-grid">
                    ${createNearbyAmenities(stadium.nearby, lang)}
                </div>
            </div>
        </div>
        
        <div class="stadium-detail-footer">
            <a href="matches.html?stadium=${stadium.id}" class="btn primary">
                <span class="en">View Matches at This Stadium</span>
                <span class="ar">عرض المباريات في هذا الملعب</span>
            </a>
            <button class="btn outline show-on-map" data-type="stadium" data-id="${stadium.id}">
                <i class="fas fa-map-marked-alt"></i>
                <span class="en">Show on Map</span>
                <span class="ar">عرض على الخريطة</span>
            </button>
        </div>
    `;
}

/**
 * Get Arabic name for a city
 * @param {string} cityName - English city name
 * @returns {string} Arabic city name
 */
function getCityNameAr(cityName) {
    const cityMap = {
        'Riyadh': 'الرياض',
        'Jeddah': 'جدة',
        'Khobar': 'الخبر',
        'NEOM': 'نيوم',
        'Qiddiya': 'القدية'
    };
    
    return cityMap[cityName] || cityName;
}

/**
 * Format match stages for display
 * @param {Array} matches - Array of match stage codes
 * @param {string} lang - Current language code
 * @returns {string} Formatted match stages text
 */
function getStadiumMatchStages(matches, lang) {
    const stageMap = {
        'group': {
            en: 'Group Stage',
            ar: 'دور المجموعات'
        },
        'round-32': {
            en: 'Round of 32',
            ar: 'دور الـ32'
        },
        'round-16': {
            en: 'Round of 16',
            ar: 'دور الـ16'
        },
        'quarterfinal': {
            en: 'Quarter Finals',
            ar: 'ربع النهائي'
        },
        'semifinal': {
            en: 'Semi Finals',
            ar: 'نصف النهائي'
        },
        'third-place': {
            en: 'Third Place Match',
            ar: 'مباراة تحديد المركز الثالث'
        },
        'final': {
            en: 'Final',
            ar: 'النهائي'
        },
        'opening': {
            en: 'Opening Ceremony',
            ar: 'حفل الافتتاح'
        }
    };
    
    // Map match codes to readable text in the appropriate language
    const stageTexts = matches.map(match => {
        return stageMap[match] ? stageMap[match][lang] : match;
    });
    
    return stageTexts.join(', ');
}

/**
 * Create transportation options HTML
 * @param {Object} transportation - Transportation options data
 * @param {string} lang - Current language code
 * @returns {string} HTML for transportation options
 */
function createTransportOptions(transportation, lang) {
    if (!transportation) return '';
    
    let html = '';
    
    if (transportation.publicTransport) {
        html += `
            <div class="transport-option">
                <div class="transport-icon">
                    <i class="fas fa-subway"></i>
                </div>
                <h4>
                    <span class="en">Public Transport</span>
                    <span class="ar">النقل العام</span>
                </h4>
                <p>${lang === 'en' ? transportation.publicTransport : transportation.publicTransportAr}</p>
            </div>
        `;
    }
    
    if (transportation.parking) {
        html += `
            <div class="transport-option">
                <div class="transport-icon">
                    <i class="fas fa-parking"></i>
                </div>
                <h4>
                    <span class="en">Parking</span>
                    <span class="ar">مواقف السيارات</span>
                </h4>
                <p>${lang === 'en' ? transportation.parking : transportation.parkingAr}</p>
            </div>
        `;
    }
    
    if (transportation.shuttle) {
        html += `
            <div class="transport-option">
                <div class="transport-icon">
                    <i class="fas fa-bus"></i>
                </div>
                <h4>
                    <span class="en">Shuttle Service</span>
                    <span class="ar">خدمة النقل</span>
                </h4>
                <p>${lang === 'en' ? transportation.shuttle : transportation.shuttleAr}</p>
            </div>
        `;
    }
    
    return html;
}

/**
 * Create HTML for nearby amenities
 * @param {Object} nearby - Nearby amenities data
 * @param {string} lang - Current language code
 * @returns {string} HTML for nearby amenities
 */
function createNearbyAmenities(nearby, lang) {
    if (!nearby) return '';
    
    let html = '';
    
    if (nearby.restaurants && nearby.restaurants.length > 0) {
        html += `
            <div class="nearby-category">
                <h4>
                    <i class="fas fa-utensils"></i>
                    <span class="en">Restaurants</span>
                    <span class="ar">المطاعم</span>
                </h4>
                <ul>
                    ${nearby.restaurants.map(restaurant => `
                        <li>${lang === 'en' ? restaurant.name : restaurant.nameAr}</li>
                    `).join('')}
                </ul>
            </div>
        `;
    }
    
    if (nearby.hotels && nearby.hotels.length > 0) {
        html += `
            <div class="nearby-category">
                <h4>
                    <i class="fas fa-hotel"></i>
                    <span class="en">Hotels</span>
                    <span class="ar">الفنادق</span>
                </h4>
                <ul>
                    ${nearby.hotels.map(hotel => `
                        <li>${lang === 'en' ? hotel.name : hotel.nameAr}</li>
                    `).join('')}
                </ul>
            </div>
        `;
    }
    
    if (nearby.shopping && nearby.shopping.length > 0) {
        html += `
            <div class="nearby-category">
                <h4>
                    <i class="fas fa-shopping-bag"></i>
                    <span class="en">Shopping</span>
                    <span class="ar">التسوق</span>
                </h4>
                <ul>
                    ${nearby.shopping.map(shop => `
                        <li>${lang === 'en' ? shop.name : shop.nameAr}</li>
                    `).join('')}
                </ul>
            </div>
        `;
    }
    
    if (nearby.attractions && nearby.attractions.length > 0) {
        html += `
            <div class="nearby-category">
                <h4>
                    <i class="fas fa-monument"></i>
                    <span class="en">Attractions</span>
                    <span class="ar">المعالم السياحية</span>
                </h4>
                <ul>
                    ${nearby.attractions.map(attraction => `
                        <li>${lang === 'en' ? attraction.name : attraction.nameAr}</li>
                    `).join('')}
                </ul>
            </div>
        `;
    }
    
    return html;
}

/**
 * Initialize photo gallery in stadium detail modal
 */
function initPhotoGallery() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const mainImage = document.querySelector('.stadium-detail-image img');
    
    if (galleryImages.length > 0 && mainImage) {
        galleryImages.forEach(image => {
            image.addEventListener('click', function() {
                // Update main image src
                mainImage.src = this.src;
                
                // Remove active class from all images
                galleryImages.forEach(img => img.classList.remove('active'));
                
                // Add active class to clicked image
                this.classList.add('active');
            });
        });
    }
}

/**
 * Populate remaining stadiums in the grid
 * Uses stadiumsData from data/stadiums.js
 */
function populateStadiumsGrid() {
    if (typeof stadiumsData === 'undefined') return;
    
    const stadiumsGrid = document.getElementById('stadiums-grid');
    if (!stadiumsGrid) return;
    
    // Get IDs of existing stadium cards
    const existingStadiumIds = Array.from(
        document.querySelectorAll('.stadium-card')
    ).map(card => card.id);
    
    // Filter stadiums that aren't already in the DOM
    const remainingStadiums = stadiumsData.filter(
        stadium => !existingStadiumIds.includes(stadium.id)
    );
    
    // Add remaining stadiums to the grid
    remainingStadiums.forEach(stadium => {
        const matchBadgeClass = stadium.matches.includes('final') ? 
                              'final' : 
                              stadium.matches.includes('semifinal') ? 
                              'semifinal' : '';
        
        const matchBadgeText = stadium.matches.includes('final') ? 
                             { en: 'Final', ar: 'النهائي' } : 
                             stadium.matches.includes('semifinal') ? 
                             { en: 'Semi Final', ar: 'نصف النهائي' } : 
                             { en: '', ar: '' };
        
        const stadiumCard = document.createElement('div');
        stadiumCard.className = 'stadium-card';
        stadiumCard.id = stadium.id;
        stadiumCard.setAttribute('data-city', stadium.city.toLowerCase());
        stadiumCard.setAttribute('data-capacity', stadium.capacity);
        stadiumCard.setAttribute('data-matches', stadium.matches.join(','));
        
        stadiumCard.innerHTML = `
            <div class="stadium-image">
                <img src="${stadium.image}" alt="${stadium.name}">
                ${matchBadgeClass ? `
                    <div class="match-badge ${matchBadgeClass}">
                        <span class="en">${matchBadgeText.en}</span>
                        <span class="ar">${matchBadgeText.ar}</span>
                    </div>
                ` : ''}
            </div>
            <div class="stadium-info">
                <h3>
                    <span class="en">${stadium.name}</span>
                    <span class="ar">${stadium.nameAr}</span>
                </h3>
                <div class="info-row">
                    <div class="info-label">
                        <i class="fas fa-map-marker-alt"></i>
                        <span class="en">Location:</span>
                        <span class="ar">الموقع:</span>
                    </div>
                    <div class="info-value">
                        <span class="en">${stadium.city}</span>
                        <span class="ar">${getCityNameAr(stadium.city)}</span>
                    </div>
                </div>
                <div class="info-row">
                    <div class="info-label">
                        <i class="fas fa-users"></i>
                        <span class="en">Capacity:</span>
                        <span class="ar">السعة:</span>
                    </div>
                    <div class="info-value">
                        <span class="en">${stadium.capacity.toLocaleString()}</span>
                        <span class="ar">${stadium.capacity.toLocaleString()}</span>
                    </div>
                </div>
                <div class="info-row">
                    <div class="info-label">
                        <i class="fas fa-trophy"></i>
                        <span class="en">Matches:</span>
                        <span class="ar">المباريات:</span>
                    </div>
                    <div class="info-value">
                        <span class="en">${getStadiumMatchStages(stadium.matches, 'en')}</span>
                        <span class="ar">${getStadiumMatchStages(stadium.matches, 'ar')}</span>
                    </div>
                </div>
                <div class="info-row">
                    <div class="info-label">
                        <i class="fas fa-info-circle"></i>
                        <span class="en">Features:</span>
                        <span class="ar">المميزات:</span>
                    </div>
                    <div class="info-value">
                        <span class="en">${stadium.shortDescription}</span>
                        <span class="ar">${stadium.shortDescriptionAr}</span>
                    </div>
                </div>
                <button class="btn stadium-details">
                    <span class="en">View Details</span>
                    <span class="ar">عرض التفاصيل</span>
                </button>
            </div>
        `;
        
        stadiumsGrid.appendChild(stadiumCard);
    });
    
    // Re-initialize stadium detail buttons
    initStadiumDetailsModal();
}