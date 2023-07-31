import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import App from "./App";

i18n
  .use(LanguageDetector) // Enable automatic language detection
  .init({
    resources: {
      en: {
        translation: {
          // English translations
          "welcome.message": "Welcome to the React i18n Example!",
          // Add more translations here for English
        },
      },
      pl: {
        translation: {
          // Polish translations
          "welcome.message": "Witaj w przykładzie React i18n!",
          // Add more translations here for Polish
        },
      },
    },
    fallbackLng: "en", // Fallback language if the detected language is not available
    interpolation: {
      escapeValue: false, // React already escapes the values, so no need to escape again
    },
  });

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Suspense fallback="Loading translations...">
      <App />
    </Suspense>
  </I18nextProvider>,
  document.getElementById("root")
);
