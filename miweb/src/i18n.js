// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importamos las traducciones
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(initReactI18next) // Integra i18next con React
  .init({
    resources, // Carga los recursos de traducción
    lng: 'es', // Idioma inicial de la aplicación
    fallbackLng: 'en', // Idioma de respaldo en caso de que falten traducciones
    interpolation: {
      escapeValue: false, // React ya maneja el escape de valores
    },
    react: {
      useSuspense: false, // Desactiva Suspense si se generan errores de carga
    },
  });

export default i18n;
