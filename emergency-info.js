/**
 * Emergency information for World Cup 2034 Saudi Arabia Guide
 * Contains details about emergency contacts, hospitals, police stations, and embassies
 */

const emergencyInfo = {
    contacts: [
        {
            service: "Medical Emergency",
            serviceAr: "الطوارئ الطبية",
            number: "997",
            description: "For medical emergencies requiring immediate assistance",
            descriptionAr: "للطوارئ الطبية التي تتطلب مساعدة فورية",
            icon: "ambulance"
        },
        {
            service: "Police",
            serviceAr: "الشرطة",
            number: "999",
            description: "For security emergencies, criminal incidents, and public safety",
            descriptionAr: "لحالات الطوارئ الأمنية والحوادث الجنائية والسلامة العامة",
            icon: "shield-alt"
        },
        {
            service: "Fire Department",
            serviceAr: "الدفاع المدني",
            number: "998",
            description: "For fires, hazardous materials, and rescue operations",
            descriptionAr: "للحرائق والمواد الخطرة وعمليات الإنقاذ",
            icon: "fire"
        },
        {
            service: "Traffic Police",
            serviceAr: "شرطة المرور",
            number: "993",
            description: "For road accidents and traffic-related emergencies",
            descriptionAr: "لحوادث الطرق وحالات الطوارئ المتعلقة بالمرور",
            icon: "road"
        },
        {
            service: "Unified Emergency Number",
            serviceAr: "رقم الطوارئ الموحد",
            number: "911",
            description: "For all types of emergencies (available in multiple languages)",
            descriptionAr: "لجميع أنواع حالات الطوارئ (متوفر بعدة لغات)",
            icon: "phone-alt"
        },
        {
            service: "Tourist Help Line",
            serviceAr: "خط مساعدة السياح",
            number: "930",
            description: "For tourist assistance, complaints, and information",
            descriptionAr: "لمساعدة السياح والشكاوى والمعلومات",
            icon: "info-circle"
        }
    ],
    
    hospitals: [
        {
            id: "kfsh-riyadh",
            name: "King Faisal Specialist Hospital",
            nameAr: "مستشفى الملك فيصل التخصصي",
            city: "Riyadh",
            address: "Takhassusi St, Al Maather, Riyadh",
            addressAr: "شارع التخصصي، المعذر، الرياض",
            phone: "+966-11-464-7272",
            languages: ["Arabic", "English"],
            languages_ar: ["العربية", "الإنجليزية"],
            emergency: true,
            lat: 24.689722,
            lng: 46.676667,
            website: "https://www.kfshrc.edu.sa/"
        },
        {
            id: "kkuh-riyadh",
            name: "King Khalid University Hospital",
            nameAr: "مستشفى الملك خالد الجامعي",
            city: "Riyadh",
            address: "King Abdullah Rd, King Saud University, Riyadh",
            addressAr: "طريق الملك عبد الله، جامعة الملك سعود، الرياض",
            phone: "+966-11-467-0011",
            languages: ["Arabic", "English"],
            languages_ar: ["العربية", "الإنجليزية"],
            emergency: true,
            lat: 24.713889,
            lng: 46.744444,
            website: "https://medicine.ksu.edu.sa/en"
        },
        {
            id: "kfhg-jeddah",
            name: "King Fahd Hospital",
            nameAr: "مستشفى الملك فهد",
            city: "Jeddah",
            address: "Palestine St, Al Hamra, Jeddah",
            addressAr: "شارع فلسطين، الحمراء، جدة",
            phone: "+966-12-665-5000",
            languages: ["Arabic", "English"],
            languages_ar: ["العربية", "الإنجليزية"],
            emergency: true,
            lat: 21.536389,
            lng: 39.172778,
            website: "https://www.moh.gov.sa/"
        },
        {
            id: "sghhj-jeddah",
            name: "Saudi German Hospital",
            nameAr: "المستشفى السعودي الألماني",
            city: "Jeddah",
            address: "Al Batterjee St, Jeddah",
            addressAr: "شارع البترجي، جدة",
            phone: "+966-12-682-9000",
            languages: ["Arabic", "English", "German"],
            languages_ar: ["العربية", "الإنجليزية", "الألمانية"],
            emergency: true,
            lat: 21.538056,
            lng: 39.192778,
            website: "https://sghgroup.com/"
        },
        {
            id: "kfh-khobar",
            name: "King Fahd University Hospital",
            nameAr: "مستشفى الملك فهد الجامعي",
            city: "Khobar",
            address: "King Faisal Rd, Khobar",
            addressAr: "طريق الملك فيصل، الخبر",
            phone: "+966-13-896-6666",
            languages: ["Arabic", "English"],
            languages_ar: ["العربية", "الإنجليزية"],
            emergency: true,
            lat: 26.326667,
            lng: 50.196667,
            website: "https://www.iau.edu.sa/en"
        },
        {
            id: "neom-medical",
            name: "NEOM Medical Center",
            nameAr: "المركز الطبي نيوم",
            city: "NEOM",
            address: "NEOM Bay, Tabuk Province",
            addressAr: "خليج نيوم، منطقة تبوك",
            phone: "+966-14-XXX-XXXX",
            languages: ["Arabic", "English"],
            languages_ar: ["العربية", "الإنجليزية"],
            emergency: true,
            lat: 27.912222,
            lng: 35.266944,
            website: "https://www.neom.com/"
        }
    ],
    
    policeStations: [
        {
            id: "central-police-riyadh",
            name: "Riyadh Central Police Station",
            nameAr: "مركز شرطة الرياض المركزي",
            city: "Riyadh",
            address: "King Fahd Rd, Al Olaya, Riyadh",
            addressAr: "طريق الملك فهد، العليا، الرياض",
            phone: "+966-11-XXX-XXXX",
            services: ["General Police", "Tourist Police", "Traffic Police"],
            services_ar: ["الشرطة العامة", "شرطة السياحة", "شرطة المرور"],
            lat: 24.711667,
            lng: 46.724167
        },
        {
            id: "north-police-jeddah",
            name: "Jeddah North Police Station",
            nameAr: "مركز شرطة شمال جدة",
            city: "Jeddah",
            address: "Palestine St, Jeddah",
            addressAr: "شارع فلسطين، جدة",
            phone: "+966-12-XXX-XXXX",
            services: ["General Police", "Tourist Police"],
            services_ar: ["الشرطة العامة", "شرطة السياحة"],
            lat: 21.565556,
            lng: 39.175000
        },
        {
            id: "khobar-police",
            name: "Khobar Police Department",
            nameAr: "إدارة شرطة الخبر",
            city: "Khobar",
            address: "King Khalid St, Khobar",
            addressAr: "شارع الملك خالد، الخبر",
            phone: "+966-13-XXX-XXXX",
            services: ["General Police", "Traffic Police"],
            services_ar: ["الشرطة العامة", "شرطة المرور"],
            lat: 26.282778,
            lng: 50.210556
        },
        {
            id: "neom-security",
            name: "NEOM Security Center",
            nameAr: "مركز أمن نيوم",
            city: "NEOM",
            address: "NEOM Bay, Tabuk Province",
            addressAr: "خليج نيوم، منطقة تبوك",
            phone: "+966-14-XXX-XXXX",
            services: ["General Police", "Security Services"],
            services_ar: ["الشرطة العامة", "خدمات الأمن"],
            lat: 27.915000,
            lng: 35.243333
        }
    ],
    
    embassies: [
        {
            id: "usa-embassy",
            country: "United States",
            countryAr: "الولايات المتحدة الأمريكية",
            city: "Riyadh",
            address: "Abdullah Bin Huthafa Al-Sahmi St, Diplomatic Quarter, Riyadh",
            addressAr: "شارع عبدالله بن حذافة السهمي، الحي الدبلوماسي، الرياض",
            phone: "+966-11-488-3800",
            emergency: "+966-11-488-3800",
            email: "RiyadhACS@state.gov",
            website: "https://sa.usembassy.gov/",
            hours: "Sunday-Thursday, 8:00AM - 4:30PM",
            hoursAr: "الأحد-الخميس، 8:00ص - 4:30م",
            services: ["Consular Services", "Passport Services", "Visa Services"],
            servicesAr: ["الخدمات القنصلية", "خدمات جوازات السفر", "خدمات التأشيرات"],
            lat: 24.686389,
            lng: 46.609722,
            worldCupHotline: "+966-11-XXX-XXXX"
        },
        {
            id: "uk-embassy",
            country: "United Kingdom",
            countryAr: "المملكة المتحدة",
            city: "Riyadh",
            address: "Diplomatic Quarter, Riyadh",
            addressAr: "الحي الدبلوماسي، الرياض",
            phone: "+966-11-481-9100",
            emergency: "+966-11-481-9100",
            email: "ukinsaudi@fco.gov.uk",
            website: "https://www.gov.uk/world/saudi-arabia",
            hours: "Sunday-Thursday, 8:30AM - 3:30PM",
            hoursAr: "الأحد-الخميس، 8:30ص - 3:30م",
            services: ["Consular Services", "Passport Services", "Visa Services"],
            servicesAr: ["الخدمات القنصلية", "خدمات جوازات السفر", "خدمات التأشيرات"],
            lat: 24.684444,
            lng: 46.607778,
            worldCupHotline: "+966-11-XXX-XXXX"
        },
        {
            id: "germany-embassy",
            country: "Germany",
            countryAr: "ألمانيا",
            city: "Riyadh",
            address: "Diplomatic Quarter, Riyadh",
            addressAr: "الحي الدبلوماسي، الرياض",
            phone: "+966-11-488-0700",
            emergency: "+966-11-488-0700",
            email: "info@riad.diplo.de",
            website: "https://riyadh.diplo.de/",
            hours: "Sunday-Thursday, 8:00AM - 3:30PM",
            hoursAr: "الأحد-الخميس، 8:00ص - 3:30م",
            services: ["Consular Services", "Passport Services", "Visa Services"],
            servicesAr: ["الخدمات القنصلية", "خدمات جوازات السفر", "خدمات التأشيرات"],
            lat: 24.687222,
            lng: 46.609167,
            worldCupHotline: "+966-11-XXX-XXXX"
        },
        {
            id: "france-embassy",
            country: "France",
            countryAr: "فرنسا",
            city: "Riyadh",
            address: "Diplomatic Quarter, Riyadh",
            addressAr: "الحي الدبلوماسي، الرياض",
            phone: "+966-11-488-1255",
            emergency: "+966-11-488-1255",
            email: "contact@ambafrance-sa.org",
            website: "https://sa.ambafrance.org/",
            hours: "Sunday-Thursday, 8:30AM - 4:00PM",
            hoursAr: "الأحد-الخميس، 8:30ص - 4:00م",
            services: ["Consular Services", "Passport Services", "Visa Services"],
            servicesAr: ["الخدمات القنصلية", "خدمات جوازات السفر", "خدمات التأشيرات"],
            lat: 24.685833,
            lng: 46.611111,
            worldCupHotline: "+966-11-XXX-XXXX"
        },
        {
            id: "japan-embassy",
            country: "Japan",
            countryAr: "اليابان",
            city: "Riyadh",
            address: "Diplomatic Quarter, Riyadh",
            addressAr: "الحي الدبلوماسي، الرياض",
            phone: "+966-11-488-1100",
            emergency: "+966-11-488-1100",
            email: "ryad@mofa.go.jp",
            website: "https://www.sa.emb-japan.go.jp/",
            hours: "Sunday-Thursday, 8:30AM - 4:00PM",
            hoursAr: "الأحد-الخميس، 8:30ص - 4:00م",
            services: ["Consular Services", "Passport Services", "Visa Services"],
            servicesAr: ["الخدمات القنصلية", "خدمات جوازات السفر", "خدمات التأشيرات"],
            lat: 24.688889,
            lng: 46.608056,
            worldCupHotline: "+966-11-XXX-XXXX"
        }
    ],
    
    advisories: [
        {
            type: "cultural",
            title: "Cultural Respect",
            titleAr: "احترام الثقافة",
            description: "Respect local customs and traditions. Dress modestly in public, especially when visiting religious sites.",
            descriptionAr: "احترم العادات والتقاليد المحلية. ارتدِ ملابس محتشمة في الأماكن العامة، خاصة عند زيارة المواقع الدينية.",
            icon: "culture"
        },
        {
            type: "safety",
            title: "Personal Safety",
            titleAr: "السلامة الشخصية",
            description: "Keep personal belongings secure and be aware of your surroundings in crowded areas.",
            descriptionAr: "احتفظ بمتعلقاتك الشخصية بشكل آمن وكن على دراية بمحيطك في المناطق المزدحمة.",
            icon: "safety"
        },
        {
            type: "health",
            title: "Health Precautions",
            titleAr: "الاحتياطات الصحية",
            description: "Stay hydrated, protect yourself from the sun, and be prepared for hot weather, especially during summer months.",
            descriptionAr: "حافظ على ترطيب جسمك، واحمِ نفسك من الشمس، وكن مستعدًا للطقس الحار، خاصة خلال أشهر الصيف.",
            icon: "health"
        },
        {
            type: "transportation",
            title: "Transportation Safety",
            titleAr: "سلامة المواصلات",
            description: "Use official transportation services. For ride-hailing, use licensed apps like Uber or Careem.",
            descriptionAr: "استخدم خدمات النقل الرسمية. لطلب سيارات الأجرة، استخدم تطبيقات مرخصة مثل أوبر أو كريم.",
            icon: "transport"
        },
        {
            type: "emergency",
            title: "Emergency Preparation",
            titleAr: "الاستعداد للطوارئ",
            description: "Save emergency contacts and keep a copy of important documents. Know the location of your country's embassy.",
            descriptionAr: "احفظ أرقام الطوارئ واحتفظ بنسخة من المستندات المهمة. اعرف موقع سفارة بلدك.",
            icon: "emergency"
        }
    ],
    
    visa: {
        info: "Special World Cup visitor visas will be available for match ticket holders. This visa allows for multiple entries and stays of up to 60 days during the tournament period.",
        infoAr: "ستتوفر تأشيرات زيارة خاصة لكأس العالم لحاملي تذاكر المباريات. تسمح هذه التأشيرة بدخول متعدد وإقامة تصل إلى 60 يومًا خلال فترة البطولة.",
        requirements: [
            "Valid passport (at least 6 months validity beyond intended stay)",
            "Match ticket confirmation",
            "Return or onward travel ticket",
            "Proof of accommodation"
        ],
        requirementsAr: [
            "جواز سفر ساري المفعول (صلاحية لا تقل عن 6 أشهر بعد الإقامة المقصودة)",
            "تأكيد تذكرة المباراة",
            "تذكرة سفر للعودة أو السفر التالي",
            "إثبات الإقامة"
        ],
        application: "Applications can be submitted through the dedicated World Cup 2034 visa portal or through Saudi diplomatic missions abroad.",
        applicationAr: "يمكن تقديم الطلبات من خلال بوابة تأشيرات كأس العالم 2034 المخصصة أو من خلال البعثات الدبلوماسية السعودية في الخارج.",
        fees: "Visa fees are waived for match ticket holders during the tournament period.",
        feesAr: "يتم إعفاء حاملي تذاكر المباريات من رسوم التأشيرة خلال فترة البطولة."
    },
    
    customsRegulations: {
        prohibited: [
            "Alcoholic beverages",
            "Pork products",
            "Illegal drugs",
            "Pornographic materials",
            "Religious materials other than for personal use",
            "Weapons and ammunition without proper permits"
        ],
        prohibitedAr: [
            "المشروبات الكحولية",
            "منتجات لحم الخنزير",
            "المخدرات غير المشروعة",
            "المواد الإباحية",
            "المواد الدينية باستثناء المخصصة للاستخدام الشخصي",
            "الأسلحة والذخيرة بدون تصاريح مناسبة"
        ],
        restricted: [
            "Prescription medications (bring original prescription)",
            "Electronics and media devices (subject to content inspection)",
            "Currency over 60,000 SAR (must be declared)"
        ],
        restrictedAr: [
            "الأدوية الموصوفة (أحضر الوصفة الطبية الأصلية)",
            "الأجهزة الإلكترونية وأجهزة الوسائط (تخضع لفحص المحتوى)",
            "العملة التي تزيد عن 60,000 ريال سعودي (يجب التصريح عنها)"
        ],
        customs: "All visitors are subject to customs inspection upon arrival. Special World Cup entry points will be established at airports for expedited processing.",
        customsAr: "يخضع جميع الزوار للتفتيش الجمركي عند الوصول. سيتم إنشاء نقاط دخول خاصة لكأس العالم في المطارات للمعالجة السريعة."
    }
};