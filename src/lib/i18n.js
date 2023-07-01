import i18n from "i18next";
import Languagedetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import Backend from "i18next-http-backend"

i18n
/**
 * Using backend we'll be loading all the translation from pulic/locales folder
 */
.use(Backend)
/**
 * It'll detect User language
 */
.use(Languagedetector)
/**
 * Pass i18n intnace to react-i18next libarary
 */
.use(initReactI18next)
/**
 * initializa i18n
 */
.init({
    fallbackLng: 'en',
    backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json"
    },
    interpolation: {
        escapeValue: false
    },
    load: 'languageOnly'
})