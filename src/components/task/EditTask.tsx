import { useState } from 'react';
import { View, TextInput, Text, Pressable, Alert} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import React from 'react';
import moment from 'moment';

import { EditTaskStyle } from '../../styles/components/task/EditTask';
import { database } from '../../models/database';
import { ITask } from '../../types/Task';
import { CancelNotification, ScheduleNotification } from '../../service/Notifications';
import { HashCode } from '../../service/Hash';


interface Props {
    tasks: ITask;
}

export function EditTask ({ tasks }: Props) {
    const [name, setName] = useState('');
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [isTimerPickerVisible, setTimerPickerVisible] = useState(false);
    
    async function onToggleName() {
        await database.write(async () => {
          const task = (await database
            .get('tasks')
            .find(tasks.id)) as any;
          await task.update(() => {
              task.name = name;
          });
        });
    }

    async function onToggleScheduledTime(date:any) {
        await database.write(async () => {
          const task = (await database
            .get('tasks')
            .find(tasks.id)) as any;
          await task.update(() => {
              task.scheduledTime = String(date);
              CancelNotification(HashCode(task.id));
              ScheduleNotification(date, false, tasks);
          });
        });
    }

    const onDismiss = React.useCallback(() => {
        setDatePickerVisible(false)
    }, [setDatePickerVisible])

    const onConfirm = React.useCallback((date: any) => {
        setDatePickerVisible(false);
        onToggleScheduledTime(date);
    }, [setDatePickerVisible])
  
    const onToggleDateVisibleStatus = async () => {
        setDatePickerVisible(true);
        setDatePickerVisible(true);
    }

    //Timer Edit
    async function onToggleTimer(date:any) {
        await database.write(async () => {
          const task = (await database
            .get('tasks')
            .find(tasks.id)) as any;
          await task.update(() => {
              task.timer = String(date);
          });
        });
    }

    const onDismissTimer = React.useCallback(() => {
        setTimerPickerVisible(false)
    }, [setTimerPickerVisible])

    const onConfirmTimer = React.useCallback((date: any) => {
        setTimerPickerVisible(false);
        onToggleTimer(date);
    }, [setTimerPickerVisible])
    
    const onToggleTimerVisibleStatus = async () => {
        setTimerPickerVisible(true);
    }

    return(
        <View>
            <View>
                <Text style={{color:'white'}}>Task Name</Text>
            </View>
            <TextInput
                    style={ EditTaskStyle.NameTextInput }
                    onChangeText={setName}
                    onEndEditing={onToggleName}
                    defaultValue={ tasks.name }
                    placeholder="Enter new task name"/>
            <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={EditTaskStyle.text}>scheduledTime</Text>
                    <Pressable onPress={onToggleDateVisibleStatus} style={EditTaskStyle.button}>
                        <View>
                            <Text style={EditTaskStyle.text}>{  tasks.scheduledTime === '' ? 'Not Set ScheduledTime': moment(new Date(tasks.scheduledTime)).format("hh:mm") }</Text>
                        </View>
                        <View>
                            <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="time"
                            is24Hour={true}
                            onConfirm={onConfirm}
                            onCancel={onDismiss}
                            />
                        </View>
                    </Pressable>
                </View>
                
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={EditTaskStyle.text}>Timer</Text>
                    <Pressable onPress={onToggleTimerVisibleStatus} style={EditTaskStyle.button}>
                        <View>
                            <Text style={EditTaskStyle.text}>{ tasks.timer === '' ? 'Not Set Timer': moment(new Date(tasks.timer)).format("hh:mm") }</Text>
                        </View>
                        <View>
                            <DateTimePickerModal
                                isVisible={isTimerPickerVisible}
                                mode="time"
                                is24Hour={true}
                                onConfirm={onConfirmTimer}
                                onCancel={onDismissTimer}
                            />
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}