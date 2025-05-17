/**
 * Matches page functionality for World Cup 2034 Saudi Arabia Guide
 * Handles match filtering, notifications, and detail views
 */

/**
 * Check if browser supports local storage
 * @returns {boolean} True if local storage is available
 */
function isLocalStorageAvailable() {
    try {
        const test = 'test';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * Save data to local storage
 * @param {string} key - Storage key
 * @param {*} value - Value to store
 * @returns {boolean} True if successful
 */
function saveToLocalStorage(key, value) {
    if (!isLocalStorageAvailable()) return false;
    
    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
        return true;
    } catch (e) {
        console.error('Error saving to localStorage', e);
        return false;
    }
}

/**
 * Get data from local storage
 * @param {string} key - Storage key
 * @param {*} defaultValue - Default value if not found
 * @returns {*} Stored value or default
 */
function getFromLocalStorage(key, defaultValue = null) {
    if (!isLocalStorageAvailable()) return defaultValue;
    
    try {
        const serializedValue = localStorage.getItem(key);
        if (serializedValue === null) {
            return defaultValue;
        }
        return JSON.parse(serializedValue);
    } catch (e) {
        console.error('Error reading from localStorage', e);
        return defaultValue;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize match filtering functionality
    initMatchFilters();
    
    // Initialize match notifications
    initMatchNotifications();
    
    // Initialize match detail modal
    initMatchDetailModal();
    
    // Populate stadium filter dropdown
    populateStadiumFilter();
    
    // Populate favorite teams dropdown
    populateFavoriteTeamsDropdown();
    
    // Populate match schedule
    populateMatchSchedule();
});

/**
 * Initialize filtering functionality for matches
 */
function initMatchFilters() {
    const stageFilter = document.getElementById('stage-filter');
    const stadiumFilter = document.getElementById('stadium-filter');
    const dateFilter = document.getElementById('date-filter');
    const searchInput = document.getElementById('match-search');
    const searchBtn = document.getElementById('search-btn');
    const resetFiltersBtn = document.getElementById('reset-match-filters');
    const showFavoritesBtn = document.getElementById('show-favorites-only');
    
    // Apply filters function
    const applyFilters = () => {
        const stageValue = stageFilter ? stageFilter.value : 'all';
        const stadiumValue = stadiumFilter ? stadiumFilter.value : 'all';
        const dateValue = dateFilter ? dateFilter.value : '';
        const searchValue = searchInput ? searchInput.value.toLowerCase() : '';
        const showFavoritesOnly = showFavoritesBtn && showFavoritesBtn.classList.contains('active');
        
        // Get all match cards
        const matchCards = document.querySelectorAll('.match-card');
        let visibleMatches = 0;
        
        // Get user's favorite teams
        const favoriteTeams = getFromLocalStorage('favorite-teams', []);
        
        // Filter match cards
        matchCards.forEach(card => {
            let showCard = true;
            
            // Stage filter
            if (stageValue !== 'all' && showCard) {
                if (!card.getAttribute('data-stage').includes(stageValue)) {
                    showCard = false;
                }
            }
            
            // Stadium filter
            if (stadiumValue !== 'all' && showCard) {
                if (card.getAttribute('data-stadium') !== stadiumValue) {
                    showCard = false;
                }
            }
            
            // Date filter
            if (dateValue && showCard) {
                const matchDate = card.closest('.match-day').getAttribute('data-date');
                if (matchDate !== dateValue) {
                    showCard = false;
                }
            }
            
            // Search filter
            if (searchValue && showCard) {
                const teams = card.getAttribute('data-teams');
                const teamNames = card.querySelectorAll('.team-name');
                let textMatch = false;
                
                teamNames.forEach(name => {
                    if (name.textContent.toLowerCase().includes(searchValue)) {
                        textMatch = true;
                    }
                });
                
                if (!textMatch && !teams.toLowerCase().includes(searchValue)) {
                    showCard = false;
                }
            }
            
            // Favorites filter
            if (showFavoritesOnly && showCard) {
                const teams = card.getAttribute('data-teams').split(',');
                let hasTeam = false;
                
                teams.forEach(team => {
                    if (favoriteTeams.includes(team)) {
                        hasTeam = true;
                    }
                });
                
                if (!hasTeam) {
                    showCard = false;
                }
            }
            
            // Update card visibility
            if (showCard) {
                card.style.display = '';
                visibleMatches++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Update match days and stage containers visibility
        updateContainersVisibility();
        
        // Show no results message if needed
        const scheduleContainer = document.getElementById('schedule-container');
        let noResultsMsg = document.querySelector('.no-results-message');
        
        if (visibleMatches === 0) {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.className = 'no-results-message';
                noResultsMsg.innerHTML = `
                    <p>
                        <span class="en">No matches match your search criteria. Please try different filters.</span>
                        <span class="ar">لا توجد مباريات تطابق معايير البحث الخاصة بك. يرجى تجربة فلاتر مختلفة.</span>
                    </p>
                `;
                scheduleContainer.appendChild(noResultsMsg);
            } else {
                noResultsMsg.style.display = 'block';
            }
        } else if (noResultsMsg) {
            noResultsMsg.style.display = 'none';
        }
    };
    
    // Update containers visibility based on visible match cards
    function updateContainersVisibility() {
        // Update match days visibility (hide days with no visible matches)
        const matchDays = document.querySelectorAll('.match-day');
        matchDays.forEach(day => {
            const visibleInDay = day.querySelectorAll('.match-card[style=""]').length;
            if (visibleInDay === 0) {
                day.style.display = 'none';
            } else {
                day.style.display = '';
            }
        });
        
        // Update stage containers visibility (hide stages with no visible days)
        const stageContainers = document.querySelectorAll('.stage-container');
        stageContainers.forEach(stageContainer => {
            const visibleDays = stageContainer.querySelectorAll('.match-day[style=""]').length;
            if (visibleDays === 0) {
                stageContainer.style.display = 'none';
            } else {
                stageContainer.style.display = '';
            }
        });
    }
    
    // Add event listeners to filters
    if (stageFilter) stageFilter.addEventListener('change', applyFilters);
    if (stadiumFilter) stadiumFilter.addEventListener('change', applyFilters);
    if (dateFilter) dateFilter.addEventListener('change', applyFilters);
    
    // Search button click
    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            applyFilters();
        });
    }
    
    // Search input enter key
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                applyFilters();
            }
        });
    }
    
    // Reset filters button
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', () => {
            if (stageFilter) stageFilter.value = 'all';
            if (stadiumFilter) stadiumFilter.value = 'all';
            if (dateFilter) dateFilter.value = '';
            if (searchInput) searchInput.value = '';
            if (showFavoritesBtn) showFavoritesBtn.classList.remove('active');
            applyFilters();
        });
    }
    
    // Show favorites only button
    if (showFavoritesBtn) {
        showFavoritesBtn.addEventListener('click', () => {
            showFavoritesBtn.classList.toggle('active');
            applyFilters();
        });
    }
    
    // Apply filters on page load to handle URL parameters
    setTimeout(applyFilters, 500);
}

