import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./locales/es.json";
import en from "./locales/en.json";
import fi from "./locales/fi.json";
import fr from "./locales/fr.json";
import pt from "./locales/pt.json";
import ar from "./locales/ar.json";

const savedLang = localStorage.getItem("language") || "es";

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
    fi: { translation: fi },
    fr: { translation: fr },
    pt: { translation: pt },
    ar: { translation: ar },
  },
  lng: savedLang,
  fallbackLng: "es",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});

export default i18n;
