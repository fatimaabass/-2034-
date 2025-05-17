/**
 * Stadiums information for World Cup 2034 Saudi Arabia Guide
 * Contains details about all stadiums including locations, capacities, and match stages
 */

const stadiumsInfo = [
    {
        id: "king-salman",
        name: "King Salman International Stadium",
        nameAr: "استاد الملك سلمان الدولي",
        city: "Riyadh",
        capacity: 92000,
        lat: 24.774265,
        lng: 46.738586,
        opening: "2030",
        image: "https://pixabay.com/get/gb0e0acff54fc4dc1b9d523089f6956d699768bd09e7ece8ce3a2b6145ff983a82c7b76883db29362a8f04134c876b1bd1700fca535cf882a1c3872e789283508_1280.jpg",
        matches: ["opening", "group", "round-32", "round-16", "quarterfinal", "semifinal", "final"],
        description: "The largest stadium in the Kingdom, a centerpiece of the 2034 World Cup.",
        descriptionAr: "أكبر ملعب في المملكة، وأحد معالم كأس العالم 2034 الرئيسية.",
        features: "Part of the 'Green Riyadh' project, featuring sustainable design and cutting-edge facilities.",
        featuresAr: "جزء من مشروع 'الرياض الخضراء'، ويتميز بتصميم مستدام ومرافق متطورة.",
        transportation: {
            publicTransport: "Metro Line 1 and Line 4 stop at King Salman Station, a 5-minute walk to the stadium.",
            publicTransportAr: "يتوقف مترو الخط 1 والخط 4 في محطة الملك سلمان، على بعد 5 دقائق سيراً من الملعب.",
            parking: "Over 12,000 parking spaces available in designated areas around the stadium.",
            parkingAr: "أكثر من 12,000 موقف للسيارات متاح في المناطق المخصصة حول الملعب.",
            shuttle: "Free shuttle buses from major hotels and transportation hubs on match days.",
            shuttleAr: "حافلات نقل مجانية من الفنادق الرئيسية ومراكز النقل في أيام المباريات."
        },
        nearby: {
            restaurants: [
                { name: "Al Orjouan", nameAr: "الأرجوان" },
                { name: "Najd Village", nameAr: "قرية نجد" },
                { name: "The Globe", nameAr: "ذا جلوب" }
            ],
            hotels: [
                { name: "Four Seasons Riyadh", nameAr: "فور سيزونز الرياض" },
                { name: "Hilton Riyadh", nameAr: "هيلتون الرياض" },
                { name: "Ritz-Carlton Riyadh", nameAr: "ريتز كارلتون الرياض" }
            ],
            shopping: [
                { name: "Kingdom Centre Mall", nameAr: "مركز المملكة التجاري" },
                { name: "Al Nakheel Mall", nameAr: "النخيل مول" }
            ]
        }
    },
    {
        id: "prince-mohammed",
        name: "Prince Mohammed bin Salman Stadium",
        nameAr: "استاد الأمير محمد بن سلمان",
        city: "Qiddiya",
        capacity: 46000,
        lat: 24.639484,
        lng: 46.517375,
        opening: "2031",
        image: "https://pixabay.com/get/g5cb35c4520a62ae2019436fcf0db7721db5e7d5a8a5bcdd18a5a366f64a9d7b3813ca29834346faa9d45842de894ca89d9c6a4f6bc52fdcabc9d5f68e4e87a99_1280.jpg",
        matches: ["group", "round-32", "round-16", "third-place"],
        description: "Located at the top of Tuwaiq Mountain, offering spectacular views of the surrounding landscape.",
        descriptionAr: "يقع على قمة جبل طويق، ويوفر إطلالات مذهلة على المناظر الطبيعية المحيطة.",
        features: "Revolutionary design allows for retractable roof, floor, and walls, creating a versatile venue for various events.",
        featuresAr: "تصميم ثوري يسمح بسحب السقف والأرضية والجدران، مما يخلق مكانًا متعدد الاستخدامات للفعاليات المختلفة.",
        transportation: {
            publicTransport: "Qiddiya Line connects the entertainment city with Riyadh, stopping directly at the stadium.",
            publicTransportAr: "خط القدية يربط مدينة الترفيه بالرياض، ويتوقف مباشرة عند الملعب.",
            parking: "5,000 parking spaces with smart parking technology to guide visitors.",
            parkingAr: "5,000 موقف للسيارات مع تقنية مواقف ذكية لتوجيه الزوار.",
            shuttle: "Regular shuttles from Qiddiya's main attractions and entrance gates.",
            shuttleAr: "حافلات منتظمة من المعالم الرئيسية للقدية وبوابات الدخول."
        },
        nearby: {
            restaurants: [
                { name: "Six Flags Dining", nameAr: "مطاعم سيكس فلاجز" },
                { name: "Mountain View Restaurant", nameAr: "مطعم ماونتن فيو" }
            ],
            hotels: [
                { name: "Qiddiya Resort", nameAr: "منتجع القدية" },
                { name: "Tuwaiq Palace Hotel", nameAr: "فندق قصر طويق" }
            ],
            shopping: [
                { name: "Qiddiya Mall", nameAr: "القدية مول" }
            ]
        }
    },
    {
        id: "new-murabba",
        name: "New Murabba Stadium",
        nameAr: "استاد المربع الجديد",
        city: "Riyadh",
        capacity: 46000,
        lat: 24.713552,
        lng: 46.675296,
        opening: "2032",
        image: "https://pixabay.com/get/gb5fdd57beee090af415460f46f71d105817390d0764b96b050f34090cfdb1e4c856ecdb075ea606c2a98f25da908d2e5_1280.jpg",
        matches: ["group", "round-32"],
        description: "Design inspired by the native talh (acacia) tree trunk, reflecting Saudi Arabia's natural heritage.",
        descriptionAr: "تصميم مستوحى من جذع شجرة الطلح المحلية، يعكس التراث الطبيعي للمملكة العربية السعودية.",
        features: "Advanced facilities for spectator experience including 360° screens and immersive audio systems.",
        featuresAr: "مرافق متقدمة لتجربة المشاهدين بما في ذلك شاشات 360 درجة وأنظمة صوت غامرة.",
        transportation: {
            publicTransport: "New Murabba Metro Station connects directly to the stadium concourse.",
            publicTransportAr: "محطة مترو المربع الجديد تتصل مباشرة بساحة الملعب.",
            parking: "Underground parking with 4,000 spaces and electric vehicle charging stations.",
            parkingAr: "مواقف تحت الأرض تتسع لـ 4,000 سيارة مع محطات شحن للمركبات الكهربائية.",
            shuttle: "Shuttle services from major city centers and transportation hubs.",
            shuttleAr: "خدمات النقل من مراكز المدينة الرئيسية ومراكز النقل."
        },
        nearby: {
            restaurants: [
                { name: "The Cube Eateries", nameAr: "مطاعم ذا كيوب" },
                { name: "Saudi Kitchen", nameAr: "المطبخ السعودي" }
            ],
            hotels: [
                { name: "Murabba Rotana", nameAr: "روتانا المربع" },
                { name: "New Murabba Suites", nameAr: "أجنحة المربع الجديد" }
            ],
            shopping: [
                { name: "The Murabba Experience", nameAr: "تجربة المربع" }
            ]
        }
    },
    {
        id: "roshn",
        name: "Roshn Stadium",
        nameAr: "استاد روشن",
        city: "Riyadh",
        capacity: 46000,
        lat: 24.813552,
        lng: 46.625296,
        opening: "2030",
        image: "https://pixabay.com/get/gfd90e3bd19e6c6ef7a99cc19bc9f6c9e7e6c3ce7e95ba9c7387bf8ca6276bd3d98c4adb4cb65ec143b0dbc52bf76d456d99ba2de4a29e37c1a5a407e06afbc2d_1280.jpg",
        matches: ["group", "round-32"],
        description: "Unique urban design with interlocking crystalline structures that illuminate at night.",
        descriptionAr: "تصميم حضري فريد مع هياكل بلورية متشابكة تضيء في الليل.",
        features: "Integrated smart city features including digital wayfinding and contactless experience throughout.",
        featuresAr: "ميزات المدينة الذكية المتكاملة بما في ذلك التوجيه الرقمي وتجربة عدم التلامس في جميع أنحاء الملعب.",
        transportation: {
            publicTransport: "Roshn Metro Station with dedicated stadium exits.",
            publicTransportAr: "محطة مترو روشن مع مخارج مخصصة للملعب.",
            parking: "Smart parking system with 4,500 spaces and pre-booking options.",
            parkingAr: "نظام مواقف ذكي مع 4,500 مساحة وخيارات حجز مسبق.",
            shuttle: "Eco-friendly electric shuttles connecting to major transport hubs.",
            shuttleAr: "حافلات كهربائية صديقة للبيئة تربط إلى مراكز النقل الرئيسية."
        },
        nearby: {
            restaurants: [
                { name: "Crystal Dining", nameAr: "كريستال داينينج" },
                { name: "Roshn Cafe", nameAr: "كافيه روشن" }
            ],
            hotels: [
                { name: "Stadium View Hotel", nameAr: "فندق ستاديوم فيو" },
                { name: "Roshn Residences", nameAr: "إقامات روشن" }
            ],
            shopping: [
                { name: "Roshn Plaza", nameAr: "بلازا روشن" }
            ]
        }
    },
    {
        id: "king-fahd",
        name: "King Fahd International Stadium",
        nameAr: "استاد الملك فهد الدولي",
        city: "Riyadh",
        capacity: 70000,
        lat: 24.758740,
        lng: 46.842180,
        opening: "1987 (Renovated for 2034)",
        image: "https://pixabay.com/get/gbf8293e1fddd9bc209723ed61cc010eab348a98d260fae2a129ec1d176dd158168a20617cbe3fdf3e56766cb6d91d4b631eb079e71f6ac75452b4003d3284e58_1280.jpg",
        matches: ["group", "round-32", "round-16", "quarterfinal", "semifinal"],
        description: "Iconic stadium with a rich history, completely renovated for the World Cup 2034.",
        descriptionAr: "ملعب أيقوني بتاريخ غني، تم تجديده بالكامل لكأس العالم 2034.",
        features: "Roof inspired by traditional Arabian tents, state-of-the-art facilities meeting FIFA standards.",
        featuresAr: "سقف مستوحى من الخيام العربية التقليدية، مرافق حديثة تلبي معايير الفيفا.",
        transportation: {
            publicTransport: "King Fahd Metro Station with direct connection to stadium.",
            publicTransportAr: "محطة مترو الملك فهد مع اتصال مباشر بالملعب.",
            parking: "Extensive parking areas with 15,000 spaces.",
            parkingAr: "مناطق وقوف سيارات واسعة تتسع لـ 15,000 سيارة.",
            shuttle: "Multiple shuttle routes from city center and airport.",
            shuttleAr: "مسارات حافلات متعددة من وسط المدينة والمطار."
        },
        nearby: {
            restaurants: [
                { name: "Al Najdiyah Village", nameAr: "قرية النجدية" },
                { name: "Stadium Lounge", nameAr: "استاديوم لاونج" }
            ],
            hotels: [
                { name: "Courtyard Riyadh", nameAr: "كورتيارد الرياض" },
                { name: "Holiday Inn Riyadh", nameAr: "هوليداي إن الرياض" }
            ],
            shopping: [
                { name: "Granada Mall", nameAr: "غرناطة مول" }
            ]
        }
    },
    {
        id: "king-abdullah",
        name: "King Abdullah Sports City",
        nameAr: "مدينة الملك عبدالله الرياضية",
        city: "Jeddah",
        capacity: 58432,
        lat: 21.634135,
        lng: 39.105363,
        opening: "2014 (Renovated for 2034)",
        image: "https://pixabay.com/get/g5cb35c4520a62ae2019436fcf0db7721db5e7d5a8a5bcdd18a5a366f64a9d7b3813ca29834346faa9d45842de894ca89d9c6a4f6bc52fdcabc9d5f68e4e87a99_1280.jpg",
        matches: ["group", "round-32", "round-16", "quarterfinal"],
        description: "Known as 'The Jewel', this stadium will undergo significant renovations for the World Cup.",
        descriptionAr: "المعروف باسم 'الجوهرة'، سيخضع هذا الملعب لتجديدات كبيرة لكأس العالم.",
        features: "Enhanced fan experience areas, expanded media facilities, and improved player amenities.",
        featuresAr: "مناطق محسنة لتجربة المشجعين، ومرافق إعلامية موسعة، ومرافق محسنة للاعبين.",
        transportation: {
            publicTransport: "Haramain High Speed Rail connects to Jeddah station with shuttle service to stadium.",
            publicTransportAr: "قطار الحرمين السريع يربط بمحطة جدة مع خدمة نقل إلى الملعب.",
            parking: "8,000 parking spaces with pre-booking system.",
            parkingAr: "8,000 موقف للسيارات مع نظام حجز مسبق.",
            shuttle: "Regular shuttles from major Jeddah districts and hotels.",
            shuttleAr: "حافلات منتظمة من أحياء جدة الرئيسية والفنادق."
        },
        nearby: {
            restaurants: [
                { name: "The Venue", nameAr: "ذا فينيو" },
                { name: "Jeddah Eats", nameAr: "جدة إيتس" }
            ],
            hotels: [
                { name: "Sports City Hotel", nameAr: "فندق المدينة الرياضية" },
                { name: "Radisson Blu Jeddah", nameAr: "راديسون بلو جدة" }
            ],
            shopping: [
                { name: "Red Sea Mall", nameAr: "رد سي مول" }
            ]
        }
    },
    {
        id: "qiddiya-coast",
        name: "Qiddiya Coast Stadium",
        nameAr: "استاد ساحل القدية",
        city: "Jeddah",
        capacity: 46000,
        lat: 21.485696,
        lng: 39.186523,
        opening: "2031",
        image: "https://pixabay.com/get/g80ac208860867edc3a4d6af0404a5dae78e9e11f86f088df88a018e0cee38311fab8c03afc2ea495aebc498bca944c63106e52c1e6fd3e7f8c083043183a7d59_1280.jpg",
        matches: ["group", "round-32", "round-16"],
        description: "Design inspired by ocean waves, featuring extensive greenery around the stadium.",
        descriptionAr: "تصميم مستوحى من أمواج المحيط، يتميز بمساحات خضراء واسعة حول الملعب.",
        features: "Sustainable cooling system, natural ventilation, and water conservation technologies.",
        featuresAr: "نظام تبريد مستدام، وتهوية طبيعية، وتقنيات للحفاظ على المياه.",
        transportation: {
            publicTransport: "Jeddah Metro Red Line with Coast Stadium station.",
            publicTransportAr: "مترو جدة الخط الأحمر مع محطة ملعب الساحل.",
            parking: "Integrated parking complex with 6,000 spaces.",
            parkingAr: "مجمع مواقف متكامل يتسع لـ 6,000 سيارة.",
            shuttle: "Waterfront shuttles connecting coastal attractions.",
            shuttleAr: "حافلات الواجهة البحرية التي تربط بين المعالم الساحلية."
        },
        nearby: {
            restaurants: [
                { name: "Seafront Restaurant", nameAr: "مطعم سي فرونت" },
                { name: "Waves Dining", nameAr: "ويفز داينينج" }
            ],
            hotels: [
                { name: "Jeddah Waterfront Hotel", nameAr: "فندق جدة واترفرونت" },
                { name: "Coast Suites", nameAr: "أجنحة كوست" }
            ],
            shopping: [
                { name: "Jeddah Coast Mall", nameAr: "جدة كوست مول" }
            ]
        }
    },
    {
        id: "jeddah-central",
        name: "Jeddah Central Stadium",
        nameAr: "استاد وسط جدة",
        city: "Jeddah",
        capacity: 45740,
        lat: 21.543333,
        lng: 39.172779,
        opening: "2032",
        image: "https://pixabay.com/get/ga9a3e8ecf51e1beacc6a7fcb1f0a4b1acf073732b2c7c62f25fd9bae0064e54cdf1d3e1a60e5a462d7c5c38aea0b3ce0b8a58d88aa86f2fa4f84bd08b6b2fd24_1280.jpg",
        matches: ["group", "round-32"],
        description: "Design inspired by Jeddah's historic Al-Balad district, with modern amenities.",
        descriptionAr: "تصميم مستوحى من منطقة البلد التاريخية في جدة، مع وسائل راحة حديثة.",
        features: "360-degree LED ribbon displays, immersive sound system, and sustainable design elements.",
        featuresAr: "شاشات عرض LED على شكل شريط 360 درجة، ونظام صوت غامر، وعناصر تصميم مستدامة.",
        transportation: {
            publicTransport: "Central Jeddah Metro Station with direct stadium access.",
            publicTransportAr: "محطة مترو وسط جدة مع وصول مباشر للملعب.",
            parking: "3,500 parking spaces in tiered parking structures.",
            parkingAr: "3,500 موقف للسيارات في هياكل مواقف متدرجة.",
            shuttle: "Historic district tour shuttles combining cultural sites with stadium access.",
            shuttleAr: "حافلات جولة المنطقة التاريخية التي تجمع بين المواقع الثقافية والوصول إلى الملعب."
        },
        nearby: {
            restaurants: [
                { name: "Al-Balad Cuisine", nameAr: "مطبخ البلد" },
                { name: "Corniche Restaurant", nameAr: "مطعم الكورنيش" }
            ],
            hotels: [
                { name: "Jeddah Hilton", nameAr: "هيلتون جدة" },
                { name: "Park Hyatt Jeddah", nameAr: "بارك حياة جدة" }
            ],
            shopping: [
                { name: "Historic Souq", nameAr: "السوق التاريخي" }
            ]
        }
    },
    {
        id: "aramco",
        name: "Aramco Stadium",
        nameAr: "استاد أرامكو",
        city: "Khobar",
        capacity: 47000,
        lat: 26.282778,
        lng: 50.208333,
        opening: "2032",
        image: "https://pixabay.com/get/g1071a069cd2a0a44ca01eed979276d91af81a05cd7af9c4b9a34c29bf46a5fc456c8e6c67e7e5df88be2d248d2f6b9a2_1280.jpg",
        matches: ["group", "round-32", "round-16"],
        description: "Modern stadium in the Eastern Province featuring world-class facilities.",
        descriptionAr: "ملعب حديث في المنطقة الشرقية يتميز بمرافق عالمية المستوى.",
        features: "Energy efficient design, solar-powered systems, and advanced spectator amenities.",
        featuresAr: "تصميم موفر للطاقة، وأنظمة تعمل بالطاقة الشمسية، ووسائل راحة متقدمة للمتفرجين.",
        transportation: {
            publicTransport: "Eastern Province Metro with Aramco Stadium station.",
            publicTransportAr: "مترو المنطقة الشرقية مع محطة استاد أرامكو.",
            parking: "7,000 parking spaces with energy-generating solar canopies.",
            parkingAr: "7,000 موقف للسيارات مع مظلات شمسية مولدة للطاقة.",
            shuttle: "Employee and visitor shuttles from Aramco facilities and regional transport hubs.",
            shuttleAr: "حافلات للموظفين والزوار من مرافق أرامكو ومراكز النقل الإقليمية."
        },
        nearby: {
            restaurants: [
                { name: "Energy Dining Hall", nameAr: "صالة إنرجي داينينج" },
                { name: "Eastern Flavors", nameAr: "إيسترن فليفرز" }
            ],
            hotels: [
                { name: "Khobar Marriott", nameAr: "ماريوت الخبر" },
                { name: "Aramco Guest House", nameAr: "بيت الضيافة أرامكو" }
            ],
            shopping: [
                { name: "Dhahran Mall", nameAr: "الظهران مول" }
            ]
        }
    },
    {
        id: "neom",
        name: "NEOM Stadium",
        nameAr: "استاد نيوم",
        city: "NEOM",
        capacity: 45000,
        lat: 27.912222,
        lng: 35.246944,
        opening: "2033",
        image: "https://pixabay.com/get/g721efccfe24fbc2621d3c7e9c7ca7e5a28fa18da61ea809c387e3b8eb23f055e5ebb3f347fa50dbafb5fa5f7dae7e7fc1c09c71bbbf43abd2cbe59d0e7afd5e4_1280.jpg",
        matches: ["group", "round-32"],
        description: "Futuristic stadium in the innovative city of NEOM, showcasing next-generation technology.",
        descriptionAr: "ملعب مستقبلي في مدينة نيوم المبتكرة، يعرض تكنولوجيا الجيل القادم.",
        features: "Sustainable design with zero carbon footprint, advanced technology integration throughout.",
        featuresAr: "تصميم مستدام بدون بصمة كربونية، ودمج التكنولوجيا المتقدمة في جميع أنحاء الملعب.",
        transportation: {
            publicTransport: "NEOM high-speed transit system with dedicated stadium connection.",
            publicTransportAr: "نظام النقل عالي السرعة في نيوم مع اتصال مخصص بالملعب.",
            parking: "Autonomous vehicle parking system with 5,000 spaces.",
            parkingAr: "نظام مواقف للمركبات ذاتية القيادة يتسع لـ 5,000 سيارة.",
            shuttle: "Electric autonomous shuttles connecting all NEOM districts to the stadium.",
            shuttleAr: "حافلات كهربائية ذاتية القيادة تربط جميع مناطق نيوم بالملعب."
        },
        nearby: {
            restaurants: [
                { name: "The Line Dining", nameAr: "ذا لاين داينينج" },
                { name: "Future Flavors", nameAr: "فيوتشر فليفرز" }
            ],
            hotels: [
                { name: "NEOM Bay Hotel", nameAr: "فندق خليج نيوم" },
                { name: "The Line Residences", nameAr: "ذا لاين ريزيدنسز" }
            ],
            shopping: [
                { name: "NEOM Central Market", nameAr: "سوق نيوم المركزي" }
            ]
        }
    }
];