/**
 * Initialize match notifications functionality
 */
function initMatchNotifications() {
    const enableNotificationsCheckbox = document.getElementById('enable-notifications');
    const notificationTimeSelect = document.getElementById('notification-time-select');
    
    // Load notification preferences from local storage
    if (isLocalStorageAvailable()) {
        const notificationsEnabled = localStorage.getItem('notifications-enabled') === 'true';
        const notificationTime = localStorage.getItem('notification-time') || '60';
        
        if (enableNotificationsCheckbox) {
            enableNotificationsCheckbox.checked = notificationsEnabled;
        }
        
        if (notificationTimeSelect) {
            notificationTimeSelect.value = notificationTime;
        }
        
        // Update notification buttons based on saved preferences
        updateNotificationButtons();
    }
    
    // Toggle notifications setting
    if (enableNotificationsCheckbox) {
        enableNotificationsCheckbox.addEventListener('change', () => {
            saveNotificationPreferences();
            updateNotificationButtons();
            
            // Request notification permission if needed
            if (enableNotificationsCheckbox.checked) {
                requestNotificationPermission();
            }
        });
    }
    
    // Change notification time
    if (notificationTimeSelect) {
        notificationTimeSelect.addEventListener('change', () => {
            saveNotificationPreferences();
        });
    }
    
    // Add click handlers after populating match schedule
    document.addEventListener('DOMContentLoaded', setupNotifyButtons);
    
    // Setup after dynamic content is loaded
    window.addEventListener('load', setupNotifyButtons);
}

/**
 * Setup notification buttons click handlers
 */
function setupNotifyButtons() {
    // Setup notification buttons
    const notifyButtons = document.querySelectorAll('.match-notify');
    notifyButtons.forEach(button => {
        // Remove existing listeners
        button.removeEventListener('click', notifyButtonClickHandler);
        
        // Add fresh click handler
        button.addEventListener('click', notifyButtonClickHandler);
        
        // Set initial button state
        const matchId = button.getAttribute('data-match-id');
        updateNotifyButtonState(matchId, button);
    });
}

/**
 * Click handler for notification buttons
 */
function notifyButtonClickHandler() {
    const matchId = this.getAttribute('data-match-id');
    toggleMatchNotification(matchId, this);
}

/**
 * Save notification preferences to local storage
 */
function saveNotificationPreferences() {
    if (!isLocalStorageAvailable()) return;
    
    const enableNotificationsCheckbox = document.getElementById('enable-notifications');
    const notificationTimeSelect = document.getElementById('notification-time-select');
    
    if (enableNotificationsCheckbox) {
        localStorage.setItem('notifications-enabled', enableNotificationsCheckbox.checked);
    }
    
    if (notificationTimeSelect) {
        localStorage.setItem('notification-time', notificationTimeSelect.value);
    }
}

