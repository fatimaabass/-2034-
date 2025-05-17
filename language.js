/**
 * Language switching functionality for World Cup 2034 Saudi Arabia Guide
 * Handles toggling between English and Arabic
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize language based on stored preference or default to English
    initLanguage();
    
    // Add event listener to language toggle button
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }
});

/**
 * Initialize the language based on stored preference
 */
function initLanguage() {
    // Get the stored language preference
    let currentLang = 'en'; // Default to English
    
    // Check if we have a stored preference
    if (isLocalStorageAvailable()) {
        const storedLang = localStorage.getItem('preferred-language');
        if (storedLang) {
            currentLang = storedLang;
        }
    }
    
    // Apply the language
    setLanguage(currentLang);
}

/**
 * Toggle between English and Arabic
 */
function toggleLanguage() {
    const languageToggle = document.getElementById('language-toggle');
    const currentLang = languageToggle.getAttribute('data-current-lang');
    
    // Toggle between 'en' and 'ar'
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    
    // Apply the new language
    setLanguage(newLang);
    
    // Store preference if local storage is available
    if (isLocalStorageAvailable()) {
        localStorage.setItem('preferred-language', newLang);
    }
}

/**
 * Set the language throughout the document
 * @param {string} lang - Language code ('en' or 'ar')
 */
function setLanguage(lang) {
    const languageToggle = document.getElementById('language-toggle');
    
    if (languageToggle) {
        // Update the toggle button's data attribute
        languageToggle.setAttribute('data-current-lang', lang);
    }
    
    // Set the HTML lang attribute
    document.documentElement.lang = lang;
    
    // Set the text direction
    document.body.classList.remove('rtl');
    if (lang === 'ar') {
        document.body.classList.add('rtl');
    }
    
    // Update the title based on language
    updateTitle(lang);
    
    // Update meta description based on language
    updateMetaDescription(lang);
    
    // For select elements with language-specific options
    updateSelectOptions(lang);
}

/**
 * Update page title based on the selected language
 * @param {string} lang - Language code ('en' or 'ar')
 */
function updateTitle(lang) {
    const title = document.querySelector('title');
    if (!title) return;
    
    // Page titles for different sections
    const titleMap = {
        'stadiums.html': {
            en: 'Stadiums - World Cup 2034 Saudi Arabia Guide',
            ar: 'الملاعب - دليل كأس العالم 2034 المملكة العربية السعودية'
        },
        'matches.html': {
            en: 'Match Schedule - World Cup 2034 Saudi Arabia Guide',
            ar: 'جدول المباريات - دليل كأس العالم 2034 المملكة العربية السعودية'
        },
        'tourism.html': {
            en: 'Tourism & Entertainment - World Cup 2034 Saudi Arabia Guide',
            ar: 'السياحة والترفيه - دليل كأس العالم 2034 المملكة العربية السعودية'
        },
        'emergency.html': {
            en: 'Emergency Information - World Cup 2034 Saudi Arabia Guide',
            ar: 'معلومات الطوارئ - دليل كأس العالم 2034 المملكة العربية السعودية'
        },
        'index.html': {
            en: 'World Cup 2034 Saudi Arabia Guide',
            ar: 'دليل كأس العالم 2034 المملكة العربية السعودية'
        }
    };
    
    // Determine current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Update title if we have translations for this page
    if (titleMap[currentPage] && titleMap[currentPage][lang]) {
        title.textContent = titleMap[currentPage][lang];
    }
}

/**
 * Update meta description based on the selected language
 * @param {string} lang - Language code ('en' or 'ar')
 */
function updateMetaDescription(lang) {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) return;
    
    // Meta descriptions for different sections
    const descMap = {
        'stadiums.html': {
            en: 'Explore all the stadiums hosting World Cup 2034 matches in Saudi Arabia',
            ar: 'استكشف جميع الملاعب التي تستضيف مباريات كأس العالم 2034 في المملكة العربية السعودية'
        },
        'matches.html': {
            en: 'Complete match schedule for World Cup 2034 in Saudi Arabia with filtering options',
            ar: 'جدول مباريات كامل لكأس العالم 2034 في المملكة العربية السعودية مع خيارات التصفية'
        },
        'tourism.html': {
            en: "Discover Saudi Arabia's top tourist attractions, local cuisine, and entertainment options during World Cup 2034",
            ar: 'اكتشف أبرز المعالم السياحية والمأكولات المحلية وخيارات الترفيه في المملكة العربية السعودية خلال كأس العالم 2034'
        },
        'emergency.html': {
            en: 'Essential emergency information, contacts, and services for World Cup 2034 visitors in Saudi Arabia',
            ar: 'معلومات الطوارئ الأساسية وجهات الاتصال والخدمات لزوار كأس العالم 2034 في المملكة العربية السعودية'
        },
        'index.html': {
            en: 'Comprehensive guide for visitors to World Cup 2034 in Saudi Arabia',
            ar: 'دليل شامل للزوار إلى كأس العالم 2034 في المملكة العربية السعودية'
        }
    };
    
    // Determine current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Update meta description if we have translations for this page
    if (descMap[currentPage] && descMap[currentPage][lang]) {
        metaDesc.setAttribute('content', descMap[currentPage][lang]);
    }
}

/**
 * Update select elements to display options in the correct language
 * @param {string} lang - Language code ('en' or 'ar')
 */
function updateSelectOptions(lang) {
    const selectElements = document.querySelectorAll('select');
    
    selectElements.forEach(select => {
        const options = select.querySelectorAll('option');
        
        options.forEach(option => {
            // If option has both language spans, update its text
            const enSpan = option.querySelector('.en');
            const arSpan = option.querySelector('.ar');
            
            if (enSpan && arSpan) {
                if (lang === 'en') {
                    option.textContent = enSpan.textContent;
                } else {
                    option.textContent = arSpan.textContent;
                }
            }
        });
    });
}