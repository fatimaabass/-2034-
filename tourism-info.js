/**
 * Tourism information for World Cup 2034 Saudi Arabia Guide
 * Contains details about cities, attractions, hotels, and restaurants
 */

const tourismInfo = {
    cities: [
        {
            id: "riyadh",
            name: "Riyadh",
            nameAr: "الرياض",
            description: "The capital city of Saudi Arabia, a modern metropolis with rich cultural heritage.",
            descriptionAr: "عاصمة المملكة العربية السعودية، مدينة حديثة ذات تراث ثقافي غني.",
            image: "https://pixabay.com/get/ge1a8d8c8cdab3d68042ce54aeea0223cc407b785d39865428fa1c0b52d5761e2b2ed534674c96bb22ab83e5fc3e15aa4_1280.jpg",
            attractions: [
                {
                    name: "Al Masmak Fortress",
                    nameAr: "قصر المصمك",
                    description: "Historic 19th-century fortress symbolizing the unification of the Kingdom.",
                    descriptionAr: "حصن تاريخي يعود للقرن التاسع عشر، يُعد رمزًا لتوحيد المملكة.",
                    image: "https://pixabay.com/get/ge3034f463e0bee963028ae645282d3e9dc845e190dd95872de1b95a5ae0ab1a974ab53ef16d7b7b2bdf50941e99d95bd_1280.jpg",
                    location: "Al Dirah, Riyadh",
                    locationAr: "الديرة، الرياض",
                    hours: "Open: 9AM - 9PM",
                    hoursAr: "مفتوح: 9ص - 9م",
                    fee: "Free Entry",
                    feeAr: "دخول مجاني",
                    lat: 24.631111,
                    lng: 46.713056
                },
                {
                    name: "Kingdom Centre Tower",
                    nameAr: "برج المملكة",
                    description: "Iconic skyscraper with shopping mall, hotel, and panoramic viewing platform.",
                    descriptionAr: "ناطحة سحاب أيقونية تحتوي على مركز تسوق وفندق ومنصة مشاهدة بانورامية.",
                    image: "https://pixabay.com/get/g04ff8431e0289ec349b4f70faaaab8e5efe0b0c66d07aa61a2fbca31c87ada2575a6da656a8f32817f63d96129a7236a_1280.jpg",
                    location: "Al Olaya, Riyadh",
                    locationAr: "العليا، الرياض",
                    hours: "Open: 10AM - 11PM",
                    hoursAr: "مفتوح: 10ص - 11م",
                    fee: "Observation Deck: 50 SAR",
                    feeAr: "منصة المراقبة: 50 ريال",
                    lat: 24.711667,
                    lng: 46.674444
                },
                {
                    name: "National Museum",
                    nameAr: "المتحف الوطني السعودي",
                    description: "Showcases the history and culture of Saudi Arabia through the ages.",
                    descriptionAr: "يعرض تاريخ وثقافة المملكة العربية السعودية عبر العصور.",
                    image: "https://pixabay.com/get/gea5a2497dda02356eb83d3856da49c28efd28e0bb15f6de91a7182cc6061ade76bca2870ed1f38a37fcdb66a4e021b8a958a2298a876c9ea5e0a58159c216b66_1280.jpg",
                    location: "King Faisal Road, Riyadh",
                    locationAr: "طريق الملك فيصل، الرياض",
                    hours: "Open: 9AM - 7PM (Closed on Mondays)",
                    hoursAr: "مفتوح: 9ص - 7م (مغلق الاثنين)",
                    fee: "Entry: 10 SAR",
                    feeAr: "الدخول: 10 ريال",
                    lat: 24.685278,
                    lng: 46.722778
                },
                {
                    name: "Al Turaif District, Diriyah",
                    nameAr: "حي الطريف، الدرعية",
                    description: "UNESCO World Heritage site, reflecting the history of the first Saudi State.",
                    descriptionAr: "موقع تراث عالمي لليونسكو، يعكس تاريخ الدولة السعودية الأولى.",
                    image: "https://pixabay.com/get/gb5fdd57beee090af415460f46f71d105817390d0764b96b050f34090cfdb1e4c856ecdb075ea606c2a98f25da908d2e5_1280.jpg",
                    location: "Diriyah, on the outskirts of Riyadh",
                    locationAr: "الدرعية، على مشارف الرياض",
                    hours: "Open: 9AM - 10PM",
                    hoursAr: "مفتوح: 9ص - 10م",
                    fee: "Entry: 15 SAR",
                    feeAr: "الدخول: 15 ريال",
                    lat: 24.734722,
                    lng: 46.579444
                },
                {
                    name: "Riyadh Boulevard",
                    nameAr: "بوليفارد الرياض",
                    description: "Entertainment zone with restaurants, cafes, and artistic performances.",
                    descriptionAr: "منطقة ترفيهية تضم مطاعم ومقاهي وعروضًا فنية.",
                    image: "https://pixabay.com/get/g7baa6f4052c6ee8ea0a3010a8a86d7d58eca0dab1c5518c845fa69f8b42f04bc149b8c21df2ace7505b44c984ce2ce22_1280.jpg",
                    location: "Eastern Ring Road, Riyadh",
                    locationAr: "الطريق الدائري الشرقي، الرياض",
                    hours: "Open: 4PM - 1AM",
                    hoursAr: "مفتوح: 4م - 1ص",
                    fee: "Free Entry (Attractions may have separate fees)",
                    feeAr: "دخول مجاني (قد يكون للمعالم رسوم منفصلة)",
                    lat: 24.752778,
                    lng: 46.738889
                }
            ],
            restaurants: [
                {
                    name: "Najd Village",
                    nameAr: "قرية نجد",
                    description: "Authentic Saudi cuisine served in a traditional Najdi setting.",
                    descriptionAr: "مأكولات سعودية أصيلة تقدم في جو نجدي تقليدي.",
                    cuisine: "Saudi Traditional",
                    cuisineAr: "سعودي تقليدي",
                    priceRange: "$$ - $$$",
                    priceRangeAr: "$$ - $$$"
                },
                {
                    name: "The Globe",
                    nameAr: "ذا جلوب",
                    description: "Fine dining restaurant at the top of Al Faisaliah Tower with panoramic views.",
                    descriptionAr: "مطعم فاخر في أعلى برج الفيصلية مع إطلالات بانورامية.",
                    cuisine: "International",
                    cuisineAr: "عالمي",
                    priceRange: "$$$$",
                    priceRangeAr: "$$$$"
                },
                {
                    name: "Takya",
                    nameAr: "تكية",
                    description: "Modern Saudi cuisine with creative presentations.",
                    descriptionAr: "مأكولات سعودية حديثة بطريقة تقديم إبداعية.",
                    cuisine: "Contemporary Saudi",
                    cuisineAr: "سعودي معاصر",
                    priceRange: "$$$ - $$$$",
                    priceRangeAr: "$$$ - $$$$"
                }
            ],
            stadiums: [
                {
                    name: "King Salman International Stadium",
                    nameAr: "استاد الملك سلمان الدولي",
                    nearby: {
                        hotels: [
                            { name: "Four Seasons Riyadh", nameAr: "فور سيزونز الرياض" },
                            { name: "Hilton Riyadh", nameAr: "هيلتون الرياض" }
                        ],
                        restaurants: [
                            { name: "Al Orjouan", nameAr: "الأرجوان" },
                            { name: "Najd Village", nameAr: "قرية نجد" }
                        ],
                        shopping: [
                            { name: "Kingdom Centre Mall", nameAr: "مركز المملكة التجاري" }
                        ]
                    }
                },
                {
                    name: "King Fahd International Stadium",
                    nameAr: "استاد الملك فهد الدولي",
                    nearby: {
                        hotels: [
                            { name: "Courtyard Riyadh", nameAr: "كورتيارد الرياض" },
                            { name: "Holiday Inn Riyadh", nameAr: "هوليداي إن الرياض" }
                        ],
                        restaurants: [
                            { name: "Al Najdiyah Village", nameAr: "قرية النجدية" },
                            { name: "Stadium Lounge", nameAr: "استاديوم لاونج" }
                        ],
                        shopping: [
                            { name: "Granada Mall", nameAr: "غرناطة مول" }
                        ]
                    }
                }
            ]
        },
        {
            id: "jeddah",
            name: "Jeddah",
            nameAr: "جدة",
            description: "Coastal city on the Red Sea with a rich history and vibrant culture.",
            descriptionAr: "مدينة ساحلية على البحر الأحمر ذات تاريخ غني وثقافة نابضة بالحياة.",
            image: "https://pixabay.com/get/ga2a45e56254b3de7dbb92cd7e0b7aafa2db4ce9ada471a267efd91d54d3b5dbf86bcf1debb75c78b69a7ecb5df97ed4cf3ba7c6db0f3580fc1f2c2bf2dc2a6e3_1280.jpg",
            attractions: [
                {
                    name: "Historic Jeddah (Al-Balad)",
                    nameAr: "جدة التاريخية (البلد)",
                    description: "UNESCO World Heritage site with traditional architecture and bustling souks.",
                    descriptionAr: "موقع تراث عالمي لليونسكو مع عمارة تقليدية وأسواق نابضة بالحياة.",
                    image: "https://pixabay.com/get/g4a35aef53d3e7953307b0b9fc0a9649b24e4fa8beff4ea2f53e2d8a5de2d0fedb3fd18d4b66d19ae4ebefee4c69bde5c_1280.jpg",
                    location: "Al-Balad District, Jeddah",
                    locationAr: "حي البلد، جدة",
                    hours: "Open all day (Individual shops vary)",
                    hoursAr: "مفتوح طوال اليوم (تختلف المحلات الفردية)",
                    fee: "Free Entry",
                    feeAr: "دخول مجاني",
                    lat: 21.488611,
                    lng: 39.186389
                },
                {
                    name: "King Fahd Fountain",
                    nameAr: "نافورة الملك فهد",
                    description: "World's tallest fountain, shooting water up to 312 meters.",
                    descriptionAr: "أعلى نافورة في العالم، تطلق المياه إلى ارتفاع 312 متر.",
                    image: "https://pixabay.com/get/g6f0e3b15f4d2ffb626d1adf9f97a5c60fbfe1ebb6deefac6aa7f661073a3c9e95dd31ee3e86f0b4ed0c17ea02879c2ff3d3c051e3968f15fdcdc88b78f88a5f6_1280.jpg",
                    location: "Corniche, Jeddah",
                    locationAr: "الكورنيش، جدة",
                    hours: "Best viewed in the evening",
                    hoursAr: "أفضل مشاهدة في المساء",
                    fee: "Free",
                    feeAr: "مجاني",
                    lat: 21.517778,
                    lng: 39.146944
                },
                {
                    name: "Jeddah Corniche",
                    nameAr: "كورنيش جدة",
                    description: "4.2 km waterfront promenade with recreational areas and public art.",
                    descriptionAr: "ممشى على الواجهة البحرية بطول 4.2 كم مع مناطق ترفيهية وفن عام.",
                    image: "https://pixabay.com/get/g19f9ac90fdacdea2feacc0b520dbb8e5aadd2f4a2ac32fbeee9a5c5db61e1c0c8ded57d21db03b9cc4a97aed0c9731f52eaa2eb83cad71a6e6aef54b1af6af77_1280.jpg",
                    location: "Western Jeddah",
                    locationAr: "جدة الغربية",
                    hours: "Open 24 hours",
                    hoursAr: "مفتوح 24 ساعة",
                    fee: "Free",
                    feeAr: "مجاني",
                    lat: 21.541944,
                    lng: 39.132222
                },
                {
                    name: "Fakieh Aquarium",
                    nameAr: "أكواريوم الفقيه",
                    description: "The first and largest public aquarium in Saudi Arabia.",
                    descriptionAr: "أول وأكبر حوض عام للأحياء المائية في المملكة العربية السعودية.",
                    image: "https://pixabay.com/get/g51c5ced71a52ced1ee73fea5b0a2a83ec12a31d70bd51ec1bcc16a9b9d6a04cbc71d4f1cc9f0ce3f5752f3ae051bad7ec57ee16a69ffc25a09c0e67a9bf9dad9_1280.jpg",
                    location: "Corniche Road, Jeddah",
                    locationAr: "طريق الكورنيش، جدة",
                    hours: "Open: 10AM - 10PM",
                    hoursAr: "مفتوح: 10ص - 10م",
                    fee: "Entry: 50 SAR",
                    feeAr: "الدخول: 50 ريال",
                    lat: 21.565556,
                    lng: 39.102778
                }
            ],
            restaurants: [
                {
                    name: "Al Nakheel",
                    nameAr: "النخيل",
                    description: "Authentic Hijazi cuisine with Red Sea views.",
                    descriptionAr: "مأكولات حجازية أصيلة مع إطلالات على البحر الأحمر.",
                    cuisine: "Saudi Hijazi",
                    cuisineAr: "سعودي حجازي",
                    priceRange: "$$ - $$$",
                    priceRangeAr: "$$ - $$$"
                },
                {
                    name: "Twina",
                    nameAr: "توينة",
                    description: "Renowned seafood restaurant with fresh local catch.",
                    descriptionAr: "مطعم مأكولات بحرية شهير مع صيد محلي طازج.",
                    cuisine: "Seafood",
                    cuisineAr: "مأكولات بحرية",
                    priceRange: "$$$",
                    priceRangeAr: "$$$"
                },
                {
                    name: "Byblos",
                    nameAr: "بيبلوس",
                    description: "Lebanese cuisine with authentic flavors.",
                    descriptionAr: "مطبخ لبناني بنكهات أصيلة.",
                    cuisine: "Lebanese",
                    cuisineAr: "لبناني",
                    priceRange: "$$ - $$$",
                    priceRangeAr: "$$ - $$$"
                }
            ],
            stadiums: [
                {
                    name: "King Abdullah Sports City",
                    nameAr: "مدينة الملك عبدالله الرياضية",
                    nearby: {
                        hotels: [
                            { name: "Sports City Hotel", nameAr: "فندق المدينة الرياضية" },
                            { name: "Radisson Blu Jeddah", nameAr: "راديسون بلو جدة" }
                        ],
                        restaurants: [
                            { name: "The Venue", nameAr: "ذا فينيو" },
                            { name: "Jeddah Eats", nameAr: "جدة إيتس" }
                        ],
                        shopping: [
                            { name: "Red Sea Mall", nameAr: "رد سي مول" }
                        ]
                    }
                },
                {
                    name: "Jeddah Central Stadium",
                    nameAr: "استاد وسط جدة",
                    nearby: {
                        hotels: [
                            { name: "Jeddah Hilton", nameAr: "هيلتون جدة" },
                            { name: "Park Hyatt Jeddah", nameAr: "بارك حياة جدة" }
                        ],
                        restaurants: [
                            { name: "Al-Balad Cuisine", nameAr: "مطبخ البلد" },
                            { name: "Corniche Restaurant", nameAr: "مطعم الكورنيش" }
                        ],
                        shopping: [
                            { name: "Historic Souq", nameAr: "السوق التاريخي" }
                        ]
                    }
                }
            ]
        },
        {
            id: "khobar",
            name: "Khobar",
            nameAr: "الخبر",
            description: "Coastal city in the Eastern Province known for its beautiful corniche and cultural sites.",
            descriptionAr: "مدينة ساحلية في المنطقة الشرقية تشتهر بكورنيشها الجميل ومواقعها الثقافية.",
            image: "https://pixabay.com/get/g80ca9c59dbeef75b3fd9f1e5f7e6a6a4b7d2213f80f7a06b17d2a0b5f6af40a41bc1f51ae55d8e78c0bd6fbb47dd59f68c979c7be29a19eb32d1ba5a17d2f5a8_1280.jpg",
            attractions: [
                {
                    name: "Khobar Corniche",
                    nameAr: "كورنيش الخبر",
                    description: "Beautiful waterfront promenade ideal for walking and relaxing.",
                    descriptionAr: "ممشى جميل على الواجهة البحرية مثالي للمشي والاسترخاء.",
                    image: "https://pixabay.com/get/g7c54cbdd0498c6f2b6af9f60b0dd4a94fe0da19d647764839d8b9d3ca88e4fe94f45ee1e0c3ba6de56cb1fc9b6cd33bbf2e67acd97ae407e8c7b5c73b94507c8_1280.jpg",
                    location: "Khobar Waterfront",
                    locationAr: "واجهة الخبر البحرية",
                    hours: "Open 24 hours",
                    hoursAr: "مفتوح 24 ساعة",
                    fee: "Free",
                    feeAr: "مجاني",
                    lat: 26.277778,
                    lng: 50.205556
                },
                {
                    name: "Half Moon Beach",
                    nameAr: "شاطئ نصف القمر",
                    description: "Crescent-shaped beach with white sand and clear waters.",
                    descriptionAr: "شاطئ على شكل هلال برمال بيضاء ومياه صافية.",
                    image: "https://pixabay.com/get/g9fc5bbbad18ecedf20fdbdd2b3f9b8afac9a8d2dea9a4df8bf68c5c91baf2f7293b7d45ca52536c4f2b66ad301ef4b7a95551359c3f11aad06f3f5903b6cd318_1280.jpg",
                    location: "North of Khobar",
                    locationAr: "شمال الخبر",
                    hours: "Open: 7AM - 10PM",
                    hoursAr: "مفتوح: 7ص - 10م",
                    fee: "Entry: 10-20 SAR",
                    feeAr: "الدخول: 10-20 ريال",
                    lat: 26.336111,
                    lng: 50.195833
                },
                {
                    name: "Scitech Center",
                    nameAr: "مركز سايتك",
                    description: "Interactive science and technology center with educational exhibits.",
                    descriptionAr: "مركز تفاعلي للعلوم والتكنولوجيا مع معارض تعليمية.",
                    image: "https://pixabay.com/get/gf4a7e8c60a6e0bd3c8cb6d22aad11b18c0ab2a7e35b1c4d93b33a01f31b4fc1053b0c73ca35ac8a6cd5f34db5d9c2f0ad7a8f5e0a618f09e60de5de0db0a0bf5_1280.jpg",
                    location: "Abdullah Fuad Road, Khobar",
                    locationAr: "طريق عبدالله فؤاد، الخبر",
                    hours: "Open: 9AM - 8PM (Closed on Tuesdays)",
                    hoursAr: "مفتوح: 9ص - 8م (مغلق الثلاثاء)",
                    fee: "Entry: 45 SAR",
                    feeAr: "الدخول: 45 ريال",
                    lat: 26.301389,
                    lng: 50.181944
                }
            ],
            restaurants: [
                {
                    name: "Mirage Restaurant",
                    nameAr: "مطعم ميراج",
                    description: "Contemporary seafood with Eastern Province specialties.",
                    descriptionAr: "مأكولات بحرية معاصرة مع تخصصات المنطقة الشرقية.",
                    cuisine: "Seafood",
                    cuisineAr: "مأكولات بحرية",
                    priceRange: "$$$",
                    priceRangeAr: "$$$"
                },
                {
                    name: "Yildizlar",
                    nameAr: "يلدزلر",
                    description: "Turkish cuisine with authentic flavors.",
                    descriptionAr: "مطبخ تركي بنكهات أصيلة.",
                    cuisine: "Turkish",
                    cuisineAr: "تركي",
                    priceRange: "$$ - $$$",
                    priceRangeAr: "$$ - $$$"
                }
            ],
            stadiums: [
                {
                    name: "Aramco Stadium",
                    nameAr: "استاد أرامكو",
                    nearby: {
                        hotels: [
                            { name: "Khobar Marriott", nameAr: "ماريوت الخبر" },
                            { name: "Aramco Guest House", nameAr: "بيت الضيافة أرامكو" }
                        ],
                        restaurants: [
                            { name: "Energy Dining Hall", nameAr: "صالة إنرجي داينينج" },
                            { name: "Eastern Flavors", nameAr: "إيسترن فليفرز" }
                        ],
                        shopping: [
                            { name: "Dhahran Mall", nameAr: "الظهران مول" }
                        ]
                    }
                }
            ]
        },
        {
            id: "neom",
            name: "NEOM",
            nameAr: "نيوم",
            description: "Futuristic planned city showcasing innovation and sustainable development.",
            descriptionAr: "مدينة مستقبلية مخططة تعرض الابتكار والتنمية المستدامة.",
            image: "https://pixabay.com/get/g721efccfe24fbc2621d3c7e9c7ca7e5a28fa18da61ea809c387e3b8eb23f055e5ebb3f347fa50dbafb5fa5f7dae7e7fc1c09c71bbbf43abd2cbe59d0e7afd5e4_1280.jpg",
            attractions: [
                {
                    name: "The Line Experience Center",
                    nameAr: "مركز تجربة ذا لاين",
                    description: "Interactive exhibition showcasing NEOM's flagship linear city.",
                    descriptionAr: "معرض تفاعلي يعرض المدينة الخطية الرائدة في نيوم.",
                    image: "https://pixabay.com/get/g25b04ec1a9d0c8e11e1ad79075a50ee34c22a48f0e6f1b4d8ea81c5e8d7e3f1a0aadf8eb3d9e1f9c0e659ba1eada45a6a21cf5fe9d1e5c00acc6c0c6bfd45ae2_1280.jpg",
                    location: "NEOM Welcome Center",
                    locationAr: "مركز الترحيب بنيوم",
                    hours: "Open: 10AM - 8PM",
                    hoursAr: "مفتوح: 10ص - 8م",
                    fee: "Free with registration",
                    feeAr: "مجاني مع التسجيل",
                    lat: 27.912222,
                    lng: 35.246944
                },
                {
                    name: "Trojena Preview",
                    nameAr: "عرض تروجينا",
                    description: "Preview of the mountain destination with year-round skiing.",
                    descriptionAr: "معاينة للوجهة الجبلية مع التزلج على مدار السنة.",
                    image: "https://pixabay.com/get/g3be8f3b66c1a92ccf2a8f77e25abf8cbd20066642c8a44b7a3a35a1b2775bf2f0b6d77a0d8ace50f8ce05d13bcdd0b6ddc3c47b9c80b6e2b1e4cb4ea9c36aa10_1280.jpg",
                    location: "NEOM Mountains",
                    locationAr: "جبال نيوم",
                    hours: "Open: 9AM - 5PM",
                    hoursAr: "مفتوح: 9ص - 5م",
                    fee: "Entry: 75 SAR",
                    feeAr: "الدخول: 75 ريال",
                    lat: 27.985000,
                    lng: 35.330000
                },
                {
                    name: "Oxagon Innovation Hub",
                    nameAr: "مركز ابتكار أوكساجون",
                    description: "Floating industrial district showcasing future manufacturing.",
                    descriptionAr: "حي صناعي عائم يعرض التصنيع المستقبلي.",
                    image: "https://pixabay.com/get/g7da41b9273c75ce4daa7f9a6a823f7d06a5486acf19c5e5d673c693e9089b76a90e5dda7f8ed7f5bdc0e39a07ea59b7ec2a49a84e00b3c1bc3fc3cab18f3a2a0_1280.jpg",
                    location: "NEOM Bay",
                    locationAr: "خليج نيوم",
                    hours: "By appointment only",
                    hoursAr: "بموعد مسبق فقط",
                    fee: "Registration required",
                    feeAr: "التسجيل مطلوب",
                    lat: 27.870000,
                    lng: 35.220000
                }
            ],
            restaurants: [
                {
                    name: "Future Foods",
                    nameAr: "فيوتشر فودز",
                    description: "Innovative dining with sustainable ingredients and futuristic presentations.",
                    descriptionAr: "طعام مبتكر بمكونات مستدامة وعروض تقديم مستقبلية.",
                    cuisine: "Futuristic Fusion",
                    cuisineAr: "فيوجن مستقبلي",
                    priceRange: "$$$$",
                    priceRangeAr: "$$$$"
                },
                {
                    name: "Desert Oasis",
                    nameAr: "واحة الصحراء",
                    description: "Traditional Bedouin food with modern interpretations.",
                    descriptionAr: "طعام بدوي تقليدي مع تفسيرات حديثة.",
                    cuisine: "Neo-Arabian",
                    cuisineAr: "عربي جديد",
                    priceRange: "$$$",
                    priceRangeAr: "$$$"
                }
            ],
            stadiums: [
                {
                    name: "NEOM Stadium",
                    nameAr: "استاد نيوم",
                    nearby: {
                        hotels: [
                            { name: "NEOM Bay Hotel", nameAr: "فندق خليج نيوم" },
                            { name: "The Line Residences", nameAr: "ذا لاين ريزيدنسز" }
                        ],
                        restaurants: [
                            { name: "The Line Dining", nameAr: "ذا لاين داينينج" },
                            { name: "Future Flavors", nameAr: "فيوتشر فليفرز" }
                        ],
                        shopping: [
                            { name: "NEOM Central Market", nameAr: "سوق نيوم المركزي" }
                        ]
                    }
                }
            ]
        }
    ],
    
    attractions: [
        {
            name: "King Abdulaziz Historical Center",
            nameAr: "مركز الملك عبدالعزيز التاريخي",
            city: "Riyadh",
            description: "Cultural and historical site including the National Museum.",
            descriptionAr: "موقع ثقافي وتاريخي يضم المتحف الوطني.",
            address: "King Faisal Road, Riyadh",
            lat: 24.685278,
            lng: 46.722778
        },
        {
            name: "King Abdullah Economic City",
            nameAr: "مدينة الملك عبدالله الاقتصادية",
            city: "Jeddah",
            description: "Modern planned city with beautiful waterfront and amenities.",
            descriptionAr: "مدينة مخططة حديثة ذات واجهة بحرية جميلة ومرافق.",
            address: "North of Jeddah, along the Red Sea",
            lat: 22.406111,
            lng: 39.090833
        },
        {
            name: "King Fahd Causeway",
            nameAr: "جسر الملك فهد",
            city: "Khobar",
            description: "25 km bridge connecting Saudi Arabia with Bahrain.",
            descriptionAr: "جسر بطول 25 كم يربط المملكة العربية السعودية بالبحرين.",
            address: "Eastern Khobar",
            lat: 26.189722,
            lng: 50.205833
        }
    ],
    
    hotels: [
        {
            name: "Four Seasons Hotel Riyadh",
            nameAr: "فندق فور سيزنز الرياض",
            city: "Riyadh",
            rating: 5,
            address: "Kingdom Centre, Riyadh",
            lat: 24.711667,
            lng: 46.674444
        },
        {
            name: "Waldorf Astoria Jeddah",
            nameAr: "والدورف أستوريا جدة",
            city: "Jeddah",
            rating: 5,
            address: "Corniche Road, Jeddah",
            lat: 21.544444,
            lng: 39.146111
        },
        {
            name: "Kempinski Al Othman Hotel",
            nameAr: "فندق كمبينسكي العثمان",
            city: "Khobar",
            rating: 5,
            address: "Prince Turki St, Khobar",
            lat: 26.305556,
            lng: 50.183333
        }
    ],
    
    restaurants: [
        {
            name: "Najd Village",
            nameAr: "قرية نجد",
            city: "Riyadh",
            cuisine: "Saudi Traditional",
            address: "Takhassusi St, Riyadh",
            lat: 24.702778,
            lng: 46.668333
        },
        {
            name: "Al Nakheel",
            nameAr: "النخيل",
            city: "Jeddah",
            cuisine: "Saudi Hijazi",
            address: "Corniche Road, Jeddah",
            lat: 21.541111,
            lng: 39.156111
        },
        {
            name: "Mirage",
            nameAr: "ميراج",
            city: "Khobar",
            cuisine: "Seafood",
            address: "Corniche Road, Khobar",
            lat: 26.288889,
            lng: 50.203333
        }
    ]
};