/**
 * Request notification permission from the browser
 */
function requestNotificationPermission() {
    if (!('Notification' in window)) {
        alert('This browser does not support desktop notifications');
        return;
    }
    
    if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
        Notification.requestPermission();
    }
}

/**
 * Update all notification buttons based on saved preferences
 */
function updateNotificationButtons() {
    const notifyButtons = document.querySelectorAll('.match-notify');
    const notificationsEnabled = localStorage.getItem('notifications-enabled') === 'true';
    
    notifyButtons.forEach(button => {
        const matchId = button.getAttribute('data-match-id');
        
        if (!notificationsEnabled) {
            // Disable all buttons if notifications are globally disabled
            button.disabled = true;
            button.classList.remove('active');
            button.title = document.documentElement.lang === 'en' ? 
                         'Enable notifications in settings' : 
                         'تمكين الإشعارات في الإعدادات';
        } else {
            // Enable buttons and set appropriate state
            button.disabled = false;
            updateNotifyButtonState(matchId, button);
        }
    });
}

/**
 * Update a specific notification button state
 * @param {string} matchId - ID of the match
 * @param {HTMLElement} button - Button element to update
 */
function updateNotifyButtonState(matchId, button) {
    if (!isLocalStorageAvailable() || !button) return;
    
    const notifiedMatches = getFromLocalStorage('notified-matches', []);
    const isNotified = notifiedMatches.includes(matchId);
    
    if (isNotified) {
        button.classList.add('active');
        button.innerHTML = `
            <i class="fas fa-bell"></i>
            <span class="en">Notification Set</span>
            <span class="ar">تم ضبط التنبيه</span>
        `;
    } else {
        button.classList.remove('active');
        button.innerHTML = `
            <i class="far fa-bell"></i>
            <span class="en">Notify Me</span>
            <span class="ar">تنبيهي</span>
        `;
    }
}

/**
 * Toggle notification for a specific match
 * @param {string} matchId - ID of the match
 * @param {HTMLElement} button - Button element that was clicked
 */
function toggleMatchNotification(matchId, button) {
    if (!isLocalStorageAvailable()) return;
    
    const notifiedMatches = getFromLocalStorage('notified-matches', []);
    const isNotified = notifiedMatches.includes(matchId);
    
    if (isNotified) {
        // Remove notification
        const updatedNotifications = notifiedMatches.filter(id => id !== matchId);
        saveToLocalStorage('notified-matches', updatedNotifications);
        
        // Update button
        updateNotifyButtonState(matchId, button);
        
        // Display message
        showMessage(
            document.documentElement.lang === 'en' ? 
            'Match notification removed' : 
            'تم إزالة إشعار المباراة'
        );
    } else {
        // Add notification
        notifiedMatches.push(matchId);
        saveToLocalStorage('notified-matches', notifiedMatches);
        
        // Update button
        updateNotifyButtonState(matchId, button);
        
        // Get match details for notification message
        const match = findMatchById(matchId);
        if (match) {
            // Display message
            showMessage(
                document.documentElement.lang === 'en' ? 
                `You'll be notified before ${match.homeTeam} vs ${match.awayTeam}` : 
                `سيتم تنبيهك قبل مباراة ${match.homeTeamAr} ضد ${match.awayTeamAr}`
            );
        } else {
            showMessage(
                document.documentElement.lang === 'en' ? 
                'Match notification set' : 
                'تم ضبط إشعار المباراة'
            );
        }
    }
}

/**
 * Show a temporary message to the user
 * @param {string} message - Message to display
 */
function showMessage(message) {
    // Create message element if it doesn't exist
    let messageElement = document.querySelector('.notification-message');
    
    if (!messageElement) {
        messageElement = document.createElement('div');
        messageElement.className = 'notification-message';
        document.body.appendChild(messageElement);
    }
    
    // Update message and show
    messageElement.textContent = message;
    messageElement.classList.add('show');
    
    // Hide after delay
    setTimeout(() => {
        messageElement.classList.remove('show');
    }, 3000);
}

/**
 * Initialize match detail modal functionality
 */
