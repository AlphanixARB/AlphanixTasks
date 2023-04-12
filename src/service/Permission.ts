import { PermissionsAndroid } from "react-native";

export const requestNotificationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        {
          title: 'Alphanix Tasks App Camera Permission',
          message:
            'Alphanix Tasks App needs access to your notification ' +
            'so You can receive reminders.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the notification');
        return(true);
      } else {
        console.log('Notification permission denied');
        return(false);
      }
    } catch (err) {
      console.warn(err);
    }
};