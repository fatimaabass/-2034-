/**
 * Matches information for World Cup 2034 Saudi Arabia Guide
 * Contains match schedule, teams, and venue details
 */

const matchesInfo = [
    // GROUP STAGE
    // Group A
    {
        id: "1",
        stage: "group",
        group: "A",
        homeTeam: "Saudi Arabia",
        homeTeamAr: "المملكة العربية السعودية",
        homeTeamCode: "KSA",
        awayTeam: "Iraq",
        awayTeamAr: "العراق",
        awayTeamCode: "IRQ",
        date: "2034-07-08",
        time: "18:00",
        stadium: "king-salman",
        city: "Riyadh",
        status: "scheduled",
        description: "Opening match of Group A between the host nation Saudi Arabia and Iraq.",
        descriptionAr: "المباراة الافتتاحية للمجموعة أ بين الدولة المضيفة المملكة العربية السعودية والعراق.",
        transportation: {
            publicTransport: "Metro Line 1 and Line 4 to King Salman Station.",
            publicTransportAr: "مترو الخط 1 والخط 4 إلى محطة الملك سلمان.",
            parking: "Parking areas A, B, and C available with pre-booking required.",
            parkingAr: "مناطق وقوف السيارات أ، ب، و ج متاحة مع ضرورة الحجز المسبق.",
            shuttle: "Shuttle services from major hotels and transportation hubs.",
            shuttleAr: "خدمات النقل من الفنادق الرئيسية ومراكز النقل."
        },
        nearby: {
            dining: [
                {
                    name: "Stadium Food Court",
                    nameAr: "ساحة طعام الملعب",
                    description: "Various food options inside the stadium.",
                    descriptionAr: "خيارات طعام متنوعة داخل الملعب."
                },
                {
                    name: "Arabian Grill House",
                    nameAr: "بيت المشاوي العربية",
                    description: "Traditional Saudi cuisine, 10-minute walk from stadium.",
                    descriptionAr: "المأكولات السعودية التقليدية، على بعد 10 دقائق سيراً من الملعب."
                }
            ],
            attractions: [
                {
                    name: "World Cup Fan Zone",
                    nameAr: "منطقة مشجعي كأس العالم",
                    description: "Interactive fan experience area with screens and activities.",
                    descriptionAr: "منطقة تجربة تفاعلية للمشجعين مع شاشات وأنشطة."
                },
                {
                    name: "World Cup Museum Exhibition",
                    nameAr: "معرض متحف كأس العالم",
                    description: "Special exhibition of World Cup history and memorabilia.",
                    descriptionAr: "معرض خاص لتاريخ كأس العالم والتذكارات."
                }
            ]
        }
    },
    {
        id: "2",
        stage: "group",
        group: "A",
        homeTeam: "Egypt",
        homeTeamAr: "مصر",
        homeTeamCode: "EGY",
        awayTeam: "Morocco",
        awayTeamAr: "المغرب",
        awayTeamCode: "MAR",
        date: "2034-07-08",
        time: "21:00",
        stadium: "king-abdullah",
        city: "Jeddah",
        status: "scheduled",
        description: "Group A match between two strong African teams, Egypt and Morocco.",
        descriptionAr: "مباراة المجموعة أ بين فريقين أفريقيين قويين، مصر والمغرب.",
        transportation: {
            publicTransport: "Shuttle buses from Jeddah's Haramain Train Station.",
            publicTransportAr: "حافلات من محطة قطار الحرمين بجدة.",
            parking: "Stadium parking zones with online reservation system.",
            parkingAr: "مناطق وقوف السيارات في الملعب مع نظام حجز عبر الإنترنت.",
            shuttle: "Fan shuttles from Jeddah Corniche and major hotels.",
            shuttleAr: "حافلات المشجعين من كورنيش جدة والفنادق الرئيسية."
        },
        nearby: {
            dining: [
                {
                    name: "Seafood Plaza",
                    nameAr: "بلازا المأكولات البحرية",
                    description: "Fresh seafood restaurant near the stadium.",
                    descriptionAr: "مطعم مأكولات بحرية طازجة بالقرب من الملعب."
                },
                {
                    name: "International Food Court",
                    nameAr: "ساحة الطعام العالمية",
                    description: "Various international cuisines for fans.",
                    descriptionAr: "مختلف المطابخ العالمية للمشجعين."
                }
            ],
            attractions: [
                {
                    name: "Jeddah Fan Festival",
                    nameAr: "مهرجان مشجعي جدة",
                    description: "Cultural performances and fan activities.",
                    descriptionAr: "عروض ثقافية وأنشطة للمشجعين."
                }
            ]
        }
    },
    {
        id: "3",
        stage: "group",
        group: "A",
        homeTeam: "Iraq",
        homeTeamAr: "العراق",
        homeTeamCode: "IRQ",
        awayTeam: "Morocco",
        awayTeamAr: "المغرب",
        awayTeamCode: "MAR",
        date: "2034-07-12",
        time: "18:00",
        stadium: "jeddah-central",
        city: "Jeddah",
        status: "scheduled",
        description: "Group A clash between Iraq and Morocco.",
        descriptionAr: "مواجهة في المجموعة أ بين العراق والمغرب.",
        transportation: {
            publicTransport: "Central Jeddah Metro Station with direct stadium access.",
            publicTransportAr: "محطة مترو وسط جدة مع وصول مباشر للملعب.",
            parking: "3,500 parking spaces in tiered parking structures.",
            parkingAr: "3,500 موقف للسيارات في هياكل مواقف متدرجة.",
            shuttle: "Fan shuttles from major Jeddah districts.",
            shuttleAr: "حافلات المشجعين من أحياء جدة الرئيسية."
        }
    },
    {
        id: "4",
        stage: "group",
        group: "A",
        homeTeam: "Saudi Arabia",
        homeTeamAr: "المملكة العربية السعودية",
        homeTeamCode: "KSA",
        awayTeam: "Egypt",
        awayTeamAr: "مصر",
        awayTeamCode: "EGY",
        date: "2034-07-12",
        time: "21:00",
        stadium: "prince-mohammed",
        city: "Qiddiya",
        status: "scheduled",
        description: "Host nation Saudi Arabia takes on Egypt in this crucial Group A match.",
        descriptionAr: "الدولة المضيفة المملكة العربية السعودية تواجه مصر في هذه المباراة الحاسمة في المجموعة أ.",
        transportation: {
            publicTransport: "Qiddiya Line connects the entertainment city with Riyadh, stopping directly at the stadium.",
            publicTransportAr: "خط القدية يربط مدينة الترفيه بالرياض، ويتوقف مباشرة عند الملعب.",
            parking: "Smart parking system with 5,000 spaces.",
            parkingAr: "نظام مواقف ذكي بسعة 5,000 موقف."
        }
    },
    
    // Group B
    {
        id: "5",
        stage: "group",
        group: "B",
        homeTeam: "Qatar",
        homeTeamAr: "قطر",
        homeTeamCode: "QAT",
        awayTeam: "United Arab Emirates",
        awayTeamAr: "الإمارات العربية المتحدة",
        awayTeamCode: "UAE",
        date: "2034-07-09",
        time: "18:00",
        stadium: "king-fahd",
        city: "Riyadh",
        status: "scheduled",
        description: "Gulf derby between Qatar and UAE in Group B.",
        descriptionAr: "ديربي خليجي بين قطر والإمارات في المجموعة ب.",
        transportation: {
            publicTransport: "Metro Line 2 to King Fahd Stadium Station.",
            publicTransportAr: "مترو الخط 2 إلى محطة استاد الملك فهد.",
            parking: "Multiple parking zones with numbered sections.",
            parkingAr: "مناطق وقوف متعددة مع أقسام مرقمة.",
            shuttle: "Free shuttles from city center and transportation hubs.",
            shuttleAr: "حافلات مجانية من وسط المدينة ومراكز النقل."
        },
        nearby: {
            dining: [
                {
                    name: "Gulf Cuisine Restaurant",
                    nameAr: "مطعم المطبخ الخليجي",
                    description: "Authentic Gulf dishes and specialties.",
                    descriptionAr: "أطباق خليجية أصيلة وتخصصات."
                }
            ],
            attractions: [
                {
                    name: "GCC Cultural Exhibition",
                    nameAr: "معرض ثقافي لدول مجلس التعاون الخليجي",
                    description: "Showcasing the culture and heritage of Gulf nations.",
                    descriptionAr: "عرض ثقافة وتراث دول الخليج."
                }
            ]
        }
    },
    {
        id: "6",
        stage: "group",
        group: "B",
        homeTeam: "Iran",
        homeTeamAr: "إيران",
        homeTeamCode: "IRN",
        awayTeam: "Japan",
        awayTeamAr: "اليابان",
        awayTeamCode: "JPN",
        date: "2034-07-09",
        time: "21:00",
        stadium: "aramco",
        city: "Khobar",
        status: "scheduled",
        description: "Asian powerhouses Iran and Japan face off in Group B.",
        descriptionAr: "قوتان آسيويتان إيران واليابان تتواجهان في المجموعة ب.",
        transportation: {
            publicTransport: "Eastern Province Metro to Aramco Station.",
            publicTransportAr: "مترو المنطقة الشرقية إلى محطة أرامكو.",
            parking: "Stadium parking complex with digital guide system.",
            parkingAr: "مجمع مواقف الملعب مع نظام دليل رقمي.",
            shuttle: "Fan shuttles from Dammam and Khobar city centers.",
            shuttleAr: "حافلات المشجعين من مراكز مدينتي الدمام والخبر."
        },
        nearby: {
            dining: [
                {
                    name: "Asian Fusion Court",
                    nameAr: "ساحة الطعام الآسيوي",
                    description: "Japanese, Iranian, and international Asian cuisine.",
                    descriptionAr: "المطبخ الياباني والإيراني والآسيوي الدولي."
                }
            ],
            attractions: [
                {
                    name: "Asian Football Heritage Exhibition",
                    nameAr: "معرض تراث كرة القدم الآسيوية",
                    description: "Celebrating the history of Asian football.",
                    descriptionAr: "الاحتفال بتاريخ كرة القدم الآسيوية."
                }
            ]
        }
    },
    {
        id: "7",
        stage: "group",
        group: "B",
        homeTeam: "Qatar",
        homeTeamAr: "قطر",
        homeTeamCode: "QAT",
        awayTeam: "Japan",
        awayTeamAr: "اليابان",
        awayTeamCode: "JPN",
        date: "2034-07-13",
        time: "18:00",
        stadium: "qiddiya-coast",
        city: "Jeddah",
        status: "scheduled",
        description: "Asia Cup champions Qatar face Japan in Group B.",
        descriptionAr: "أبطال كأس آسيا قطر تواجه اليابان في المجموعة ب.",
        transportation: {
            publicTransport: "Jeddah Metro Red Line with Coast Stadium station.",
            publicTransportAr: "مترو جدة الخط الأحمر مع محطة ملعب الساحل.",
            parking: "Integrated parking complex with 6,000 spaces.",
            parkingAr: "مجمع مواقف متكامل يتسع لـ 6,000 سيارة."
        }
    },
    {
        id: "8",
        stage: "group",
        group: "B",
        homeTeam: "United Arab Emirates",
        homeTeamAr: "الإمارات العربية المتحدة",
        homeTeamCode: "UAE",
        awayTeam: "Iran",
        awayTeamAr: "إيران",
        homeTeamCode: "IRN",
        date: "2034-07-13",
        time: "21:00",
        stadium: "roshn",
        city: "Riyadh",
        status: "scheduled",
        description: "Group B matchup between UAE and Iran at the new Roshn Stadium.",
        descriptionAr: "مباراة المجموعة ب بين الإمارات وإيران في استاد روشن الجديد.",
        transportation: {
            publicTransport: "Roshn Metro Station with dedicated stadium exits.",
            publicTransportAr: "محطة مترو روشن مع مخارج مخصصة للملعب.",
            parking: "Smart parking system with 4,500 spaces and pre-booking options.",
            parkingAr: "نظام مواقف ذكي مع 4,500 مساحة وخيارات حجز مسبق."
        }
    },
    
    // Group C
    {
        id: "9",
        stage: "group",
        group: "C",
        homeTeam: "Germany",
        homeTeamAr: "ألمانيا",
        homeTeamCode: "GER",
        awayTeam: "France",
        awayTeamAr: "فرنسا",
        awayTeamCode: "FRA",
        date: "2034-07-10",
        time: "18:00",
        stadium: "king-salman",
        city: "Riyadh",
        status: "scheduled",
        description: "European giants Germany and France clash in Group C.",
        descriptionAr: "عمالقة أوروبا ألمانيا وفرنسا يتصادمان في المجموعة ج.",
        transportation: {
            publicTransport: "Metro Lines 1 and 4 to King Salman Station.",
            publicTransportAr: "مترو الخط 1 والخط 4 إلى محطة الملك سلمان.",
            parking: "VIP and general parking with shuttle service to entrances.",
            parkingAr: "مواقف VIP وعامة مع خدمة نقل إلى المداخل.",
            shuttle: "European fan zone shuttles from designated fan areas.",
            shuttleAr: "حافلات منطقة المشجعين الأوروبيين من مناطق المشجعين المخصصة."
        },
        nearby: {
            dining: [
                {
                    name: "European Bistro",
                    nameAr: "بيسترو أوروبي",
                    description: "German and French cuisine specially featured.",
                    descriptionAr: "المطبخ الألماني والفرنسي بشكل خاص."
                }
            ],
            attractions: [
                {
                    name: "European Football Gallery",
                    nameAr: "معرض كرة القدم الأوروبية",
                    description: "Interactive exhibits celebrating European football.",
                    descriptionAr: "معارض تفاعلية تحتفي بكرة القدم الأوروبية."
                }
            ]
        }
    },
    {
        id: "10",
        stage: "group",
        group: "C",
        homeTeam: "Spain",
        homeTeamAr: "إسبانيا",
        homeTeamCode: "ESP",
        awayTeam: "Portugal",
        awayTeamAr: "البرتغال",
        awayTeamCode: "POR",
        date: "2034-07-10",
        time: "21:00",
        stadium: "king-abdullah",
        city: "Jeddah",
        status: "scheduled",
        description: "Iberian derby between Spain and Portugal in Group C.",
        descriptionAr: "ديربي إيبيري بين إسبانيا والبرتغال في المجموعة ج.",
        transportation: {
            publicTransport: "Special shuttle services from Jeddah city center.",
            publicTransportAr: "خدمات نقل خاصة من وسط مدينة جدة.",
            parking: "Pre-booked parking zones with color-coded sections.",
            parkingAr: "مناطق مواقف محجوزة مسبقاً مع أقسام مرمزة بالألوان."
        }
    },
    
    // Group D
    {
        id: "11",
        stage: "group",
        group: "D",
        homeTeam: "Argentina",
        homeTeamAr: "الأرجنتين",
        homeTeamCode: "ARG",
        awayTeam: "Brazil",
        awayTeamAr: "البرازيل",
        awayTeamCode: "BRA",
        date: "2034-07-11",
        time: "18:00",
        stadium: "king-salman",
        city: "Riyadh",
        status: "scheduled",
        description: "South American powerhouses Argentina and Brazil face off in Group D.",
        descriptionAr: "عمالقة أمريكا الجنوبية الأرجنتين والبرازيل يتواجهان في المجموعة د.",
        transportation: {
            publicTransport: "Special metro services with extended hours.",
            publicTransportAr: "خدمات مترو خاصة مع ساعات ممتدة.",
            parking: "Limited parking. Fans encouraged to use public transportation.",
            parkingAr: "مواقف محدودة. يُشجع المشجعون على استخدام وسائل النقل العام."
        }
    },
    
    // ROUND OF 32
    {
        id: "33",
        stage: "round-32",
        homeTeam: "Winner Group A",
        homeTeamAr: "متصدر المجموعة أ",
        homeTeamCode: "W-A",
        awayTeam: "Third Place Group D/E/F",
        awayTeamAr: "ثالث المجموعة د/هـ/و",
        awayTeamCode: "3-DEF",
        date: "2034-07-26",
        time: "18:00",
        stadium: "king-salman",
        city: "Riyadh",
        status: "scheduled",
        description: "Round of 32 match featuring the Group A winner.",
        descriptionAr: "مباراة دور الـ32 بمشاركة متصدر المجموعة أ."
    },
    {
        id: "34",
        stage: "round-32",
        homeTeam: "Runner-up Group B",
        homeTeamAr: "وصيف المجموعة ب",
        homeTeamCode: "R-B",
        awayTeam: "Runner-up Group A",
        awayTeamAr: "وصيف المجموعة أ",
        awayTeamCode: "R-A",
        date: "2034-07-26",
        time: "21:00",
        stadium: "king-abdullah",
        city: "Jeddah",
        status: "scheduled",
        description: "Round of 32 match between Group B and Group A runners-up.",
        descriptionAr: "مباراة دور الـ32 بين وصيفي المجموعتين ب و أ."
    },
    
    // ROUND OF 16
    {
        id: "49",
        stage: "round-16",
        homeTeam: "Winner Match 33",
        homeTeamAr: "الفائز من المباراة 33",
        homeTeamCode: "W-33",
        awayTeam: "Winner Match 34",
        awayTeamAr: "الفائز من المباراة 34",
        awayTeamCode: "W-34",
        date: "2034-08-01",
        time: "18:00",
        stadium: "king-salman",
        city: "Riyadh",
        status: "scheduled",
        description: "Round of 16 match featuring the winners of matches 33 and 34.",
        descriptionAr: "مباراة دور الـ16 بين الفائزين من المباراتين 33 و 34."
    },
    
    // QUARTERFINALS
    {
        id: "57",
        stage: "quarterfinal",
        homeTeam: "Winner Match 49",
        homeTeamAr: "الفائز من المباراة 49",
        homeTeamCode: "W-49",
        awayTeam: "Winner Match 50",
        awayTeamAr: "الفائز من المباراة 50",
        awayTeamCode: "W-50",
        date: "2034-08-05",
        time: "18:00",
        stadium: "king-salman",
        city: "Riyadh",
        status: "scheduled",
        description: "Quarterfinal match at the King Salman International Stadium.",
        descriptionAr: "مباراة ربع النهائي في استاد الملك سلمان الدولي."
    },
    
    // SEMIFINALS
    {
        id: "61",
        stage: "semifinal",
        homeTeam: "Winner Match 57",
        homeTeamAr: "الفائز من المباراة 57",
        homeTeamCode: "W-57",
        awayTeam: "Winner Match 58",
        awayTeamAr: "الفائز من المباراة 58",
        awayTeamCode: "W-58",
        date: "2034-08-09",
        time: "21:00",
        stadium: "king-salman",
        city: "Riyadh",
        status: "scheduled",
        description: "First semifinal match of the 2034 FIFA World Cup.",
        descriptionAr: "مباراة نصف النهائي الأولى لكأس العالم 2034 FIFA."
    },
    
    // THIRD PLACE
    {
        id: "63",
        stage: "third-place",
        homeTeam: "Loser Match 61",
        homeTeamAr: "الخاسر من المباراة 61",
        homeTeamCode: "L-61",
        awayTeam: "Loser Match 62",
        awayTeamAr: "الخاسر من المباراة 62",
        awayTeamCode: "L-62",
        date: "2034-08-13",
        time: "18:00",
        stadium: "prince-mohammed",
        city: "Qiddiya",
        status: "scheduled",
        description: "Third place match to determine the bronze medalist of the tournament.",
        descriptionAr: "مباراة تحديد المركز الثالث لتحديد صاحب الميدالية البرونزية في البطولة."
    },
    
    // FINAL
    {
        id: "64",
        stage: "final",
        homeTeam: "Winner Match 61",
        homeTeamAr: "الفائز من المباراة 61",
        homeTeamCode: "W-61",
        awayTeam: "Winner Match 62",
        awayTeamAr: "الفائز من المباراة 62",
        awayTeamCode: "W-62",
        date: "2034-08-14",
        time: "20:00",
        stadium: "king-salman",
        city: "Riyadh",
        status: "scheduled",
        description: "Final match of the 2034 FIFA World Cup",
        descriptionAr: "المباراة النهائية لكأس العالم 2034",
        transportation: {
            publicTransport: "Special World Cup final metro service with extended hours.",
            publicTransportAr: "خدمة مترو خاصة لنهائي كأس العالم مع ساعات ممتدة.",
            parking: "Advanced booking required for all parking. Park and ride facilities available from satellite locations.",
            parkingAr: "مطلوب حجز مسبق لجميع مواقف السيارات. مرافق اركن وانتقل متاحة من مواقع بعيدة.",
            shuttle: "Continuous shuttle services from all major hotels and city districts.",
            shuttleAr: "خدمات نقل مستمرة من جميع الفنادق الرئيسية وأحياء المدينة."
        },
        nearby: {
            dining: [
                {
                    name: "World Champions Dining Hall",
                    nameAr: "قاعة طعام أبطال العالم",
                    description: "Premium dining experience with international cuisine.",
                    descriptionAr: "تجربة طعام متميزة مع مأكولات عالمية."
                }
            ],
            attractions: [
                {
                    name: "World Cup Trophy Exhibition",
                    nameAr: "معرض كأس العالم",
                    description: "Once-in-a-lifetime opportunity to see the World Cup trophy up close before the final.",
                    descriptionAr: "فرصة العمر لرؤية كأس العالم عن قرب قبل النهائي."
                },
                {
                    name: "Closing Ceremony Rehearsal",
                    nameAr: "بروفة حفل الختام",
                    description: "Special fan viewing of closing ceremony preparations.",
                    descriptionAr: "عرض خاص للمشجعين لتحضيرات حفل الختام."
                }
            ]
        }
    }
];

/**
 * Find match data by ID
 * @param {string} matchId - ID of the match
 * @returns {Object|null} Match data object or null if not found
 */
function findMatchById(matchId) {
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