import LanguageDetector from 'i18next-browser-languagedetector';
import homeDe from "@/locales/de/home.json"
import homeEn from "@/locales/en/home.json"
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                home: homeEn,
            },
            de: {
                home: homeDe,
            },
        },
        fallbackLng: "en",
    })