function initMatchDetailModal() {
    const modal = document.getElementById('match-detail-modal');
    if (!modal) return;
    
    const modalContent = document.getElementById('match-detail-content');
    const closeButton = modal.querySelector('.close-modal');
    
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
    
    // Delegate click events for match info buttons
    document.addEventListener('click', function(event) {
        const target = event.target.closest('.match-info');
        if (!target) return;
        
        const matchId = target.getAttribute('data-match-id');
        const matchData = findMatchById(matchId);
        
        if (matchData && modalContent) {
            // Populate modal content
            modalContent.innerHTML = createMatchDetailContent(matchData);
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    });
}

/**
 * Create HTML content for match detail modal
 * @param {Object} match - Match data object
 * @returns {string} HTML content
 */
function createMatchDetailContent(match) {
    // Get stadium and city info
    const stadiumName = getStadiumName(match.stadium, 'en');
    const stadiumNameAr = getStadiumName(match.stadium, 'ar');
    const cityName = match.city;
    const cityNameAr = getCityNameAr(match.city);
    
    // Format date
    const dateObj = new Date(match.date);
    const formattedDate = {
        en: dateObj.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        ar: dateObj.toLocaleDateString('ar-SA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    };
    
    // Format stage name
    let stageName = match.stage === 'group' ? `Group ${match.group}` : getStageNameEn(match.stage);
    let stageNameAr = match.stage === 'group' ? `المجموعة ${match.group}` : getStageNameAr(match.stage);
    
    // Create HTML
    let html = `
        <div class="match-detail-header">
            <div class="match-detail-stage">
                <span class="en">${stageName}</span>
                <span class="ar">${stageNameAr}</span>
            </div>
            <div class="match-detail-date">
                <span class="en">${formattedDate.en}</span>
                <span class="ar">${formattedDate.ar}</span>
            </div>
            <div class="match-detail-time">${match.time} KSA</div>
        </div>
        
        <div class="match-detail-teams">
            <div class="team-detail team-home">
                <div class="team-code">${match.homeTeamCode}</div>
                <div class="team-name">
                    <span class="en">${match.homeTeam}</span>
                    <span class="ar">${match.homeTeamAr}</span>
                </div>
            </div>
            <div class="match-detail-vs">VS</div>
            <div class="team-detail team-away">
                <div class="team-code">${match.awayTeamCode}</div>
                <div class="team-name">
                    <span class="en">${match.awayTeam}</span>
                    <span class="ar">${match.awayTeamAr}</span>
                </div>
            </div>
        </div>
        
        <div class="match-detail-venue">
            <h3>
                <span class="en">Venue</span>
                <span class="ar">الملعب</span>
            </h3>
            <div class="stadium-info">
                <i class="fas fa-stadium"></i>
                <div class="stadium-name">
                    <span class="en">${stadiumName}</span>
                    <span class="ar">${stadiumNameAr}</span>
                </div>
                <div class="stadium-city">
                    <span class="en">${cityName}</span>
                    <span class="ar">${cityNameAr}</span>
                </div>
            </div>
        </div>`;
    
    // Add transportation info if available
    if (match.transportation) {
        html += createTransportInfo(match.transportation);
    }
    
    // Add nearby facilities if available
    if (match.nearby) {
        html += createNearbyInfo(match.nearby);
    }
    
    // Add description if available
    if (match.description) {
        html += `
        <div class="match-detail-description">
            <h3>
                <span class="en">Match Details</span>
                <span class="ar">تفاصيل المباراة</span>
            </h3>
            <p>
                <span class="en">${match.description}</span>
                <span class="ar">${match.descriptionAr || match.description}</span>
            </p>
        </div>`;
    }
    
    return html;
}

/**
 * Create HTML for transportation information
 * @param {Object} transportation - Transportation data
 * @returns {string} HTML content
 */
function createTransportInfo(transportation) {
    let html = `
    <div class="match-detail-transport">
        <h3>
            <span class="en">Transportation</span>
            <span class="ar">المواصلات</span>
        </h3>
        <ul class="transport-list">`;
    
    if (transportation.publicTransport) {
        html += `
            <li>
                <i class="fas fa-subway"></i>
                <div class="transport-info">
                    <strong>
                        <span class="en">Public Transport</span>
                        <span class="ar">النقل العام</span>
                    </strong>
                    <p>
                        <span class="en">${transportation.publicTransport}</span>
                        <span class="ar">${transportation.publicTransportAr || transportation.publicTransport}</span>
                    </p>
                </div>
            </li>`;
    }
    
    if (transportation.parking) {
        html += `
            <li>
                <i class="fas fa-parking"></i>
                <div class="transport-info">
                    <strong>
                        <span class="en">Parking</span>
                        <span class="ar">مواقف السيارات</span>
                    </strong>
                    <p>
                        <span class="en">${transportation.parking}</span>
                        <span class="ar">${transportation.parkingAr || transportation.parking}</span>
                    </p>
                </div>
            </li>`;
    }
    
    if (transportation.shuttle) {
        html += `
            <li>
                <i class="fas fa-bus"></i>
                <div class="transport-info">
                    <strong>
                        <span class="en">Shuttle Service</span>
                        <span class="ar">خدمة الحافلات</span>
                    </strong>
                    <p>
                        <span class="en">${transportation.shuttle}</span>
                        <span class="ar">${transportation.shuttleAr || transportation.shuttle}</span>
                    </p>
                </div>
            </li>`;
    }
    
    html += `
        </ul>
    </div>`;
    
    return html;
}

/**
 * Create HTML for nearby amenities information
 * @param {Object} nearby - Nearby amenities data
 * @returns {string} HTML content
 */
function createNearbyInfo(nearby) {
    let html = `
    <div class="match-detail-nearby">
        <h3>
            <span class="en">Nearby</span>
            <span class="ar">المرافق القريبة</span>
        </h3>`;
    
    // Add dining options
    if (nearby.dining && nearby.dining.length > 0) {
        html += `
        <div class="nearby-section">
            <h4>
                <span class="en">Dining</span>
                <span class="ar">المطاعم</span>
            </h4>
            <ul>`;
        
        nearby.dining.forEach(place => {
            html += `
                <li>
                    <span class="en">${place.name}</span>
                    <span class="ar">${place.nameAr || place.name}</span>
                    - <span class="place-desc">
                        <span class="en">${place.description}</span>
                        <span class="ar">${place.descriptionAr || place.description}</span>
                    </span>
                </li>`;
        });
        
        html += `
            </ul>
        </div>`;
    }
    
    // Add attractions
    if (nearby.attractions && nearby.attractions.length > 0) {
        html += `
        <div class="nearby-section">
            <h4>
                <span class="en">Attractions</span>
                <span class="ar">معالم الجذب</span>
            </h4>
            <ul>`;
        
        nearby.attractions.forEach(place => {
            html += `
                <li>
                    <span class="en">${place.name}</span>
                    <span class="ar">${place.nameAr || place.name}</span>
                    - <span class="place-desc">
                        <span class="en">${place.description}</span>
                        <span class="ar">${place.descriptionAr || place.description}</span>
                    </span>
                </li>`;
        });
        
        html += `
            </ul>
        </div>`;
    }
    
    html += `
    </div>`;
    
    return html;
}

/**
 * Populate stadium filter dropdown
 * Uses stadiumsInfo from js/stadiums-info.js
 */
function populateStadiumFilter() {
    if (typeof stadiumsInfo === 'undefined') return;
    
    const stadiumFilter = document.getElementById('stadium-filter');
    if (!stadiumFilter) return;
    
    // Get existing options
    const existingOptions = stadiumFilter.querySelectorAll('option').length;
    
    // Skip if already populated
    if (existingOptions > 1) return;
    
    // Clear and add default option
    stadiumFilter.innerHTML = `
        <option value="all">
            <span class="en">All Stadiums</span>
            <span class="ar">جميع الملاعب</span>
        </option>
    `;
    
    // Sort stadiums by name
    const sortedStadiums = [...stadiumsInfo].sort((a, b) => a.name.localeCompare(b.name));
    
    // Add stadium options
    sortedStadiums.forEach(stadium => {
        const option = document.createElement('option');
        option.value = stadium.id;
        option.innerHTML = `
            <span class="en">${stadium.name}</span>
            <span class="ar">${stadium.nameAr}</span>
        `;
        stadiumFilter.appendChild(option);
    });
}

/**
 * Populate favorite teams dropdown
 * Uses teams data from matches
 */
function populateFavoriteTeamsDropdown() {
    if (typeof matchesInfo === 'undefined') return;
    
    const favoriteTeamsSelect = document.getElementById('favorite-team-select');
    if (!favoriteTeamsSelect) return;
    
    // Get existing options
    const existingOptions = favoriteTeamsSelect.querySelectorAll('option').length;
    
    // Skip if already populated
    if (existingOptions > 1) return;
    
    // Clear select
    favoriteTeamsSelect.innerHTML = `
        <option value="">
            <span class="en">Select a team...</span>
            <span class="ar">اختر فريقًا...</span>
        </option>
    `;
    
    // Extract unique teams
    const teams = new Map();
    
    matchesInfo.forEach(match => {
        // Add home team if not already added
        if (!teams.has(match.homeTeam)) {
            teams.set(match.homeTeam, {
                name: match.homeTeam,
                nameAr: match.homeTeamAr,
                code: match.homeTeamCode
            });
        }
        
        // Add away team if not already added
        if (!teams.has(match.awayTeam)) {
            teams.set(match.awayTeam, {
                name: match.awayTeam,
                nameAr: match.awayTeamAr,
                code: match.awayTeamCode
            });
        }
    });
    
    // Convert to array and sort by name
    const teamsArray = Array.from(teams.values()).sort((a, b) => a.name.localeCompare(b.name));
    
    // Add team options
    teamsArray.forEach(team => {
        const option = document.createElement('option');
        option.value = team.name;
        option.innerHTML = `
            <span class="en">${team.name}</span>
            <span class="ar">${team.nameAr}</span>
        `;
        favoriteTeamsSelect.appendChild(option);
    });
    
    // Load favorite teams from local storage
    const savedFavorites = getFromLocalStorage('favorite-teams', []);
    
    // Update favorite teams list
    updateFavoriteTeamsList(savedFavorites);
    
    // Add event listener for select
    favoriteTeamsSelect.addEventListener('change', function() {
        const selectedTeam = this.value;
        if (!selectedTeam) return;
        
        // Load current favorites
        const favorites = getFromLocalStorage('favorite-teams', []);
        
        // Add to favorites if not already there
        if (!favorites.includes(selectedTeam)) {
            favorites.push(selectedTeam);
            saveToLocalStorage('favorite-teams', favorites);
            
            // Update display
            updateFavoriteTeamsList(favorites);
            
            // Reset select
            this.value = '';
            
            // Show message
            showMessage(
                document.documentElement.lang === 'en' ? 
                `${selectedTeam} added to favorites` : 
                `تمت إضافة ${selectedTeam} إلى المفضلة`
            );
        } else {
            // Already in favorites
            this.value = '';
            
            showMessage(
                document.documentElement.lang === 'en' ? 
                `${selectedTeam} is already in your favorites` : 
                `${selectedTeam} موجود بالفعل في المفضلة`
            );
        }
    });
}

/**
 * Update the favorite teams list display
 * @param {Array} favorites - Array of favorite team names
 */
function updateFavoriteTeamsList(favorites) {
    const favoritesList = document.getElementById('favorite-teams-list');
    if (!favoritesList) return;
    
    // Clear list
    favoritesList.innerHTML = '';
    
    if (favorites.length === 0) {
        favoritesList.innerHTML = `
            <li class="no-favorites">
                <span class="en">No favorite teams selected.</span>
                <span class="ar">لم يتم تحديد فرق مفضلة.</span>
            </li>
        `;
        return;
    }
    
    // Add each favorite team
    favorites.forEach(teamName => {
        const teamData = getTeamDataByName(teamName);
        
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="team-name">
                <span class="en">${teamName}</span>
                <span class="ar">${teamData ? teamData.nameAr : teamName}</span>
            </span>
            <button class="btn small remove-favorite" data-team="${teamName}">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        favoritesList.appendChild(listItem);
    });
    
    // Add event listeners to remove buttons
    const removeButtons = favoritesList.querySelectorAll('.remove-favorite');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const teamToRemove = this.getAttribute('data-team');
            removeFavoriteTeam(teamToRemove);
        });
    });
}

