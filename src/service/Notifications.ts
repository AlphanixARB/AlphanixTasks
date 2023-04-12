import PushNotification, { Importance } from "react-native-push-notification";
import { ITask } from "../types/Task";

export const CreateChannel = () => {
  PushNotification.createChannel(
    {
      channelId: "com.alphanixtasksapp", // (required)
      channelName: "com.alphanixtasksapp", // (required)
      channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
      playSound: true, // (optional) default: true
      soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
      importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
    },
    (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
  );
}

export const localNotification = (task: ITask) => {
  CreateChannel();
  PushNotification.localNotification({
    channelId: 'com.alphanixtasksapp',
    id: task.taskID,
    title: `🔔 '${task.name}'`,
    message: 'You have set this reminder',
  });
}
export const ScheduleNotification = (scheduledTime : Date, repeat: boolean, task: ITask) => {
  CreateChannel();
  if(repeat === true){
    PushNotification.localNotificationSchedule({
      channelId: 'com.alphanixtasksapp',
      id: task.taskID,
      title: `🔔 '${task.name}'`,
      message: 'You have set this reminder',
      actions: ["Completed"],
      ongoing: true,
      repeatType: 'day',
      date: new Date(new Date(Date.now()).setHours(scheduledTime.getHours(),scheduledTime.getMinutes()))
    });
  }else{
    PushNotification.localNotificationSchedule({
      channelId: 'com.alphanixtaskapp',
      id: task.taskID,
      title: `🔔 '${task.name}'`,
      message: 'You have set this reminder',
      actions: ["Completed"],
      ongoing: true,
      date: new Date(new Date(Date.now()).setHours(scheduledTime .getHours(),scheduledTime .getMinutes()))
    });
  }
};

export const CancelNotification = (taskID : any) : void => {
  PushNotification.cancelLocalNotification(taskID);
};