/**
 * City information for map markers and locations
 */
const citiesInfo = [
    {
        name: "Riyadh",
        nameAr: "الرياض",
        lat: 24.774265,
        lng: 46.738586,
        description: "The capital city of Saudi Arabia, hosting multiple World Cup venues including the final stadium.",
        descriptionAr: "عاصمة المملكة العربية السعودية، تستضيف العديد من ملاعب كأس العالم بما في ذلك ملعب المباراة النهائية."
    },
    {
        name: "Jeddah",
        nameAr: "جدة",
        lat: 21.543333,
        lng: 39.172779,
        description: "Coastal city on the Red Sea, known for its beautiful waterfront and historic old town.",
        descriptionAr: "مدينة ساحلية على البحر الأحمر، تشتهر بواجهتها البحرية الجميلة ومدينتها القديمة التاريخية."
    },
    {
        name: "Khobar",
        nameAr: "الخبر",
        lat: 26.282778,
        lng: 50.208333,
        description: "Eastern Province city with modern infrastructure and coastal attractions.",
        descriptionAr: "مدينة المنطقة الشرقية ذات البنية التحتية الحديثة والمعالم الساحلية."
    },
    {
        name: "NEOM",
        nameAr: "نيوم",
        lat: 27.912222,
        lng: 35.246944,
        description: "Futuristic planned city showcasing innovation and sustainable development.",
        descriptionAr: "مدينة مستقبلية مخططة تعرض الابتكار والتنمية المستدامة."
    },
    {
        name: "Qiddiya",
        nameAr: "القدية",
        lat: 24.639484,
        lng: 46.517375,
        description: "Entertainment city near Riyadh, featuring sports, cultural, and recreational attractions.",
        descriptionAr: "مدينة ترفيهية بالقرب من الرياض، تضم معالم رياضية وثقافية وترفيهية."
    }
];

/**
 * Get data for a specific city
 * @param {string} cityName - The name of the city
 * @returns {Object|null} - City data or null if not found
 */
function getCityData(cityName) {
    return citiesInfo.find(city => city.name === cityName) || null;
}

/**
 * Get the number of stadiums in a city
 * @param {string} cityName - The name of the city
 * @returns {number} - Number of stadiums
 */
function getCityStadiumCount(cityName) {
    return stadiumsInfo.filter(stadium => stadium.city === cityName).length;
}

/**
 * Show a specific location on the map
 * @param {string} type - Type of location (stadium)
 * @param {string} id - ID of the location
 */
function showOnMap(type, id) {
    if (type === 'stadium') {
        const stadium = stadiumsInfo.find(s => s.id === id);
        if (stadium && mainMap) {
            mainMap.setView([stadium.lat, stadium.lng], 15);
            
            // Find and open the popup for this stadium
            markersLayer.eachLayer(layer => {
                const latlng = layer.getLatLng();
                if (latlng.lat === stadium.lat && latlng.lng === stadium.lng) {
                    layer.openPopup();
                }
            });
        }
    }
}