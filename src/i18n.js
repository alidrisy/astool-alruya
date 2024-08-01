import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';




i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng:  navigator.language || navigator.userLanguage,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources: {
      en: {
        translation: {
          home: "Home",
          about: "About Us",
          service:"Our Services",
          work: "Our Work",
          contact: "Contact",
          languages: "العربيه",
          banner1: {
            title1: "Where Efficiency Meets Excellence.",
            title2: "Your Gateway to Seamless Logistics!",
            des: "The best in transport and logistics, ensuring efficiency, reliability, and sustainability across industries.",
            button: "Connect us",
          },
          aboutbage : {
            title: "About Us",
            tags : {
              tag1: "Super Fast",
              tag2: "EXCELLENT CUSTOMER SERVICE",
              tag3: "WIDE SERVING ZONE"
            },
             name: "Astool Alroya",
            dis: " takes the load off your back. We specialize in transportation solutions for construction companies, offering a reliable fleet of trucks to deliver your materials and equipment efficiently. Our mission is to provide the best options for your transport needs, ensuring smooth and timely deliveries.",
            dis1: " Let us handle the logistics so you can focus on what you do best—building and constructing with ease and precision."
          },
          services: {
            title: "Our services",
            service1: {
            title: 'Ground Transport',
            article: 'Our ground transport solutions are designed to meet the unique needs of construction companies. We provide reliable and timely delivery of construction materials and equipment, ensuring your projects stay on schedule.'
            },
            service2: {
              title: 'Cargo Services',
              article: 'With years of experience in construction material transportation, we are your trusted partner. We provide safe and reliable shipping services, ensuring the quality of your products.'
          },
          service3: {
            title: 'Material Delivery',
            article: 'We provide all the needs for your project, from the initial foundation to the final finishes. We guarantee fast and direct delivery to the job site, anytime and anywhere.'
        },
        button: 'Read more',
        }
      }
      },
      ar: {
        translation: {
          home: "الرئيسية",
          about: "عن شركتنا",
          service: "خدماتنا",
          contact: "اتصل بنا",
          work: "أعمالنا",
          languages: "ُEnglish",
          banner1: {
            title1: "حيث تلتقي الكفاءة بالتميز.",
            title2: "بوابتك إلى خدمات لوجستية سلسة!",
            des: "الأفضل في الخدمات اللوجستية و النقل، نضمن الكفاءة والموثوقية والاستدامة عبر مختلف الصناعات.",
            button: "تواصل معنا",
          },
          aboutbage: {
            title: "من نحن",
            tags : {
              tag1: "سرعة فائقة",
              tag2: "خدمة عملاء ممتازة",
              tag3: "نطاق خدمة واسع"
            },
            name: "أسطول الرؤيا",
            dis: "  تخفف عنك عبء النقل. نحن متخصصون في حلول النقل العامة، حيث نوفر أسطولاً موثوقاً من الشاحنات لتوصيل منتجاتك او موادك ومعداتك بكفاءة. مهمتنا هي تقديم أفضل الخيارات لاحتياجاتك النقلية، وضمان تسليم سلس وفي الوقت المناسب.",
            dis1: "اترك لنا الجوانب اللوجستية، وركز على تحقيق أهدافك بأفضل طريقة ممكنة."
          },
          services: {
            title: "خدماتنا",
            service1: {
            title: 'النقل البري',
            article: 'تم تصميم حلول النقل البري لدينا لتلبية الاحتياجات الفريدة لشركات البناء. نحن نقدم توصيلًا موثوقًا وفي الوقت المناسب لمواد ومعدات البناء، مما يضمن بقاء مشاريعك على الجدول الزمني المحدد.'
            },
            service2: {
              title: 'خدمات الشحن',
              article: 'مع سنوات من الخبرة في مجال نقل مواد البناء، نحن شريكك الموثوق به. نقدم لك خدمات شحن آمنة وموثوقة، مع الحرص على الحفاظ على جودة منتجاتك.'
          },
          service3: {
            title: 'توصيل المواد',
            article: 'نقدم لك كافة احتياجات مشروعك، من بداية التأسيس إلى التشطيبات النهائية. نحن نضمن لك توصيل سريع ومباشر إلى موقع العمل، في أي وقت وفي أي مكان. '
        },
        button : 'إقرأ المزيد',
      },
    }
  }}});

export default i18n;