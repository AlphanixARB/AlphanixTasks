import { NativeModules, Platform } from "react-native";

export const getDeviceLangueage = () => {
    const appLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier;
  
    return appLanguage.search(/-|_/g) !== -1
      ? appLanguage.slice(0, 2)
      : appLanguage;
};