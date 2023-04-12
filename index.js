/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from "react-native-push-notification";
import { handleUpdateQueryTask } from './src/service/TaskHandler';

PushNotification.configure({
  onRegister: function (token) {
    console.log("TOKEN:", token);
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: async function (notification) {
    console.log("NOTIFICATION:", notification.id);
    handleUpdateQueryTask('taskID', Number(notification.id));
  },

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function(err) {
    console.error(err.message, err);
  },

  onAction: function(notification){
    console.log("ACTION:", notification.action);
    console.log("NOTIFICATION:", notification);
    if( notification.action === 'Completed'){
      handleUpdateQueryTask('taskID', Number(notification.id));
    }
  },

  popInitialNotification: true,
  
  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
    
  requestPermissions: Platform.OS === 'ios',
});

// on top of your index.android.js file
const isAndroid = require('react-native').Platform.OS === 'android' // this line is only needed if you don't use an .android.js file
const isHermesEnabled = !!global.HermesInternal // this line is only needed if you don't use an .android.js file

// in your index.js file
if (isHermesEnabled || isAndroid) {
  // this line is only needed if you don't use an .android.js file

  require('@formatjs/intl-getcanonicallocales/polyfill')
  require('@formatjs/intl-locale/polyfill')

  require('@formatjs/intl-pluralrules/polyfill')
  require('@formatjs/intl-pluralrules/locale-data/en.js') // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT

  require('@formatjs/intl-displaynames/polyfill')
  require('@formatjs/intl-displaynames/locale-data/en.js') // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT

  require('@formatjs/intl-listformat/polyfill')
  require('@formatjs/intl-listformat/locale-data/en.js') // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT

  require('@formatjs/intl-numberformat/polyfill')
  require('@formatjs/intl-numberformat/locale-data/en.js') // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT

  require('@formatjs/intl-relativetimeformat/polyfill')
  require('@formatjs/intl-relativetimeformat/locale-data/en.js') // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT

  require('@formatjs/intl-datetimeformat/polyfill')
  require('@formatjs/intl-datetimeformat/locale-data/en.js') // USE YOUR OWN LANGUAGE OR MULTIPLE IMPORTS YOU WANT TO SUPPORT

  require('@formatjs/intl-datetimeformat/add-golden-tz.js')

  // https://formatjs.io/docs/polyfills/intl-datetimeformat/#default-timezone
  if ('__setDefaultTimeZone' in Intl.DateTimeFormat) {
    // If you are using react-native-cli
    let RNLocalize = require('react-native-localize')
    Intl.DateTimeFormat.__setDefaultTimeZone(RNLocalize.getTimeZone())

    //  Are you using Expo, use this instead of previous 2 lines
    //  Intl.DateTimeFormat.__setDefaultTimeZone(
    //    require("expo-localization").timezone
    //  );
  }
} // this line is only needed if you don't use an .android.js file

AppRegistry.registerComponent(appName, () => App);