/**
 * Get team data by team name
 * @param {string} teamName - Name of the team
 * @returns {Object|null} Team data object or null if not found
 */
function getTeamDataByName(teamName) {
    if (typeof matchesInfo === 'undefined') return null;
    
    // Look through all matches to find the team
    for (let match of matchesInfo) {
        if (match.homeTeam === teamName) {
            return {
                name: match.homeTeam,
                nameAr: match.homeTeamAr,
                code: match.homeTeamCode
            };
        }
        
        if (match.awayTeam === teamName) {
            return {
                name: match.awayTeam,
                nameAr: match.awayTeamAr,
                code: match.awayTeamCode
            };
        }
    }
    
    return null;
}

/**
 * Remove a team from favorites
 * @param {string} teamName - Name of the team to remove
 */
function removeFavoriteTeam(teamName) {
    if (!isLocalStorageAvailable()) return;
    
    // Load current favorites
    const favorites = getFromLocalStorage('favorite-teams', []);
    
    // Remove the team
    const updatedFavorites = favorites.filter(name => name !== teamName);
    
    // Save back to local storage
    saveToLocalStorage('favorite-teams', updatedFavorites);
    
    // Update display
    updateFavoriteTeamsList(updatedFavorites);
    
    // Show message
    showMessage(
        document.documentElement.lang === 'en' ? 
        `${teamName} removed from favorites` : 
        `تمت إزالة ${teamName} من المفضلة`
    );
}

