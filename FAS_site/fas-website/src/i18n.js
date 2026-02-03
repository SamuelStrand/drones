import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      seo: {
        home: {
          title: "Home",
          description:
            "Forpost Aero Service — aviation and UAV solutions for Kazakhstan. Drones, maintenance, pilot training, and consulting in Almaty.",
        },
        drones: {
          title: "Drones",
          description:
            "Enterprise drones and UAVs: multirotor and eVTOL platforms. Autel EVO, Dragonfish. Precision engineering for Kazakhstan.",
        },
        drones_category: {
          title: "Drones",
          description:
            "Enterprise UAVs: multirotor and eVTOL. Autel EVO, Dragonfish. Forpost Aero Service, Kazakhstan.",
        },
        service: {
          title: "Service",
          description:
            "UAV maintenance, repair, pilot training, and consulting. Official Forpost certification in Almaty, Kazakhstan.",
        },
        contact: {
          title: "Contact",
          description:
            "Contact Forpost Aero Service in Almaty. Address, phone, email. UAV and aviation solutions in Kazakhstan.",
        },
        education: {
          title: "Education",
          description: "Professional UAV operator training in Kazakhstan. Group and individual Category 1 certification."
        }
      },
      
      nav: {
        drones: "Drones",
        solutions: "Solutions",
        service: "Services",
        education: "Education",
        contact: "Contact",
        get_started: "Get Started",
      },
      hero: {
        title: "REDEFINING",
        subtitle: "FLIGHT",
        desc: "Aviation and UAV solutions engineered for Kazakhstan's most demanding environments.",
        btn_explore: "Explore Drones",
        btn_video: "Watch Video",
      },
      products: {
        title: "Featured",
        subtitle: "Drones",
        learn_more: "Learn More",
        evo_max: { name: "EVO Max 4T", tagline: "Intelligence Without Limits" },
        dragonfish: { name: "Dragonfish Series", tagline: "Subverting the Traditional UAV" },
        evo_ii: { name: "EVO II RTK Series", tagline: "High-Precision Mapping" },
      },
      footer: {
        desc: "Leading the future of UAV technology and aviation services in Kazakhstan.",
        col_products: "Products",
        col_support: "Support",
        col_partners: "Our Partners",
        col_follow: "Follow Us",
        support: { download: "Download Center", repair: "Repair Service", contact: "Contact Us" },
        legal: { rights: "All rights reserved.", privacy: "Privacy Policy", terms: "Terms of Use" },
      },
      drones_page: {
        desc: "Precision engineering for Kazakhstan's industrial landscape.",
        view: "View",
        cat_evtol: { name: "eVTOL", specs: "Efficiency and Multitasking" },
        cat_multirotor: { name: "Multi-rotor", specs: "Lightweight and Portable" },
      },
      drones_category: {
        back: "Back",
        learn_more: "Details",
        not_found: {
          title: "Category not found",
          desc: "Please choose a category from the drones page.",
        },
        modal: {
          title: "Coming soon",
          desc: "Drone details page will be implemented on the frontend later.",
          note: "For now this is a placeholder. Next step: make a real details page and route.",
          close: "Close",
        },
      },
      drones_detail: {
        highlights: "Highlights",
        specs: "Technical specifications",
        source_at_autel: "Full specs at Autel",
        contact_us: "Contact us",
        back_to_category: "Back to category",
        other_in_category: "Other in this category",
      },
      drones_catalog: {
        categories: {
          multirotor: {
            title: "Multi-rotor",
            desc: "Enterprise multirotor platforms for inspection, mapping and missions.",
          },
          evtol: {
            title: "eVTOL",
            desc: "VTOL fixed-wing platforms for long-range missions.",
          },
        },
        items: {
          evo_lite_enterprise: {
            name: "EVO Lite Enterprise Series",
            short_label: "EVO Lite Enterprise",
            tagline: "Lightweight Yet Mighty",
            description:
              "The EVO Lite Enterprise Series offers a lightweight and portable design, rapid deployment, and simple control for industrial applications. AI target recognition, three-way binocular vision obstacle avoidance. EVO Lite 640T Enterprise features dual gimbal (visible-light + thermal); EVO Lite 6K Enterprise has a 1-inch CMOS 6K camera.",
            specs: {
              item_0: { label: "Weight", value: "866 g" },
              item_1: { label: "Max flight time", value: "40 min" },
              item_2: { label: "Image transmission", value: "12 km" },
              item_3: { label: "Folded dimensions", value: "210×123×95 mm" },
              item_4: { label: "Max service ceiling", value: "3000 m" },
              item_5: { label: "Obstacle avoidance", value: "Three-way binocular vision" },
              item_6: { label: "EVO Lite 640T thermal", value: "640×512, 16x digital zoom" },
              item_7: { label: "EVO Lite 6K camera", value: "1-inch CMOS, 20 MP, 6K video" },
            },
            highlights: {
              item_0: "Lightweight and portable (866 g)",
              item_1: "AI target recognition and positioning",
              item_2: "40-minute flight endurance",
              item_3: "12 km video transmission",
              item_4: "EVO Lite 640T: dual gimbal visible + thermal",
              item_5: "EVO Lite 6K: 1-inch 6K camera",
            },
          },
          evo_max_4t: {
            name: "EVO Max 4T",
            short_label: "EVO Max 4T",
            tagline: "Reach New Frontiers",
            description:
              "The EVO Max 4T brings powerful technologies and advanced autonomy. Real-time 3D flight paths for obstacle avoidance, vision + millimeter-wave radar (no blind spots). 8K 10x optical zoom, thermal 640×512, laser rangefinder. SkyLink 3.0, 15 km transmission. IP43 optional.",
            specs: {
              item_0: { label: "Weight (4T)", value: "1645 g (Fusion 4T)" },
              item_1: { label: "Max flight time", value: "42 min" },
              item_2: { label: "Transmission", value: "15 km (FCC)" },
              item_3: { label: "Zoom camera", value: "48 MP, 10x optical, 160x hybrid zoom" },
              item_4: { label: "Thermal", value: "640×512, 16x digital zoom" },
              item_5: { label: "Laser rangefinder", value: "5–1200 m" },
              item_6: { label: "Obstacle avoidance", value: "Vision + 60G/24G radar" },
              item_7: { label: "Wind resistance", value: "12 m/s (cruise)" },
            },
            highlights: {
              item_0: "No blind spots: vision + millimeter-wave radar",
              item_1: "8K 10x optical zoom, 160x hybrid",
              item_2: "Autonomous path finding (Autel Autonomy Engine)",
              item_3: "GNSS-denied navigation",
              item_4: "42 min flight, 15 km transmission",
              item_5: "Hot-swappable battery",
            },
          }, // ✅ FIX: закрыли evo_max_4t
          evo_max_4n: {
            name: "EVO Max 4N",
            short_label: "EVO Max 4N",
            tagline: "See the Unseen",
            description:
              "The EVO Max 4N combines best-in-class starlight night vision with the Max series platform. Starlight Vision Camera (2.3 MP, LUX 0.0001, ISO 440000) is not limited by temperature difference—unlike thermal—enabling observation through glass and long-range detection of light sources (5+ km).",
            specs: {
              item_0: { label: "Weight", value: "1665 g (Fusion 4N)" },
              item_1: { label: "Max flight time", value: "42 min" },
              item_2: { label: "Transmission", value: "15 km (FCC)" },
              item_3: { label: "Starlight camera", value: "2.3 MP, ISO 440000" },
              item_4: { label: "Wide-angle", value: '50 MP, 1" CMOS' },
              item_5: { label: "Thermal", value: "640×512" },
              item_6: { label: "Laser rangefinder", value: "5–1200 m" },
              item_7: { label: "A-Mesh", value: "Dual-controller, relay operations" },
            },
            highlights: {
              item_0: "Starlight Vision Camera for night ops",
              item_1: "Observation through glass (unlike thermal)",
              item_2: "5 km+ detection of light sources",
              item_3: "42 min flight, 15 km transmission",
              item_4: "A-Mesh networking (zonal, relay)",
              item_5: "No blind spots: vision + radar",
            },
          },
          autel_alpha: {
            name: "Autel Alpha",
            short_label: "Autel Alpha",
            tagline: "Beyond The Frontiers",
            description:
              "Intelligent industrial drone with autonomous flight, anti-interference, obstacle avoidance, and video transmission upgrades. Foldable, IP55. Built-in RTK dual-antenna for millimeter-level precision. DG-L35T gimbal: 4K 35x optical zoom (560x hybrid), dual thermal (13 mm + 45 mm), wide-angle, laser rangefinder (10–2000 m).",
            specs: {
              item_0: { label: "Weight (with gimbal)", value: "6480 g" },
              item_1: { label: "Max takeoff mass", value: "8400 g" },
              item_2: { label: "Max flight time", value: "40 min" },
              item_3: { label: "Transmission", value: "15 km (FCC)" },
              item_4: { label: "Zoom", value: "4K 35x optical, 560x hybrid" },
              item_5: { label: "Dual thermal", value: "640×512, 13 mm + 45 mm" },
              item_6: { label: "IP rating", value: "IP55" },
              item_7: { label: "Laser rangefinder", value: "10–2000 m" },
            },
            highlights: {
              item_0: "IP55, foldable industrial platform",
              item_1: "RTK dual-antenna, millimeter precision",
              item_2: "4K 35x optical, 560x hybrid zoom",
              item_3: "Dual thermal (wide + tele)",
              item_4: "Wire-level obstacle avoidance",
              item_5: "40 min, 15 km transmission",
            },
          },
          evo_ii_enterprise_v3: {
            name: "EVO II Enterprise V3",
            short_label: "EVO II Enterprise V3",
            tagline: "Compact. Versatile. Powerful.",
            description:
              "EVO II Enterprise V3: improved imaging, 9.3 miles (15 km) transmission, modular accessories. Pro variant: 6K 1-inch CMOS, Moonlight Algorithm 2.0. Dual 640T: 640×512 thermal + 50 MP RYYB. 360° obstacle avoidance, SkyLink 2.0, 42 min flight.",
            specs: {
              item_0: { label: "Weight (Pro)", value: "1110 g" },
              item_1: { label: "Weight (Dual 640T)", value: "1136.5 g" },
              item_2: { label: "Max flight time", value: "42 min" },
              item_3: { label: "Transmission", value: "15 km (FCC)" },
              item_4: { label: "Pro camera", value: '1" 20 MP, 6K, f/2.8–f/11' },
              item_5: { label: "Dual 640T thermal", value: "640×512, 16x zoom" },
              item_6: { label: "Obstacle avoidance", value: "360°, 19 sensor groups" },
              item_7: { label: "Accessories", value: "Spotlight, loudspeaker, strobe, RTK" },
            },
            highlights: {
              item_0: "Compact, 42 min flight time",
              item_1: 'EVO II Pro: 6K 1" CMOS, Moonlight 2.0',
              item_2: "EVO II Dual 640T: thermal + 50 MP",
              item_3: "9+ miles SkyLink 2.0 transmission",
              item_4: "360° obstacle avoidance",
              item_5: "Modular: spotlight, loudspeaker, RTK",
            },
          },
          evo_ii_dual_640t_v3: {
            name: "EVO II Dual 640T V3",
            short_label: "EVO II Dual 640T V3",
            tagline: "Power. Efficiency. Reliability.",
            description:
              "EVO II Dual 640T V3: 640×512 thermal (25 Hz), new image processing. 50 MP ultra-sensitive RYYB, Moonlight 2.0. 4x lossless + 16x digital zoom. 4K HDR, SkyLink 2.0, 38 min flight. No fly zones / no forced updates.",
            specs: {
              item_0: { label: "Weight", value: "1209 g" },
              item_1: { label: "Max flight time", value: "38 min" },
              item_2: { label: "Transmission", value: "15 km (FCC)" },
              item_3: { label: "Thermal", value: "640×512 @ 25 fps" },
              item_4: { label: "Visual", value: "50 MP RYYB, 4x lossless zoom" },
              item_5: { label: "Wind resistance", value: "12 m/s" },
              item_6: { label: "Max speed", value: "20 m/s" },
              item_7: { label: "Deploy", value: "45 s case to air" },
            },
            highlights: {
              item_0: "640×512 thermal, new algorithm",
              item_1: "50 MP RYYB, Moonlight 2.0",
              item_2: "4x lossless + 16x digital zoom",
              item_3: "38 min, 15 km transmission",
              item_4: "No fly zones; no forced updates",
              item_5: "Non-ITAR",
            },
          },
          evo_ii_rtk_v3: {
            name: "EVO II RTK Series V3",
            short_label: "EVO II RTK V3",
            tagline: "Unrivaled Accuracy And Control",
            description:
              "EVO II RTK Series V3: centimeter-level positioning (RTK module), NTRIP support, no GCP required. Pro RTK: 6K 1\" CMOS. Dual 640T RTK: thermal + 50 MP. Photo replication, multi-NTRIP profiles, 38 min flight.",
            specs: {
              item_0: { label: "RTK horizontal accuracy", value: "1 cm + 1 ppm" },
              item_1: { label: "RTK vertical accuracy", value: "1.5 cm + 1 ppm" },
              item_2: { label: "Max flight time", value: "38 min" },
              item_3: { label: "Transmission", value: "15 km (FCC)" },
              item_4: { label: "Pro RTK camera", value: '1" 20 MP, 6K' },
              item_5: { label: "Dual 640T RTK thermal", value: "640×512" },
              item_6: { label: "NTRIP", value: "Supported, no GCP required" },
              item_7: { label: "Photo replication", value: "Supported" },
            },
            highlights: {
              item_0: "Centimeter-level RTK positioning",
              item_1: "No GCP required (NTRIP)",
              item_2: "3rd party base station support",
              item_3: "Pro RTK & Dual 640T RTK variants",
              item_4: "38 min, 15 km transmission",
              item_5: "Mapping & inspection ready",
            },
          },
          evo_ii_pro_v3: {
            name: "EVO II Pro V3",
            short_label: "EVO II Pro V3",
            tagline: "Leader In Picture Quality And Flight Intelligence",
            description:
              "EVO II Pro V3: Sony 20 MP 1-inch CMOS, 6K video, f/2.8–f/11, ISO up to 44000. Moonlight Algorithm 2.0 for low light. 4K HDR, 12-bit DNG, hyper-lapse 6K. SkyLink 2.0, 37–39 min flight, 360° obstacle avoidance.",
            specs: {
              item_0: { label: "Weight", value: "1191 g" },
              item_1: { label: "Max flight time", value: "39 min (no RTK)" },
              item_2: { label: "Transmission", value: "10 km (FCC)" },
              item_3: { label: "Camera", value: '1" 20 MP CMOS, 6K/30' },
              item_4: { label: "Aperture", value: "f/2.8–f/11" },
              item_5: { label: "Zoom", value: "3x lossless, 16x digital" },
              item_6: { label: "Photo", value: "12-bit DNG, 68.6B colors" },
              item_7: { label: "Controller", value: "Smart Controller SE optional" },
            },
            highlights: {
              item_0: "1-inch 20 MP, 6K video",
              item_1: "Moonlight Algorithm 2.0",
              item_2: "4K HDR, 12-bit DNG",
              item_3: "37–39 min flight time",
              item_4: "SkyLink 2.0, 9+ miles",
              item_5: "360° obstacle avoidance",
            },
          },
          dragonfish_25: {
            name: "Dragonfish-25",
            short_label: "Dragonfish-25",
            tagline: "Next-Gen Multi Mission eVTOL",
            description:
              "Dragonfish-25: tilt-rotor eVTOL, 10 kg max payload, 220 km max distance, up to 210 min flight with payload. Tool-free assembly ~10 min, 10 s self-check. Payloads: DG-T5, DG-T5L (zoom, wide, dual thermal, laser). IP45, 12 m/s wind resistance.",
            specs: {
              item_0: { label: "Weight (no gimbal)", value: "29 kg" },
              item_1: { label: "Max takeoff weight", value: "39 kg" },
              item_2: { label: "Max payload", value: "10 kg" },
              item_3: { label: "Max flight time (loaded)", value: "210 min" },
              item_4: { label: "Max flight distance", value: "220 km" },
              item_5: { label: "Max speed", value: "126 km/h" },
              item_6: { label: "Assembly", value: "~10 min tool-free" },
              item_7: { label: "Payloads", value: "DG-T5, DG-T5L" },
            },
            highlights: {
              item_0: "10 kg payload, 210 min with payload",
              item_1: "220 km max distance",
              item_2: "10 min tool-free assembly",
              item_3: "DG-T5/DG-T5L: zoom, thermal, laser",
              item_4: "IP45, 12 m/s wind resistance",
              item_5: "4000 m max takeoff altitude",
            },
          },
          dragonfish_pro: {
            name: "Dragonfish Pro",
            short_label: "Dragonfish Pro",
            tagline: "Next-Gen Multi Mission eVTOL",
            description:
              "Dragonfish Pro: eVTOL tilt-rotor, 5 min case to takeoff, 179 min flight, 45 km transmission (extendable with repeaters). DG-L20T, DG-L50T payloads. 1–2 person portable, silent flight (barely audible above 120 m AGL). Optional Nest, ASAT, Repeater.",
            specs: {
              item_0: { label: "Weight (no gimbal)", value: "14.5 kg" },
              item_1: { label: "Max takeoff weight", value: "19 kg" },
              item_2: { label: "Max payload", value: "2.2 kg" },
              item_3: { label: "Max flight time", value: "179 min" },
              item_4: { label: "Transmission", value: "45 km (with ASAT)" },
              item_5: { label: "Assembly", value: "5 min, 5 s self-check" },
              item_6: { label: "Payloads", value: "DG-L20T, DG-L50T" },
              item_7: { label: "Wingspan", value: "3.29 m" },
            },
            highlights: {
              item_0: "179 min flight time",
              item_1: "45 km transmission (ASAT)",
              item_2: "5 min case to takeoff",
              item_3: "1–2 person portable",
              item_4: "Silent above 120 m AGL",
              item_5: "Optional Nest, Repeater",
            },
          },
          dragonfish_standard: {
            name: "Dragonfish Standard",
            short_label: "Dragonfish Standard",
            tagline: "Next-Gen Multi Mission eVTOL",
            description:
              "Dragonfish Standard: compact eVTOL, 7.5 kg (with batteries), 1.5 kg payload, 126 min flight. DG-L20T payload (wide, zoom, thermal 640×512, laser 10–1200 m). 5 min assembly, runway independent.",
            specs: {
              item_0: { label: "Weight (with batteries)", value: "7.5 kg" },
              item_1: { label: "Max takeoff weight", value: "9 kg" },
              item_2: { label: "Max payload", value: "1.5 kg" },
              item_3: { label: "Max flight time", value: "126 min" },
              item_4: { label: "Wingspan", value: "2.49 m" },
              item_5: { label: "Payload", value: "DG-L20T" },
              item_6: { label: "Assembly", value: "5 min" },
              item_7: { label: "Max speed", value: "30 m/s" },
            },
            highlights: {
              item_0: "7.5 kg, 1–2 person portable",
              item_1: "126 min flight time",
              item_2: "DG-L20T: zoom, thermal, laser",
              item_3: "5 min case to takeoff",
              item_4: "Runway independent",
              item_5: "RTK centimeter-level (optional)",
            },
          },
        },
      },

      service: {
        title_main: "Professional",
        title_sub: "Service",
        maint_title: "Maintenance & Repair",
        maint_desc: "Official Forpost certification for UAV structural and electronic repairs in Almaty.",
        pilot_title: "Pilot Training",
        pilot_desc: "Comprehensive courses for enterprise drone operation and legal flight authorization.",
        consult_title: "UAV Consulting",
        consult_desc: "Strategic planning for implementing drone technology into your existing industrial workflow.",
        btn_contact: "Contact us",
      },
      education: {
        title: "Training of UAV Operators (Category 1)",
        description: "Category 1 — this is the initial level of training for unmanned aerial vehicle operators, designed for the legal and safe operation of UAVs weighing up to 25 kg within established rules.",
        group: {
          title: "Group training up to 20 people",
          price: "Cost: 45,000 ₸ per person",
          items: [
            "Theoretical preparation for Category 1 UAV operators",
            "Basics of RK air law and rules for using airspace",
            "Structure of airspace and flight execution procedures",
            "Flight planning and UAV preparation",
            "Basics of aviation meteorology",
            "Aviation security and flight safety",
            "Final testing and certification issuance"
          ]
        },
        individual: {
          title: "Individual training personally",
          price: "Cost: 250,000 ₸",
          items: [
            "Individual training schedule",
            "Full course of theoretical preparation for Category 1",
            "Detailed analysis of the regulatory base and practical cases",
            "In-depth study of flight planning and UAV operation",
            "Personal instructor support",
            "Final testing",
            "Certificate of completion"
          ]
        }
      },
      contact: {
        title: "Contact",
        us: "Us",
        hq: "Address",
        addr: "Almaty, Kazakhstan, 28 Ryskulbekova Street",
        email: "Email",
        phone: "Phone number",
        form_title: "Your Information",
        form_name: "Full Name",
        form_email: "Email Address",
        form_msg: "Message",
        form_btn: "Send Inquiry",
      },
    },
  },

  ru: {
    translation: {
      seo: {
        home: {
          title: "Главная",
          description:
            "Forpost Aero Service — авиационные и БПЛА решения для Казахстана. Дроны, сервис, обучение пилотов, консалтинг в Алматы.",
        },
        drones: {
          title: "Дроны",
          description:
            "Промышленные дроны и БПЛА: мультироторные и eVTOL. Autel EVO, Dragonfish. Для Казахстана.",
        },
        drones_category: {
          title: "Дроны",
          description: "Промышленные БПЛА: мультироторные и eVTOL. Forpost Aero Service, Казахстан.",
        },
        service: {
          title: "Сервис",
          description:
            "Техобслуживание и ремонт БПЛА, обучение пилотов, консалтинг. Официальная сертификация Forpost в Алматы.",
        },
        contact: {
          title: "Контакты",
          description:
            "Связаться с Forpost Aero Service в Алматы. Адрес, телефон, email. БПЛА и авиационные решения в Казахстане.",
        },
        education: {
          title: "Обучение",
          description: "Профессиональное обучение операторов БПЛА в Казахстане. Сертификация Категории 1."
        }
      },
      nav: { 
        drones: "Продукты", 
        solutions: "Решения", 
        service: "Услуги", 
        education: "Обучение", // Added
        contact: "Контакты", 
        get_started: "Начать" 
      },   

      hero: {
        title: "НОВОЕ ОПРЕДЕЛЕНИЕ",
        subtitle: "ПОЛЕТА",
        desc: "Авиационные и БПЛА решения для самых сложных условий Казахстана.",
        btn_explore: "Обзор дронов",
        btn_video: "Смотреть видео",
      },
      products: {
        title: "Рекомендуемые",
        subtitle: "Дроны",
        learn_more: "Подробнее",
        evo_max: { name: "EVO Max 4T", tagline: "Интеллект без границ" },
        dragonfish: { name: "Серия Dragonfish", tagline: "Меняя представление о традиционных БПЛА" },
        evo_ii: { name: "Серия EVO II RTK", tagline: "Высокоточное картографирование" },
      },
      footer: {
        desc: "Лидерство в будущем технологий БПЛА и авиационных услуг в Казахстане.",
        col_products: "Продукты",
        col_support: "Поддержка",
        col_partners: "Наши партнеры",
        col_follow: "Мы в соцсетях",
        support: { download: "Центр загрузок", repair: "Ремонтный сервис", contact: "Наши контакты" },
        legal: { rights: "Все права защищены.", privacy: "Политика конфиденциальности", terms: "Условия использования" },
      },
      drones_page: {
        desc: "Точечная инженерия для индустриального ландшафта Казахстана.",
        view: "Обзор",
        cat_evtol: { name: "eVTOL", specs: "Эффективность и мультизадачность" },
        cat_multirotor: { name: "Мультироторные", specs: "Легкость и портативность" },
      },
      drones_category: {
        back: "Назад",
        learn_more: "Подробнее",
        not_found: {
          title: "Категория не найдена",
          desc: "Выбери категорию на странице дронов.",
        },
        modal: {
          title: "Скоро будет",
          desc: "Детальная страница дрона будет сделана позже на фронте.",
          note: "Пока это заглушка. Следующий шаг: сделать реальную страницу и роут.",
          close: "Закрыть",
        },
      },
      drones_detail: {
        highlights: "Ключевые особенности",
        specs: "Технические характеристики",
        source_at_autel: "Полные характеристики на Autel",
        contact_us: "Связаться с нами",
        back_to_category: "Назад в категорию",
        other_in_category: "Другие в этой категории",
      },
      drones_catalog: {
        categories: {
          multirotor: { title: "Мультироторные", desc: "Промышленные платформы для инспекций, картографии и миссий." },
          evtol: { title: "eVTOL", desc: "VTOL платформы для дальних миссий." },
        },
        items: {
          evo_lite_enterprise: {
            name: "EVO Lite Enterprise Series",
            short_label: "EVO Lite Enterprise",
            tagline: "Легкий, но мощный",
            description:
              "Серия EVO Lite Enterprise предлагает легкий и портативный дизайн, быстрое развертывание и простое управление для промышленных применений. Распознавание целей с помощью ИИ, трехстороннее бинокулярное предотвращение препятствий. EVO Lite 640T Enterprise оснащен двойным подвесом (видимый свет + тепловизор); EVO Lite 6K Enterprise имеет 1-дюймовую CMOS-камеру 6K.",
            specs: {
              item_0: { label: "Вес", value: "866 г" },
              item_1: { label: "Макс. время полета", value: "40 мин" },
              item_2: { label: "Передача изображения", value: "12 км" },
              item_3: { label: "Размеры в сложенном виде", value: "210×123×95 мм" },
              item_4: { label: "Макс. высота над уровнем моря", value: "3000 м" },
              item_5: { label: "Предотвращение препятствий", value: "Трехстороннее бинокулярное зрение" },
              item_6: { label: "Тепловизор EVO Lite 640T", value: "640×512, 16-кратный цифровой зум" },
              item_7: { label: "Камера EVO Lite 6K", value: "1-дюймовый CMOS, 20 МП, видео 6K" },
            },
            highlights: {
              item_0: "Легкий и портативный (866 г)",
              item_1: "Распознавание и позиционирование целей с помощью ИИ",
              item_2: "Время полета 40 минут",
              item_3: "Передача видео на 12 км",
              item_4: "EVO Lite 640T: двойной подвес видимый + тепловизор",
              item_5: "EVO Lite 6K: 1-дюймовая камера 6K",
            },
          }, // ✅ FIX: закрыли evo_lite_enterprise
          evo_max_4t: {
            name: "EVO Max 4T",
            short_label: "EVO Max 4T",
            tagline: "Достигайте новых горизонтов",
            description:
              "EVO Max 4T предлагает мощные технологии и расширенную автономность. 3D-траектории полета в реальном времени для предотвращения препятствий, зрение + миллиметровый радар (без слепых зон). 8K 10-кратный оптический зум, тепловизор 640×512, лазерный дальномер. SkyLink 3.0, передача на 15 км. Опционально IP43.",
            specs: {
              item_0: { label: "Вес (4T)", value: "1645 г (Fusion 4T)" },
              item_1: { label: "Макс. время полета", value: "42 мин" },
              item_2: { label: "Передача", value: "15 км (FCC)" },
              item_3: {
                label: "Зум-камера",
                value: "48 МП, 10-кратный оптический, 160-кратный гибридный зум",
              },
              item_4: { label: "Тепловизор", value: "640×512, 16-кратный цифровой зум" },
              item_5: { label: "Лазерный дальномер", value: "5–1200 м" },
              item_6: { label: "Предотвращение препятствий", value: "Зрение + радар 60G/24G" },
              item_7: { label: "Сопротивление ветру", value: "12 м/с (крейсерское)" },
            },
            highlights: {
              item_0: "Без слепых зон: зрение + миллиметровый радар",
              item_1: "8K 10-кратный оптический зум, 160-кратный гибридный",
              item_2: "Автономное планирование маршрута (Autel Autonomy Engine)",
              item_3: "Навигация в условиях отсутствия GNSS",
              item_4: "42 мин полета, 15 км передачи",
              item_5: "Горячая замена батареи",
            },
          }, // ✅ FIX: закрыли evo_max_4t
          evo_max_4n: {
            name: "EVO Max 4N",
            short_label: "EVO Max 4N",
            tagline: "Видьте невидимое",
            description:
              "EVO Max 4N сочетает в себе лучший в своем классе ночной звездный свет с платформой серии Max. Камера Starlight Vision (2,3 МП, LUX 0,0001, ISO 440000) не ограничена разницей температур — в отличие от тепловизора — что позволяет наблюдать сквозь стекло и обнаруживать источники света на больших расстояниях (5+ км).",
            specs: {
              item_0: { label: "Вес", value: "1665 г (Fusion 4N)" },
              item_1: { label: "Макс. время полета", value: "42 мин" },
              item_2: { label: "Передача", value: "15 км (FCC)" },
              item_3: { label: "Камера Starlight", value: "2,3 МП, ISO 440000" },
              item_4: { label: "Широкоугольная", value: '50 МП, 1" CMOS' },
              item_5: { label: "Тепловизор", value: "640×512" },
              item_6: { label: "Лазерный дальномер", value: "5–1200 м" },
              item_7: { label: "A-Mesh", value: "Двухконтроллерное, релейные операции" },
            },
            highlights: {
              item_0: "Камера Starlight Vision для ночных операций",
              item_1: "Наблюдение сквозь стекло (в отличие от тепловизора)",
              item_2: "Обнаружение источников света на расстоянии 5+ км",
              item_3: "42 мин полета, 15 км передачи",
              item_4: "Сеть A-Mesh (зональные, релейные)",
              item_5: "Без слепых зон: зрение + радар",
            },
          }, // ✅ FIX: закрыли evo_max_4n
          autel_alpha: {
            name: "Autel Alpha",
            short_label: "Autel Alpha",
            tagline: "За гранью границ",
            description:
              "Интеллектуальный промышленный дрон с автономным полетом, помехоустойчивостью, предотвращением препятствий и улучшенной передачей видео. Складной, IP55. Встроенная двухдиапазонная RTK-антенна для миллиметровой точности. Подвес DG-L35T: 4K 35-кратный оптический зум (560-кратный гибридный), двойной тепловизор (13 мм + 45 мм), широкоугольная камера, лазерный дальномер (10–2000 м).",
            specs: {
              item_0: { label: "Вес (с подвесом)", value: "6480 г" },
              item_1: { label: "Макс. взлетная масса", value: "8400 г" },
              item_2: { label: "Макс. время полета", value: "40 мин" },
              item_3: { label: "Передача", value: "15 км (FCC)" },
              item_4: { label: "Зум", value: "4K 35-кратный оптический, 560-кратный гибридный" },
              item_5: { label: "Двойной тепловизор", value: "640×512, 13 мм + 45 мм" },
              item_6: { label: "Рейтинг IP", value: "IP55" },
              item_7: { label: "Лазерный дальномер", value: "10–2000 м" },
            },
            highlights: {
              item_0: "IP55, складная промышленная платформа",
              item_1: "Двухдиапазонная RTK-антенна, миллиметровая точность",
              item_2: "4K 35-кратный оптический, 560-кратный гибридный зум",
              item_3: "Двойной тепловизор (широкоугольный + телеобъектив)",
              item_4: "Предотвращение препятствий на уровне проводов",
              item_5: "40 мин, 15 км передачи",
            },
          }, // ✅ FIX: закрыли autel_alpha
          evo_ii_enterprise_v3: {
            name: "EVO II Enterprise V3",
            short_label: "EVO II Enterprise V3",
            tagline: "Компактный. Универсальный. Мощный.",
            description:
              "EVO II Enterprise V3: улучшенное изображение, передача на 9,3 мили (15 км), модульные аксессуары. Вариант Pro: 6K 1-дюймовый CMOS, алгоритм Moonlight 2.0. Dual 640T: тепловизор 640×512 + 50 МП RYYB. 360° предотвращение препятствий, SkyLink 2.0, 42 мин полета.",
            specs: {
              item_0: { label: "Вес (Pro)", value: "1110 г" },
              item_1: { label: "Вес (Dual 640T)", value: "1136,5 г" },
              item_2: { label: "Макс. время полета", value: "42 мин" },
              item_3: { label: "Передача", value: "15 км (FCC)" },
              item_4: { label: "Камера Pro", value: '1" 20 МП, 6K, f/2.8–f/11' },
              item_5: { label: "Тепловизор Dual 640T", value: "640×512, 16-кратный зум" },
              item_6: { label: "Предотвращение препятствий", value: "360°, 19 групп датчиков" },
              item_7: { label: "Аксессуары", value: "Прожектор, громкоговоритель, стробоскоп, RTK" },
            },
            highlights: {
              item_0: "Компактный, время полета 42 мин",
              item_1: 'EVO II Pro: 6K 1" CMOS, Moonlight 2.0',
              item_2: "EVO II Dual 640T: тепловизор + 50 МП",
              item_3: "Передача SkyLink 2.0 на 9+ миль",
              item_4: "360° предотвращение препятствий",
              item_5: "Модульный: прожектор, громкоговоритель, RTK",
            },
          },
          evo_ii_dual_640t_v3: {
            name: "EVO II Dual 640T V3",
            short_label: "EVO II Dual 640T V3",
            tagline: "Мощность. Эффективность. Надежность.",
            description:
              "EVO II Dual 640T V3: тепловизор 640×512 (25 Гц), новый алгоритм обработки изображений. 50 МП сверхчувствительный RYYB, Moonlight 2.0. 4-кратный без потерь + 16-кратный цифровой зум. 4K HDR, SkyLink 2.0, 38 мин полета. Нет бесполетных зон / нет принудительных обновлений.",
            specs: {
              item_0: { label: "Вес", value: "1209 г" },
              item_1: { label: "Макс. время полета", value: "38 мин" },
              item_2: { label: "Передача", value: "15 км (FCC)" },
              item_3: { label: "Тепловизор", value: "640×512 при 25 кадрах/с" },
              item_4: { label: "Визуальная", value: "50 МП RYYB, 4-кратный зум без потерь" },
              item_5: { label: "Сопротивление ветру", value: "12 м/с" },
              item_6: { label: "Макс. скорость", value: "20 м/с" },
              item_7: { label: "Развертывание", value: "45 с от кейса до воздуха" },
            },
            highlights: {
              item_0: "Тепловизор 640×512, новый алгоритм",
              item_1: "50 МП RYYB, Moonlight 2.0",
              item_2: "4-кратный без потерь + 16-кратный цифровой зум",
              item_3: "38 мин, 15 км передачи",
              item_4: "Нет бесполетных зон; нет принудительных обновлений",
              item_5: "Не подпадает под ITAR",
            },
          },
          evo_ii_rtk_v3: {
            name: "EVO II RTK Series V3",
            short_label: "EVO II RTK V3",
            tagline: "Непревзойденная точность и контроль",
            description:
              "EVO II RTK Series V3: сантиметровая точность позиционирования (модуль RTK), поддержка NTRIP, не требуется GCP. Pro RTK: 6K 1\" CMOS. Dual 640T RTK: тепловизор + 50 МП. Репликация фотографий, профили Multi-NTRIP, 38 мин полета.",
            specs: {
              item_0: { label: "Горизонтальная точность RTK", value: "1 см + 1 ppm" },
              item_1: { label: "Вертикальная точность RTK", value: "1,5 см + 1 ppm" },
              item_2: { label: "Макс. время полета", value: "38 мин" },
              item_3: { label: "Передача", value: "15 км (FCC)" },
              item_4: { label: "Камера Pro RTK", value: '1" 20 МП, 6K' },
              item_5: { label: "Тепловизор Dual 640T RTK", value: "640×512" },
              item_6: { label: "NTRIP", value: "Поддерживается, GCP не требуется" },
              item_7: { label: "Репликация фотографий", value: "Поддерживается" },
            },
            highlights: {
              item_0: "Сантиметровая точность позиционирования RTK",
              item_1: "Не требуется GCP (NTRIP)",
              item_2: "Поддержка сторонних базовых станций",
              item_3: "Варианты Pro RTK и Dual 640T RTK",
              item_4: "38 мин, 15 км передачи",
              item_5: "Готов к картографированию и инспекциям",
            },
          },
          evo_ii_pro_v3: {
            name: "EVO II Pro V3",
            short_label: "EVO II Pro V3",
            tagline: "Лидер в качестве изображения и летном интеллекте",
            description:
              "EVO II Pro V3: Sony 20 МП 1-дюймовый CMOS, видео 6K, f/2.8–f/11, ISO до 44000. Алгоритм Moonlight 2.0 для низкой освещенности. 4K HDR, 12-битный DNG, гиперлапс 6K. SkyLink 2.0, 37–39 мин полета, 360° предотвращение препятствий.",
            specs: {
              item_0: { label: "Вес", value: "1191 г" },
              item_1: { label: "Макс. время полета", value: "39 мин (без RTK)" },
              item_2: { label: "Передача", value: "10 км (FCC)" },
              item_3: { label: "Камера", value: '1" 20 МП CMOS, 6K/30' },
              item_4: { label: "Диафрагма", value: "f/2.8–f/11" },
              item_5: { label: "Зум", value: "3-кратный без потерь, 16-кратный цифровой" },
              item_6: { label: "Фото", value: "12-битный DNG, 68,6B цветов" },
              item_7: { label: "Контроллер", value: "Опционально Smart Controller SE" },
            },
            highlights: {
              item_0: "1-дюймовый 20 МП, видео 6K",
              item_1: "Алгоритм Moonlight 2.0",
              item_2: "4K HDR, 12-битный DNG",
              item_3: "Время полета 37–39 мин",
              item_4: "SkyLink 2.0, 9+ миль",
              item_5: "360° предотвращение препятствий",
            },
          },
          dragonfish_25: {
            name: "Dragonfish-25",
            short_label: "Dragonfish-25",
            tagline: "eVTOL нового поколения для множества миссий",
            description:
              "Dragonfish-25: eVTOL с поворотным ротором, макс. полезная нагрузка 10 кг, макс. дальность 220 км, до 210 мин полета с полезной нагрузкой. Сборка без инструментов ~10 мин, самопроверка 10 с. Полезная нагрузка: DG-T5, DG-T5L (зум, широкий, двойной тепловизор, лазер). IP45, сопротивление ветру 12 м/с.",
            specs: {
              item_0: { label: "Вес (без подвеса)", value: "29 кг" },
              item_1: { label: "Макс. взлетный вес", value: "39 кг" },
              item_2: { label: "Макс. полезная нагрузка", value: "10 кг" },
              item_3: { label: "Макс. время полета (с нагрузкой)", value: "210 мин" },
              item_4: { label: "Макс. дальность полета", value: "220 км" },
              item_5: { label: "Макс. скорость", value: "126 км/ч" },
              item_6: { label: "Сборка", value: "~10 мин без инструментов" },
              item_7: { label: "Полезная нагрузка", value: "DG-T5, DG-T5L" },
            },
            highlights: {
              item_0: "Полезная нагрузка 10 кг, 210 мин с нагрузкой",
              item_1: "Макс. дальность 220 км",
              item_2: "10 мин сборка без инструментов",
              item_3: "DG-T5/DG-T5L: зум, тепловизор, лазер",
              item_4: "IP45, сопротивление ветру 12 м/с",
              item_5: "Макс. высота взлета 4000 м",
            },
          },
          dragonfish_pro: {
            name: "Dragonfish Pro",
            short_label: "Dragonfish Pro",
            tagline: "eVTOL нового поколения для множества миссий",
            description:
              "Dragonfish Pro: eVTOL с поворотным ротором, 5 мин от кейса до взлета, 179 мин полета, 45 км передачи (расширяется с ретрансляторами). Полезная нагрузка DG-L20T, DG-L50T. Переносится 1–2 людьми, бесшумный полет (почти не слышен на высоте более 120 м над уровнем земли). Опционально Nest, ASAT, Repeater.",
            specs: {
              item_0: { label: "Вес (без подвеса)", value: "14,5 кг" },
              item_1: { label: "Макс. взлетный вес", value: "19 кг" },
              item_2: { label: "Макс. полезная нагрузка", value: "2,2 кг" },
              item_3: { label: "Макс. время полета", value: "179 мин" },
              item_4: { label: "Передача", value: "45 км (с ASAT)" },
              item_5: { label: "Сборка", value: "5 мин, 5 с самопроверки" },
              item_6: { label: "Полезная нагрузка", value: "DG-L20T, DG-L50T" },
              item_7: { label: "Размах крыльев", value: "3,29 м" },
            },
            highlights: {
              item_0: "Время полета 179 мин",
              item_1: "Передача на 45 км (ASAT)",
              item_2: "5 мин от кейса до взлета",
              item_3: "Переносится 1–2 людьми",
              item_4: "Бесшумный на высоте более 120 м над уровнем земли",
              item_5: "Опционально Nest, Repeater",
            },
          },
          dragonfish_standard: {
            name: "Dragonfish Standard",
            short_label: "Dragonfish Standard",
            tagline: "eVTOL нового поколения для множества миссий",
            description:
              "Dragonfish Standard: компактный eVTOL, 7,5 кг (с батареями), полезная нагрузка 1,5 кг, 126 мин полета. Полезная нагрузка DG-L20T (широкоугольная, зум, тепловизор 640×512, лазер 10–1200 м). Сборка 5 мин, независимый взлет с полосы.",
            specs: {
              item_0: { label: "Вес (с батареями)", value: "7,5 кг" },
              item_1: { label: "Макс. взлетный вес", value: "9 кг" },
              item_2: { label: "Макс. полезная нагрузка", value: "1,5 кг" },
              item_3: { label: "Макс. время полета", value: "126 мин" },
              item_4: { label: "Размах крыльев", value: "2,49 м" },
              item_5: { label: "Полезная нагрузка", value: "DG-L20T" },
              item_6: { label: "Сборка", value: "5 мин" },
              item_7: { label: "Макс. скорость", value: "30 м/с" },
            },
            highlights: {
              item_0: "7,5 кг, переносится 1–2 людьми",
              item_1: "Время полета 126 мин",
              item_2: "DG-L20T: зум, тепловизор, лазер",
              item_3: "5 мин от кейса до взлета",
              item_4: "Независимый взлет с полосы",
              item_5: "Сантиметровая точность RTK (опционально)",
            },
          },
        },
      },

      service: {
        title_main: "Профессиональный",
        title_sub: "Сервис",
        maint_title: "Техобслуживание и ремонт",
        maint_desc: "Официальная сертификация Forpost по ремонту конструкции и электроники БПЛА в Алматы.",
        pilot_title: "Обучение пилотов",
        pilot_desc: "Комплексные курсы по эксплуатации промышленных дронов и получению разрешений.",
        consult_title: "Консалтинг БПЛА",
        consult_desc: "Стратегическое планирование внедрения дрон-технологий в ваш рабочий процесс.",
        btn_contact: "Связаться с нами",
      },
      education: {
        title: "ОБУЧЕНИЕ ОПЕРАТОРОВ БПЛА (КАТЕГОРИЯ 1)",
        description: "Категория 1 — это начальный уровень подготовки операторов беспилотных летательных аппаратов, предназначенный для законной и безопасной эксплуатации БПЛА массой до 25 кг в пределах установленных правил.",
        group: {
          title: "Групповое обучение до 20 человек",
          price: "Стоимость: 45 000 ₸ с человека",
          items: [
            "Теоретическая подготовка операторов БПЛА категории 1",
            "Основы воздушного права РК и правил использования воздушного пространства",
            "Структура воздушного пространства и порядок выполнения полётов",
            "Планирование полётов и подготовка БПЛА",
            "Основы авиационной метеорологии",
            "Авиационная безопасность и безопасность полётов",
            "Итоговое тестирование и выдача сертификата"
          ]
        },
        individual: {
          title: "Индивидуальное обучение персонально",
          price: "Стоимость: 250 000 ₸",
          items: [
            "Индивидуальный график обучения",
            "Полный курс теоретической подготовки категории 1",
            "Детальный разбор нормативной базы и практических кейсов",
            "Углублённое изучение планирования и эксплуатации БПЛА",
            "Персональное сопровождение инструктора",
            "Итоговое тестирование",
            "Сертификат о прохождении обучения"
          ]
        }
      },
      contact: {
        title: "Свяжитесь",
        us: "с нами",
        hq: "Адрес",
        addr: "Алматы, Казахстан, Рыскулбекова 28",
        email: "Эл. почта",
        phone: "Номер телефона",
        form_title: "Ваши данные",
        form_name: "Полное имя",
        form_email: "Электронная почта",
        form_msg: "Сообщение",
        form_btn: "Отправить запрос",
      },
    },
  },

  kk: {
    translation: {
      seo: {
        home: {
          title: "Басты бет",
          description:
            "Forpost Aero Service — Қазақстанға арналған авиациялық және БПЛА шешімдері. Дрондар, сервис, Алматы.",
        },
        drones: {
          title: "Дрондар",
          description: "Кәсіпорын дрондары: мультироторлы және eVTOL. Autel EVO, Dragonfish. Қазақстан үшін.",
        },
        drones_category: { title: "Дрондар", description: "Кәсіпорын БПЛА. Forpost Aero Service, Қазақстан." },
        service: {
          title: "Сервис",
          description:
            "БПЛА техникалық қызмет, жөндеу, ұшқыштарды оқыту, консалтинг. Алматыда Forpost сертификаты.",
        },
        contact: {
          title: "Контактілер",
          description: "Алматыда Forpost Aero Service-пен байланысыңыз. Мекенжай, телефон, email.",
        },
      },
      nav: { drones: "Өнімдер", solutions: "Шешімдер", service: "Қызметтер", contact: "Контактілер", get_started: "Бастау" },
      hero: {
        title: "ҰШУДЫҢ",
        subtitle: "ЖАҢА КЕЗЕҢІ",
        desc: "Қазақстанның ең күрделі жағдайларына арналған авиациялық шешімдер.",
        btn_explore: "Дрондарды көру",
        btn_video: "Видеоны қарау",
      },
      products: {
        title: "Таңдаулы",
        subtitle: "Дрондар",
        learn_more: "Толығырақ",
        evo_max: { name: "EVO Max 4T", tagline: "Шексіз интеллект" },
        dragonfish: { name: "Dragonfish сериясы", tagline: "Дәстүрлі БПЛА-ны өзгерту" },
        evo_ii: { name: "EVO II RTK сериясы", tagline: "Жоғары дәлдіктегі картография" },
      },
      footer: {
        desc: "Қазақстандағы БПЛА технологиялары мен авиациялық қызметтердің болашағын басқару.",
        col_products: "Өнімдер",
        col_support: "Қолдау",
        col_partners: "Біздің серіктестер",
        col_follow: "Бізге жазылыңыз",
        support: { download: "Жүктеу орталығы", repair: "Жөндеу қызметі", contact: "Бізбен байланысыңыз" },
        legal: { rights: "Барлық құқықтар қорғалған.", privacy: "Құпиялылық саясаты", terms: "Пайдалану шарттары" },
      },
      drones_page: {
        desc: "Қазақстанның индустриялық ландшафтына арналған дәлдік инженерия.",
        view: "Көру",
        cat_evtol: { name: "eVTOL", specs: "Тиімді және тұрақты" },
        cat_multirotor: { name: "Мультироторлы", specs: "Жеңіл және тасымалды" },
      },
      drones_category: {
        back: "Артқа",
        learn_more: "Толығырақ",
        not_found: { title: "Санат табылмады", desc: "Дрондар бетінде санатты таңдаңыз." },
        modal: {
          title: "Жақында",
          desc: "Дронның толық беті кейінірек фронтта жасалады.",
          note: "Қазір бұл — заглушка. Келесі қадам: нақты бет пен роут жасау.",
          close: "Жабу",
        },
      },
      drones_detail: {
        highlights: "Негізгі ерекшеліктер",
        specs: "Техникалық сипаттамалар",
        source_at_autel: "Толық сипаттама Autel-де",
        contact_us: "Бізбен хабарласыңыз",
        back_to_category: "Санатқа оралу",
        other_in_category: "Осы санаттағы басқалар",
      },
      drones_catalog: {
        categories: {
          multirotor: { title: "Мультироторлы", desc: "Инспекция, картография және миссияларға арналған өнеркәсіптік платформалар." },
          evtol: { title: "eVTOL", desc: "Ұзақ қашықтықтағы миссияларға арналған VTOL платформалары." },
        },
        items: {
          evo_lite_enterprise: {
            name: "EVO Lite Enterprise Series",
            short_label: "EVO Lite Enterprise",
            tagline: "Жеңіл, бірақ қуатты",
            description:
              "EVO Lite Enterprise сериясы жеңіл және портативті дизайнды, жылдам орналастыруды және өнеркәсіптік қолданбалар үшін қарапайым басқаруды ұсынады. AI нысананы тану, үш жақты бинокулярлық кедергілерді болдырмау. EVO Lite 640T Enterprise қос гимбалмен (көрінетін жарық + жылу) жабдықталған; EVO Lite 6K Enterprise 1 дюймдік CMOS 6K камерасы бар.",
            specs: {
              item_0: { label: "Салмағы", value: "866 г" },
              item_1: { label: "Макс. ұшу уақыты", value: "40 мин" },
              item_2: { label: "Кескін беру", value: "12 км" },
              item_3: { label: "Бүктелген өлшемдері", value: "210×123×95 мм" },
              item_4: { label: "Макс. қызмет көрсету биіктігі", value: "3000 м" },
              item_5: { label: "Кедергілерді болдырмау", value: "Үш жақты бинокулярлық көру" },
              item_6: { label: "EVO Lite 640T жылулық", value: "640×512, 16x цифрлық масштабтау" },
              item_7: { label: "EVO Lite 6K камерасы", value: "1 дюймдік CMOS, 20 МП, 6K видео" },
            },
            highlights: {
              item_0: "Жеңіл және портативті (866 г)",
              item_1: "AI нысананы тану және орналастыру",
              item_2: "40 минут ұшу ұзақтығы",
              item_3: "12 км видео беру",
              item_4: "EVO Lite 640T: қос гимбал көрінетін + жылулық",
              item_5: "EVO Lite 6K: 1 дюймдік 6K камера",
            },
          }, // ✅ FIX: закрыли evo_lite_enterprise
          evo_max_4t: {
            name: "EVO Max 4T",
            short_label: "EVO Max 4T",
            tagline: "Жаңа шекараларға жету",
            description:
              "EVO Max 4T пайдаланушыларға қуатты технологиялар мен кеңейтілген автономияны ұсынады. Теңдесі жоқ кедергілерді болдырмау үшін нақты уақыттағы 3D ұшу жолдарын жасайды. Кеңейтілген сенсорлар GNSS қолжетімсіз аймақтарда ұшуға мүмкіндік береді және жаңа термиялық жүктеме нысандарды анықтау мен бақылаудың жаңа сценарийлерін ашады. Жиналмалы, ауа райына төзімді дизайнмен EVO Max 4T портативті, әрі қабілетті.",
            specs: {
              item_0: { label: "Салмағы (4T)", value: "1645 г (Fusion 4T)" },
              item_1: { label: "Макс. ұшу уақыты", value: "42 мин" },
              item_2: { label: "Беріліс", value: "15 км (FCC)" },
              item_3: { label: "Масштабтау камерасы", value: "48 МП, 10x оптикалық, 160x гибридті масштабтау" },
              item_4: { label: "Жылулық", value: "640×512, 16x цифрлық масштабтау" },
              item_5: { label: "Лазерлік қашықтық өлшегіш", value: "5–1200 м" },
              item_6: { label: "Кедергілерді болдырмау", value: "Көру + 60G/24G радар" },
              item_7: { label: "Желге төзімділік", value: "12 м/с (круиз)" },
            },
            highlights: {
              item_0: "Соқыр нүктелер жоқ: көру + миллиметрлік толқынды радар",
              item_1: "8K 10x оптикалық масштабтау, 160x гибридті",
              item_2: "Автономды жол табу (Autel Autonomy Engine)",
              item_3: "GNSS жоқ ортада навигация",
              item_4: "42 мин ұшу, 15 км беру",
              item_5: "Ыстық ауыстырылатын батарея",
            },
          }, // ✅ FIX: закрыли evo_max_4t
          evo_max_4n: {
            name: "EVO Max 4N",
            short_label: "EVO Max 4N",
            tagline: "Көрінбейтінді көру",
            description:
              "EVO Max 4N ең жақсы түнгі жұлдызды көру қабілетін Max сериялы БПЛА платформасының жетілдірілген мүмкіндіктерімен біріктіреді. Starlight Vision камерасы (2,3 МП, LUX 0,0001, ISO 440000) термиялық камералардан айырмашылығы, температура айырмашылығымен шектелмейді, бұл әйнек арқылы бақылауға және жарық көздерін алыс қашықтықтан (5+ км) анықтауға мүмкіндік береді.",
            specs: {
              item_0: { label: "Салмағы", value: "1665 г (Fusion 4N)" },
              item_1: { label: "Макс. ұшу уақыты", value: "42 мин" },
              item_2: { label: "Беріліс", value: "15 км (FCC)" },
              item_3: { label: "Starlight камерасы", value: "2,3 МП, ISO 440000" },
              item_4: { label: "Кең бұрышты", value: '50 МП, 1" CMOS' },
              item_5: { label: "Жылулық", value: "640×512" },
              item_6: { label: "Лазерлік қашықтық өлшегіш", value: "5–1200 м" },
              item_7: { label: "A-Mesh", value: "Қос контроллер, релейлік операциялар" },
            },
            highlights: [
              "Түнгі операцияларға арналған Starlight Vision камерасы",
              "Әйнек арқылы бақылау (жылулық камерадан айырмашылығы)",
              "5 км+ қашықтықтағы жарық көздерін анықтау",
              "42 мин ұшу, 15 км беру",
              "A-Mesh желісі (аймақтық, релейлік)",
              "Соқыр нүктелер жоқ: көру + радар",
            ],
          },
          autel_alpha: {
            name: "Autel Alpha",
            short_label: "Autel Alpha",
            tagline: "Шекаралардан тыс",
            description:
              "Autel Alpha - автономды ұшу мүмкіндіктері, кедергілерді болдырмау, кедергілерді жою және бейне беру технологияларында елеулі жақсартулармен мақтанатын көп мақсатты интеллектуалды өнеркәсіптік дрон. Жиналмалы дизайнмен және IP55 рейтингімен ол күрделі ортада жұмыс істейді. Кірістірілген RTK қос антенналық жүйесі миссияларды орындау кезінде миллиметрлік дәлдікті қамтамасыз етеді. Келесі буын DG-L35T гимбалымен жұптастырылған, ол 560x гибридті масштабтау камерасын, қос жылулық кескіндеу камерасын, көрінетін жарық кең бұрышты камераны және лазерлік қашықтық өлшегішті біріктіреді.",
            specs: {
              item_0: { label: "Салмағы (гимбалмен)", value: "6480 г" },
              item_1: { label: "Макс. ұшу салмағы", value: "8400 г" },
              item_2: { label: "Макс. ұшу уақыты", value: "40 мин" },
              item_3: { label: "Беріліс", value: "15 км (FCC)" },
              item_4: { label: "Масштабтау", value: "4K 35x оптикалық, 560x гибридті" },
              item_5: { label: "Қос жылулық", value: "640×512, 13 мм + 45 мм" },
              item_6: { label: "IP рейтингі", value: "IP55" },
              item_7: { label: "Лазерлік қашықтық өлшегіш", value: "10–2000 м" },
            },
            highlights: [
              "IP55, жиналмалы өнеркәсіптік платформа",
              "RTK қос антенна, миллиметрлік дәлдік",
              "4K 35x оптикалық, 560x гибридті масштабтау",
              "Қос жылулық (кең + телефото)",
              "Сым деңгейіндегі кедергілерді болдырмау",
              "40 мин, 15 км беру",
            ],
          },
          evo_ii_enterprise_v3: {
            name: "EVO II Enterprise V3",
            short_label: "EVO II Enterprise V3",
            tagline: "Ықшам. Әмбебап. Қуатты.",
            description:
              "EVO II Enterprise V3: жақсартылған кескіндеу, 9,3 миль (15 км) беру диапазоны және қосымша модульдік аксессуарлар инспекция, іздеу және құтқару, жағдайды бақылау және т.б. сияқты әртүрлі қолдану жағдайларын қанағаттандыруға көмектеседі. Pro нұсқасы: 6K 1 дюймдік CMOS, Moonlight Algorithm 2.0. Dual 640T: 640×512 жылулық + 50 МП RYYB. 360° кедергілерді болдырмау, SkyLink 2.0, 42 мин ұшу.",
            specs: {
              item_0: { label: "Салмағы (Pro)", value: "1110 г" },
              item_1: { label: "Салмағы (Dual 640T)", value: "1136,5 г" },
              item_2: { label: "Макс. ұшу уақыты", value: "42 мин" },
              item_3: { label: "Беріліс", value: "15 км (FCC)" },
              item_4: { label: "Pro камерасы", value: '1" 20 МП, 6K, f/2.8–f/11' },
              item_5: { label: "Dual 640T жылулық", value: "640×512, 16x масштабтау" },
              item_6: { label: "Кедергілерді болдырмау", value: "360°, 19 сенсорлық топ" },
              item_7: { label: "Аксессуарлар", value: "Прожектор, дыбыс зорайтқыш, стробоскоп, RTK" },
            },
            highlights: [
              "Ықшам, 42 мин ұшу уақыты",
              'EVO II Pro: 6K 1" CMOS, Moonlight 2.0',
              "EVO II Dual 640T: жылулық + 50 МП",
              "9+ миль SkyLink 2.0 беру",
              "360° кедергілерді болдырмау",
              "Модульдік: прожектор, дыбыс зорайтқыш, RTK",
            ],
          },
          evo_ii_dual_640t_v3: {
            name: "EVO II Dual 640T V3",
            short_label: "EVO II Dual 640T V3",
            tagline: "Қуат. Тиімділік. Сенімділік.",
            description:
              "EVO II Dual 640T V3: 640×512 жылулық (25 Гц), жаңа кескін өңдеу. 50 МП ультра сезімтал RYYB, Moonlight 2.0. 4x жоғалтусыз + 16x цифрлық масштабтау. 4K HDR, SkyLink 2.0, 38 мин ұшу. Ұшуға тыйым салынған аймақтар жоқ / мәжбүрлі жаңартулар жоқ.",
            specs: {
              item_0: { label: "Салмағы", value: "1209 г" },
              item_1: { label: "Макс. ұшу уақыты", value: "38 мин" },
              item_2: { label: "Беріліс", value: "15 км (FCC)" },
              item_3: { label: "Жылулық", value: "640×512 @ 25 кадр/сек" },
              item_4: { label: "Визуалды", value: "50 МП RYYB, 4x жоғалтусыз масштабтау" },
              item_5: { label: "Желге төзімділік", value: "12 м/с" },
              item_6: { label: "Макс. жылдамдық", value: "20 м/с" },
              item_7: { label: "Орналастыру", value: "45 с корпус ауаға" },
            },
            highlights: [
              "640×512 жылулық, жаңа алгоритм",
              "50 МП RYYB, Moonlight 2.0",
              "4x жоғалтусыз + 16x цифрлық масштабтау",
              "38 мин, 15 км беру",
              "Ұшуға тыйым салынған аймақтар жоқ; мәжбүрлі жаңартулар жоқ",
              "ITAR-ға жатпайды",
            ],
          },
          evo_ii_rtk_v3: {
            name: "EVO II RTK Series V3",
            short_label: "EVO II RTK V3",
            tagline: "Теңдесі жоқ дәлдік пен бақылау",
            description:
              "EVO II RTK Series V3: сантиметрлік дәлдікпен позициялау (RTK модулі), NTRIP қолдауы, GCP қажет емес. Pro RTK: 6K 1\" CMOS. Dual 640T RTK: жылулық + 50 МП. Фото репликациясы, Multi-NTRIP профильдері, 38 мин ұшу.",
            specs: {
              item_0: { label: "RTK көлденең дәлдігі", value: "1 см + 1 ppm" },
              item_1: { label: "RTK тік дәлдігі", value: "1,5 см + 1 ppm" },
              item_2: { label: "Макс. ұшу уақыты", value: "38 мин" },
              item_3: { label: "Беріліс", value: "15 км (FCC)" },
              item_4: { label: "Pro RTK камерасы", value: '1" 20 МП, 6K' },
              item_5: { label: "Dual 640T RTK жылулық", value: "640×512" },
              item_6: { label: "NTRIP", value: "Қолдау көрсетіледі, GCP қажет емес" },
              item_7: { label: "Фото репликациясы", value: "Қолдау көрсетіледі" },
            },
            highlights: [
              "Сантиметрлік дәлдікпен RTK позициялау",
              "GCP қажет емес (NTRIP)",
              "Үшінші тараптың базалық станциясын қолдау",
              "Pro RTK & Dual 640T RTK нұсқалары",
              "38 мин, 15 км беру",
              "Картографиялау және инспекциялауға дайын",
            ],
          },
          evo_ii_pro_v3: {
            name: "EVO II Pro V3",
            short_label: "EVO II Pro V3",
            tagline: "Кескін сапасы мен ұшу интеллектінің көшбасшысы",
            description:
              "EVO II Pro V3: Sony 20 МП 1 дюймдік CMOS, 6K видео, f/2.8–f/11, ISO 44000-ға дейін. Төмен жарықта Moonlight Algorithm 2.0. 4K HDR, 12-бит DNG, гиперлапс 6K. SkyLink 2.0, 37–39 мин ұшу, 360° кедергілерді болдырмау.",
            specs: {
              item_0: { label: "Салмағы", value: "1191 г" },
              item_1: { label: "Макс. ұшу уақыты", value: "39 мин (RTK жоқ)" },
              item_2: { label: "Беріліс", value: "10 км (FCC)" },
              item_3: { label: "Камера", value: '1" 20 МП CMOS, 6K/30' },
              item_4: { label: "Диафрагма", value: "f/2.8–f/11" },
              item_5: { label: "Масштабтау", value: "3x жоғалтусыз, 16x цифрлық" },
              item_6: { label: "Фото", value: "12-бит DNG, 68,6B түстер" },
              item_7: { label: "Контроллер", value: "Қосымша Smart Controller SE" },
            },
            highlights: [
              "1 дюймдік 20 МП, 6K видео",
              "Moonlight Algorithm 2.0",
              "4K HDR, 12-бит DNG",
              "37–39 мин ұшу уақыты",
              "SkyLink 2.0, 9+ миль",
              "360° кедергілерді болдырмау",
            ],
          },
          dragonfish_25: {
            name: "Dragonfish-25",
            short_label: "Dragonfish-25",
            tagline: "Келесі буын Multi Mission eVTOL",
            description:
              "Dragonfish-25: тік роторлы eVTOL, макс. пайдалы жүк 10 кг, макс. қашықтық 220 км, пайдалы жүкпен 210 мин дейін ұшу. Құралсыз құрастыру ~10 мин, 10 с өзін-өзі тексеру. Пайдалы жүктер: DG-T5, DG-T5L (масштабтау, кең бұрышты, қос жылулық, лазер). IP45, желге төзімділік 12 м/с.",
            specs: {
              item_0: { label: "Салмағы (гимбалсыз)", value: "29 кг" },
              item_1: { label: "Макс. ұшу салмағы", value: "39 кг" },
              item_2: { label: "Макс. пайдалы жүк", value: "10 кг" },
              item_3: { label: "Макс. ұшу уақыты (жүкпен)", value: "210 мин" },
              item_4: { label: "Макс. ұшу қашықтығы", value: "220 км" },
              item_5: { label: "Макс. жылдамдық", value: "126 км/сағ" },
              item_6: { label: "Құрастыру", value: "~10 мин құралсыз" },
              item_7: { label: "Пайдалы жүктер", value: "DG-T5, DG-T5L" },
            },
            highlights: [
              "10 кг пайдалы жүк, жүкпен 210 мин",
              "220 км макс. қашықтық",
              "10 мин құралсыз құрастыру",
              "DG-T5/DG-T5L: масштабтау, жылулық, лазер",
              "IP45, 12 м/с желге төзімділік",
              "4000 м макс. ұшу биіктігі",
            ],
          },
          dragonfish_pro: {
            name: "Dragonfish Pro",
            short_label: "Dragonfish Pro",
            tagline: "Келесі буын Multi Mission eVTOL",
            description:
              "Dragonfish Pro: eVTOL тік роторлы, корпустан ұшуға дейін 5 мин, 179 мин ұшу, 45 км беру (ретрансляторлармен кеңейтіледі). DG-L20T, DG-L50T пайдалы жүктері. 1–2 адам тасымалдауға болатын, дыбыссыз ұшу (жерден 120 м жоғары естілмейді). Қосымша Nest, ASAT, Repeater.",
            specs: {
              item_0: { label: "Салмағы (гимбалсыз)", value: "14,5 кг" },
              item_1: { label: "Макс. ұшу салмағы", value: "19 кг" },
              item_2: { label: "Макс. пайдалы жүк", value: "2,2 кг" },
              item_3: { label: "Макс. ұшу уақыты", value: "179 мин" },
              item_4: { label: "Беріліс", value: "45 км (ASAT арқылы)" },
              item_5: { label: "Құрастыру", value: "5 мин, 5 с өзін-өзі тексеру" },
              item_6: { label: "Пайдалы жүктер", value: "DG-L20T, DG-L50T" },
              item_7: { label: "Қанаттардың жаймасы", value: "3,29 м" },
            },
            highlights: [
              "179 мин ұшу уақыты",
              "45 км беру (ASAT)",
              "Корпустан ұшуға дейін 5 мин",
              "1–2 адам тасымалдауға болатын",
              "Жерден 120 м жоғары дыбыссыз",
              "Қосымша Nest, Repeater",
            ],
          },
          dragonfish_standard: {
            name: "Dragonfish Standard",
            short_label: "Dragonfish Standard",
            tagline: "Келесі буын Multi Mission eVTOL",
            description:
              "Dragonfish Standard: ықшам eVTOL, 7,5 кг (батареялармен), 1,5 кг пайдалы жүк, 126 мин ұшу. DG-L20T пайдалы жүгі (кең бұрышты, масштабтау, жылулық 640×512, лазер 10–1200 м). 5 мин құрастыру, ұшу жолына тәуелсіз.",
            specs: {
              item_0: { label: "Салмағы (батареялармен)", value: "7,5 кг" },
              item_1: { label: "Макс. ұшу салмағы", value: "9 кг" },
              item_2: { label: "Макс. пайдалы жүк", value: "1,5 кг" },
              item_3: { label: "Макс. ұшу уақыты", value: "126 мин" },
              item_4: { label: "Қанаттардың жаймасы", value: "2,49 м" },
              item_5: { label: "Пайдалы жүк", value: "DG-L20T" },
              item_6: { label: "Құрастыру", value: "5 мин" },
              item_7: { label: "Макс. жылдамдық", value: "30 м/с" },
            },
            highlights: [
              "7,5 кг, 1–2 адам тасымалдауға болатын",
              "126 мин ұшу уақыты",
              "DG-L20T: масштабтау, жылулық, лазер",
              "Корпустан ұшуға дейін 5 мин",
              "Ұшу жолына тәуелсіз",
              "Сантиметрлік дәлдік RTK (қосымша)",
            ],
          },
        },
      },

      service: {
        title_main: "Кәсіби",
        title_sub: "Сервис",
        maint_title: "Техникалық қызмет және жөндеу",
        maint_desc: "Алматыдағы БПЛА конструкциясы мен электроникасын жөндеуге арналған ресми Forpost сертификаты.",
        pilot_title: "Ұшқыштарды оқыту",
        pilot_desc: "Кәсіпорын дрондарын пайдалану және ұшуға рұқсат алу бойынша кешенді курстар.",
        consult_title: "БПЛА консалтингі",
        consult_desc: "Дрон технологияларын жұмыс процесіне енгізуді стратегиялық жоспарлау.",
        btn_contact: "Бізбен байланысыңыз",
      },
      contact: {
        title: "Бізбен",
        us: "байланысыңыз",
        hq: "Адрес",
        addr: "Алматы, Казахстан, Рыскулбекова 28",
        email: "Электрондық пошта",
        phone: "Телефон нөмірі",
        form_title: "Сіздің деректеріңіз",
        form_name: "Толық аты-жөні",
        form_email: "Электрондық пошта",
        form_msg: "Хабарлама",
        form_btn: "Сұраныс жіберу",
      },
    },
  },
}; // ✅ FIX: убрали лишнюю запятую после объекта

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: "ru",
  interpolation: { escapeValue: false },
});

export default i18n;
