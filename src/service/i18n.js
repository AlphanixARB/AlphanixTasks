import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';
import { getDeviceLangueage } from "./GetDeviceLangueage";
// Importing translation files

import translationEN from '../locales/en.json';
import translationFA from "../locales/fa.json";

//Creating object with the variables of imported translation files
const resources = {
  en: {
    translation: translationEN,
  },
  fa: {
    translation: translationFA,
  },
};



const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (language) => {
    const persistedLocale = await AsyncStorage.getItem("language");
    
    if (!persistedLocale) {
      return language("en");
    }
    language(persistedLocale);
    const deviceLang = persistedLocale || getDeviceLangueage();
    const isLangRTL = deviceLang === 'fa';
    if (isLangRTL !== I18nManager.isRTL) {
      await I18nManager.allowRTL(isLangRTL);
      await I18nManager.forceRTL(isLangRTL);
      RNRestart.Restart();
    }
  },
  init: () => {},
  cacheUserLanguage: (locale) => {
    AsyncStorage.setItem("language", locale);
  }
  
};

//i18N Initialization

i18n.use(initReactI18next).use(languageDetector).init({
    compatibilityJSON: 'v3',
    resources,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    react: { 
      useSuspense: false //   <---- this will do the magic
    }
});

export default i18n;