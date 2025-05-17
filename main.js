/**
 * Main JavaScript file for World Cup 2034 Saudi Arabia Guide
 * Handles common functionality across all pages
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize menu toggle functionality
    initMobileMenu();
    
    // Initialize countdown timer if it exists on the page
    if (document.getElementById('countdown')) {
        initCountdownTimer();
    }
    
    // Add scroll event for header styling
    initHeaderScroll();
});

/**
 * Initialize mobile menu toggle functionality
 */
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('open');
            
            // Change aria-expanded attribute for accessibility
            const isExpanded = mainNav.classList.contains('open');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!mainNav.contains(event.target) && !menuToggle.contains(event.target) && mainNav.classList.contains('open')) {
                mainNav.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

/**
 * Initialize countdown timer to World Cup 2034
 */
function initCountdownTimer() {
    // World Cup 2034 is expected to be in summer 2034, using June 1, 2034 as an approximate start date
    const worldCupDate = new Date('June 1, 2034 00:00:00').getTime();
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    if (daysElement && hoursElement && minutesElement && secondsElement) {
        // Update the countdown every second
        const countdownInterval = setInterval(() => {
            // Get current date and time
            const now = new Date().getTime();
            
            // Calculate the distance between now and the World Cup date
            const distance = worldCupDate - now;
            
            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Display the result
            daysElement.textContent = days.toString().padStart(3, '0');
            hoursElement.textContent = hours.toString().padStart(2, '0');
            minutesElement.textContent = minutes.toString().padStart(2, '0');
            secondsElement.textContent = seconds.toString().padStart(2, '0');
            
            // If the countdown is finished, clear the interval
            if (distance < 0) {
                clearInterval(countdownInterval);
                daysElement.textContent = '000';
                hoursElement.textContent = '00';
                minutesElement.textContent = '00';
                secondsElement.textContent = '00';
            }
        }, 1000);
    }
}

/**
 * Add scrolling effect to header
 */
function initHeaderScroll() {
    const header = document.getElementById('main-header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

/**
 * Check if browser supports local storage
 * @returns {boolean} True if local storage is available
 */
function isLocalStorageAvailable() {
    try {
        const testKey = '__test__';
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
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
    if (isLocalStorageAvailable()) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Error saving to local storage:', e);
        }
    }
    return false;
}

/**
 * Get data from local storage
 * @param {string} key - Storage key
 * @param {*} defaultValue - Default value if not found
 * @returns {*} Stored value or default
 */
function getFromLocalStorage(key, defaultValue = null) {
    if (isLocalStorageAvailable()) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.error('Error retrieving from local storage:', e);
        }
    }
    return defaultValue;
}