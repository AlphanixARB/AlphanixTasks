import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View, Pressable, Text, TextInput, Alert } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Modal from "react-native-modal";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { CreateTaskButtonStyles, AddTaskFormStyles } from '../../styles/components/AddTaskFormStyle';
import { requestNotificationPermission } from '../../service/Permission';
import { handleAddTask } from '../../service/TaskHandler';

export const AddTaskForm = () => {
    const [name, setName] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [scheduledTime, setScheduledTime] = useState();
    //const [isRepeat, setRepeat] = useState(false);
    const [isReminder, setReminder] = useState(false);
    const [isTimer, setIsTimer] = useState(false);
    const [timer, setTimer] = useState<Date>();
    const [isTimePickerVisible, setTimePickerVisible] = useState(false);

    async function AddTask() {  
        if( name != ''){
          // await database.write(async () => {
          //   await database.get('tasks').create((task) => {
          //     task.name = name;
          //     task.isCompleted = false;
          //     if( scheduledTime != null ){
          //       task.scheduledTime = String(scheduledTime);
          //       ScheduleNotification(scheduledTime, false, task);
          //     }if ( scheduledTime === undefined ){
          //       task.scheduledTime = '';
          //       console.log(1)
          //     }
          //   });
          // });
          if(timer != undefined){
            handleAddTask(name, scheduledTime, timer);
          }else{
            handleAddTask(name, scheduledTime);
          }
          
          handleCancelTask();
        }else{
            return(
              Alert.alert('Error', 'You must fill in the name field', [
                {text: 'OK'},
              ])
            )
        }  
    }

    const handleCancelTask = () => {
      setModalVisible(!modalVisible);
      setName('');
      setDatePickerVisible(false);
      setTimer(undefined);
      setIsTimer(false);
      setScheduledTime(undefined);
    }

    const onDismiss = React.useCallback(() => {
      setDatePickerVisible(false);
      setReminder(false);
    }, [setDatePickerVisible])

    const onConfirm = React.useCallback((date: any) => {
      setDatePickerVisible(false);
      setScheduledTime(date);
      setReminder(true);
    }, [setDatePickerVisible, setScheduledTime])

    const onToggleDateVisibleStatus = async () => {
      const permission = await requestNotificationPermission();
      if(permission === true){
        setDatePickerVisible(true);
      }else{
        Alert.alert("You cann't use reminder");
      }
    }

    //Tiemr
    const onDismissTimer = React.useCallback(() => {
      setTimePickerVisible(false);
      setIsTimer(false);
      console.log(isTimer)
    }, [setTimePickerVisible, setIsTimer])

    const onConfirmTimer = React.useCallback((date: Date) => {
      setTimePickerVisible(false);
      setIsTimer(true);
      console.log(isTimer);
      setTimer(new Date(new Date(Date.now()).setHours(date.getHours(),date.getMinutes())));
    }, [setTimePickerVisible, setTimer, setIsTimer])

    const onToggleTimerVisibleStatus = async () => {
      setTimePickerVisible(true);
    }

    return (
        <View>
          <Pressable
              style={[CreateTaskButtonStyles.button, CreateTaskButtonStyles.buttonOpen]}
              onPress={() => setModalVisible(true)}
              >
              <View>
                <FontAwesome name={'plus'} size={20} color="white"/>
              </View>
          </Pressable>
          <View>
            <Modal
                animationIn={"slideInUp"}
                isVisible={modalVisible}
                onBackdropPress= {handleCancelTask}
                style={AddTaskFormStyles.container}
                >
                <View>
                    <View style={AddTaskFormStyles.modalView }>
                        <View style={AddTaskFormStyles.fristSection}>
                            <TextInput
                                style={ AddTaskFormStyles.titleTextInput }
                                onChangeText={setName}
                                value={name}
                                numberOfLines={1}
                                autoFocus= {true}
                                focusable= {true}
                                placeholder="Enter new task name"
                                placeholderTextColor="#cccbcb" />
                        </View>
                        
                        <View style={{ flexDirection: 'row', marginTop: 3}}>
                              {/* <Pressable onPress={() => setRepeat(!isRepeat)} style={isRepeat === true ? AddTaskFormStyles.repeatButtonActive : AddTaskFormStyles.repeatButton}>
                                  <Text style={AddTaskFormStyles.repeatButton.Text}>
                                    <Feather name={'repeat'} size={20} color="white"/> Repeat</Text>
                              </Pressable> */}
                              <Pressable onPress={onToggleDateVisibleStatus} style={isReminder === true ? AddTaskFormStyles.reminderButtonActive : AddTaskFormStyles.reminderButton}>
                                  <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1}}>
                                      <Text style={AddTaskFormStyles.text}>
                                      <FontAwesome name={'bell-o'} size={20} color="white"/> Reminder</Text>
                                  </View>
                                  <View>
                                      <DateTimePickerModal
                                        isVisible={isDatePickerVisible}
                                        mode="time"
                                        is24Hour={true}
                                        date={new Date()}
                                        onConfirm={onConfirm}
                                        onCancel={onDismiss}
                                      />
                                  </View>
                              </Pressable>
                              <Pressable onPress={onToggleTimerVisibleStatus} style={isTimer === true ? AddTaskFormStyles.timerButtonActive : AddTaskFormStyles.timerButton}>
                                  <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1}}>
                                    <MaterialIcons name={'timer'} size={20} color="white"/>
                                      <Text style={AddTaskFormStyles.text}>
                                       Timer</Text>
                                  </View>
                                  <View>
                                      <DateTimePickerModal
                                        isVisible={isTimePickerVisible}
                                        mode="time"
                                        date={new Date()}
                                        onConfirm={onConfirmTimer}
                                        onCancel={onDismissTimer}
                                      />
                                  </View>
                              </Pressable>
                        </View>

                        <View>
                            <Pressable
                                style={[AddTaskFormStyles.button, AddTaskFormStyles.buttonClose]}
                                onPress={AddTask}>
                                    <Text style={AddTaskFormStyles.text}>Add</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
          </View>
      </View> 
    );
};