/**
 * Populate match schedule with data
 * Uses matchesInfo from js/matches-info.js
 */
function populateMatchSchedule() {
    if (typeof matchesInfo === 'undefined') return;
    
    const scheduleContainer = document.getElementById('schedule-container');
    if (!scheduleContainer) return;
    
    // Check if already populated
    if (scheduleContainer.querySelector('.stage-container')) return;
    
    // Clear container
    scheduleContainer.innerHTML = '';
    
    // First, group matches by stage
    const matchesByStage = {};
    
    // Define the order of stages
    const stageOrder = ['group', 'round-32', 'round-16', 'quarterfinal', 'semifinal', 'third-place', 'final'];
    
    // Initialize each stage with an empty array
    stageOrder.forEach(stage => {
        matchesByStage[stage] = [];
    });
    
    // Add matches to their respective stage groups
    matchesInfo.forEach(match => {
        if (matchesByStage[match.stage]) {
            matchesByStage[match.stage].push(match);
        }
    });
    
    // Create a section for each stage in order
    stageOrder.forEach(stage => {
        const matches = matchesByStage[stage];
        if (matches.length === 0) return; // Skip empty stages
        
        // Create stage container
        const stageContainer = document.createElement('div');
        stageContainer.className = 'stage-container';
        stageContainer.id = `stage-${stage}`;
        
        // Create stage header
        const stageHeader = document.createElement('h2');
        stageHeader.className = 'stage-header';
        stageHeader.innerHTML = `
            <span class="en">${getStageNameEn(stage)}</span>
            <span class="ar">${getStageNameAr(stage)}</span>
        `;
        stageContainer.appendChild(stageHeader);
        
        // For group stage, further group by groups
        if (stage === 'group') {
            // Group the matches by group
            const matchesByGroup = {};
            matches.forEach(match => {
                if (!matchesByGroup[match.group]) {
                    matchesByGroup[match.group] = [];
                }
                matchesByGroup[match.group].push(match);
            });
            
            // Sort groups alphabetically
            const sortedGroups = Object.keys(matchesByGroup).sort();
            
            // Create a section for each group
            sortedGroups.forEach(group => {
                const groupMatches = matchesByGroup[group];
                
                // Create group header
                const groupHeader = document.createElement('h3');
                groupHeader.className = 'group-header';
                groupHeader.innerHTML = `
                    <span class="en">Group ${group}</span>
                    <span class="ar">المجموعة ${group}</span>
                `;
                stageContainer.appendChild(groupHeader);
                
                // Group matches by date within each group
                const matchesByDate = groupMatchesByDate(groupMatches);
                
                // Sort dates chronologically
                const sortedDates = Object.keys(matchesByDate).sort();
                
                // Create match days for this group
                sortedDates.forEach(date => {
                    createMatchDay(stageContainer, date, matchesByDate[date]);
                });
            });
        } else {
            // For knockout stages, simply group by date
            const matchesByDate = groupMatchesByDate(matches);
            
            // Sort dates chronologically
            const sortedDates = Object.keys(matchesByDate).sort();
            
            // Create match days
            sortedDates.forEach(date => {
                createMatchDay(stageContainer, date, matchesByDate[date]);
            });
        }
        
        // Add stage container to schedule
        scheduleContainer.appendChild(stageContainer);
    });
    
    // Setup notification buttons after adding content
    setupNotifyButtons();
}

