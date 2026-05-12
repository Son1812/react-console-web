import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import các file json chứa nội dung dịch
// import enTranslation from './locales/en.json';
import viTranslation from './locales/vi.json';

i18n
  .use(LanguageDetector) // Tự động phát hiện ngôn ngữ trình duyệt
  .use(initReactI18next)
  .init({
    resources: {
    //   en: { translation: enTranslation },
      vi: { translation: viTranslation },
    },
    fallbackLng: 'vi', // Ngôn ngữ mặc định nếu không tìm thấy
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;