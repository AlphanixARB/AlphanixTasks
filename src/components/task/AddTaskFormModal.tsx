import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View, Pressable, Text, TextInput, Alert } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Modal from "react-native-modal";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { AddTaskFormModalStyles } from '../../styles/components/AddTaskFormModalStyle';
import { handleAddTask } from '../../service/TaskHandler';
import { useTranslation } from 'react-i18next';

export const AddTaskFormModal = ({ open, onClose }) => {
    const [name, setName] = useState('');
    const [modalVisible, setModalVisible] = useState(open);
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [scheduledTime, setScheduledTime] = useState();
    //const [isRepeat, setRepeat] = useState(false);
    const [isReminder, setIsReminder] = useState(false);
    const [isTimer, setIsTimer] = useState(false);
    const [timer, setTimer] = useState<Date>();
    const [isTimePickerVisible, setTimePickerVisible] = useState(false);

    const { t, i18n } = useTranslation();
    
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
      setIsReminder(false);
      setScheduledTime(undefined);
      onClose();
    }

    const onDismiss = React.useCallback(() => {
      setDatePickerVisible(false);
      setIsReminder(false);
    }, [setDatePickerVisible])

    const onConfirm = React.useCallback((date: any) => {
      setDatePickerVisible(false);
      setScheduledTime(date);
      setIsReminder(true);
    }, [setDatePickerVisible, setScheduledTime])

    const onToggleDateVisibleStatus = async () => {
        setDatePickerVisible(true);
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
            <Modal
                animationIn={"slideInUp"}
                isVisible={open}
                onBackdropPress={handleCancelTask}
                style={AddTaskFormModalStyles.container}
                >
                <View>
                    <View style={AddTaskFormModalStyles.modalView }>
                        <View style={AddTaskFormModalStyles.fristSection}>
                            <TextInput
                                style={ AddTaskFormModalStyles.titleTextInput }
                                onChangeText={setName}
                                value={name}
                                numberOfLines={1}
                                autoFocus= {true}
                                focusable= {true}
                                placeholder= {t("namePlaceholder")}
                                placeholderTextColor="#cccbcb" />
                        </View>
                        
                        <View style={{ flexDirection: 'row', marginTop: 3}}>
                              {/* <Pressable onPress={() => setRepeat(!isRepeat)} style={isRepeat === true ? AddTaskFormModalStyles.repeatButtonActive : AddTaskFormModalStyles.repeatButton}>
                                  <Text style={AddTaskFormModalStyles.repeatButton.Text}>
                                    <Feather name={'repeat'} size={20} color="white"/> Repeat</Text>
                              </Pressable> */}
                              <View style={{ justifyContent: 'flex-start',flexDirection: 'row', flex:1, paddingLeft: 22}}>
                                  <Pressable onPress={onToggleDateVisibleStatus} style={isReminder === true ? AddTaskFormModalStyles.reminderButtonActive : AddTaskFormModalStyles.reminderButton}>
                                      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1}}>
                                          <FontAwesome name={'bell-o'} size={20} color="white"/>
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
                                  <Pressable onPress={onToggleTimerVisibleStatus} style={isTimer === true ? AddTaskFormModalStyles.timerButtonActive : AddTaskFormModalStyles.timerButton}>
                                      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1}}>
                                        <MaterialIcons name={'timer'} size={20} color="white"/>
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
                              <View style={{ justifyContent: 'flex-end',flexDirection: 'row', flex:1, paddingRight: 22}}>
                                <Pressable
                                  style={[AddTaskFormModalStyles.button, AddTaskFormModalStyles.buttonClose]}
                                  onPress={AddTask}>
                                      <Text style={AddTaskFormModalStyles.text}>{t("addTask")}</Text>
                                </Pressable>
                              </View>
                        </View>
                    </View>
                </View>
            </Modal>
      </View> 
    );
};