/**
 * Create a match day element with all matches on that date
 * @param {HTMLElement} container - Container to append the match day to
 * @param {string} date - Date in YYYY-MM-DD format
 * @param {Array} matches - Array of match objects for that date
 */
function createMatchDay(container, date, matches) {
    // Create match day container
    const matchDay = document.createElement('div');
    matchDay.className = 'match-day';
    matchDay.setAttribute('data-date', date);
    
    // Format date for header
    const dateObj = new Date(date);
    const formattedDate = {
        en: dateObj.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        ar: dateObj.toLocaleDateString('ar-SA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    };
    
    // Create date header
    const dateHeader = document.createElement('div');
    dateHeader.className = 'date-header';
    dateHeader.innerHTML = `
        <h4>
            <span class="en">${formattedDate.en}</span>
            <span class="ar">${formattedDate.ar}</span>
        </h4>
        <span class="match-count">${matches.length} 
            <span class="en">Matches</span>
            <span class="ar">مباريات</span>
        </span>
    `;
    matchDay.appendChild(dateHeader);
    
    // Create match cards container
    const matchCardsContainer = document.createElement('div');
    matchCardsContainer.className = 'match-cards';
    matchDay.appendChild(matchCardsContainer);
    
    // Sort matches by time
    matches.sort((a, b) => a.time.localeCompare(b.time));
    
    // Add match cards
    matches.forEach(match => {
        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';
        matchCard.setAttribute('data-match-id', match.id);
        matchCard.setAttribute('data-stage', match.stage);
        matchCard.setAttribute('data-stadium', match.stadium);
        matchCard.setAttribute('data-teams', `${match.homeTeam},${match.awayTeam}`);
        
        const stadiumName = getStadiumName(match.stadium, 'en');
        const stadiumNameAr = getStadiumName(match.stadium, 'ar');
        
        // Get stage name based on current stage and possibly group
        let stageDisplay = '';
        let stageDisplayAr = '';
        
        if (match.stage === 'group') {
            stageDisplay = `Group ${match.group}`;
            stageDisplayAr = `المجموعة ${match.group}`;
        } else {
            stageDisplay = getStageNameEn(match.stage);
            stageDisplayAr = getStageNameAr(match.stage);
        }
        
        // Create match header
        const matchHeader = document.createElement('div');
        matchHeader.className = 'match-header';
        matchHeader.innerHTML = `
            <div class="match-stage">
                <span class="en">${stageDisplay}</span>
                <span class="ar">${stageDisplayAr}</span>
            </div>
            <div class="match-time">
                <span class="time">${match.time}</span>
                <span class="timezone">KSA</span>
            </div>
        `;
        matchCard.appendChild(matchHeader);
        
        // Create match teams display
        const matchTeams = document.createElement('div');
        matchTeams.className = 'match-teams';
        matchTeams.innerHTML = `
            <div class="team team-home">
                <span class="team-code">${match.homeTeamCode}</span>
                <span class="team-name">
                    <span class="en">${match.homeTeam}</span>
                    <span class="ar">${match.homeTeamAr}</span>
                </span>
            </div>
            <div class="match-result">
                <span class="vs">VS</span>
            </div>
            <div class="team team-away">
                <span class="team-code">${match.awayTeamCode}</span>
                <span class="team-name">
                    <span class="en">${match.awayTeam}</span>
                    <span class="ar">${match.awayTeamAr}</span>
                </span>
            </div>
        `;
        matchCard.appendChild(matchTeams);
        
        // Create match details
        const matchDetails = document.createElement('div');
        matchDetails.className = 'match-details';
        matchDetails.innerHTML = `
            <div class="match-venue">
                <i class="fas fa-map-marker-alt"></i>
                <span class="stadium-name">
                    <span class="en">${stadiumName}</span>
                    <span class="ar">${stadiumNameAr}</span>
                </span>,
                <span class="city-name">
                    <span class="en">${match.city}</span>
                    <span class="ar">${getCityNameAr(match.city)}</span>
                </span>
            </div>
            <div class="match-actions">
                <button class="btn small match-info" data-match-id="${match.id}">
                    <i class="fas fa-info-circle"></i>
                    <span class="en">Details</span>
                    <span class="ar">التفاصيل</span>
                </button>
                <button class="btn small match-notify" data-match-id="${match.id}">
                    <i class="far fa-bell"></i>
                    <span class="en">Notify Me</span>
                    <span class="ar">تنبيهي</span>
                </button>
            </div>
        `;
        matchCard.appendChild(matchDetails);
        
        // Add the match card to the container
        matchCardsContainer.appendChild(matchCard);
    });
    
    // Add the match day to the container
    container.appendChild(matchDay);
}

/**
 * Find match data by ID
 * @param {string} matchId - ID of the match
 * @returns {Object|null} Match data object or null if not found
 */
function findMatchById(matchId) {
    if (typeof matchesInfo === 'undefined') return null;
    return matchesInfo.find(match => match.id === matchId) || null;
}

/**
 * Group matches by date
 * @param {Array} matches - Array of match data objects
 * @returns {Object} Object with dates as keys and arrays of matches as values
 */
function groupMatchesByDate(matches) {
    const grouped = {};
    
    matches.forEach(match => {
        if (!grouped[match.date]) {
            grouped[match.date] = [];
        }
        grouped[match.date].push(match);
    });
    
    return grouped;
}

/**
 * Get English name for a match stage
 * @param {string} stage - Stage code
 * @returns {string} Readable stage name in English
 */
function getStageNameEn(stage) {
    const stageMap = {
        'group': 'Group Stage',
        'round-32': 'Round of 32',
        'round-16': 'Round of 16',
        'quarterfinal': 'Quarter Finals',
        'semifinal': 'Semi Finals',
        'third-place': 'Third Place Match',
        'final': 'Final'
    };
    
    return stageMap[stage] || stage;
}

/**
 * Get Arabic name for a match stage
 * @param {string} stage - Stage code
 * @returns {string} Readable stage name in Arabic
 */
function getStageNameAr(stage) {
    const stageMap = {
        'group': 'دور المجموعات',
        'round-32': 'دور الـ32',
        'round-16': 'دور الـ16',
        'quarterfinal': 'ربع النهائي',
        'semifinal': 'نصف النهائي',
        'third-place': 'مباراة تحديد المركز الثالث',
        'final': 'النهائي'
    };
    
    return stageMap[stage] || stage;
}

/**
 * Get stadium name by ID
 * @param {string} stadiumId - Stadium ID
 * @param {string} lang - Language code
 * @returns {string} Stadium name
 */
function getStadiumName(stadiumId, lang) {
    if (typeof stadiumsInfo === 'undefined') return stadiumId;
    
    const stadium = stadiumsInfo.find(s => s.id === stadiumId);
    if (!stadium) return stadiumId;
    
    return lang === 'en' ? stadium.name : stadium.nameAr;
}

/**
 * Get stadium city by ID
 * @param {string} stadiumId - Stadium ID
 * @param {string} lang - Language code
 * @returns {string} City name
 */
function getStadiumCity(stadiumId, lang) {
    if (typeof stadiumsInfo === 'undefined') return '';
    
    const stadium = stadiumsInfo.find(s => s.id === stadiumId);
    if (!stadium) return '';
    
    const city = stadium.city;
    return lang === 'en' ? city : getCityNameAr(city);
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