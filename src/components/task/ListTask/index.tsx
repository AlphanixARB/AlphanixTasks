import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { View, Pressable, Text } from "react-native";
import withObservables from '@nozbe/with-observables';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

import { ITask } from '../../../types/Task';
import { TaskStyles } from '../../../styles/components/task/TaskStyle';
import { handleDeleteTask, handleUpdateTask } from '../../../service/TaskHandler';

interface Props {
  tasks: ITask;
}

function RawListTask({ tasks }: Props) {
  const navigation = useNavigation();
  
  return (
    <View style={ TaskStyles.container }>
        <View style={ TaskStyles.doneContainer}>
          <BouncyCheckbox onPress={() => handleUpdateTask(tasks, 'isCompleted')} isChecked={tasks.isCompleted} fillColor="#ffffff" size={18}/>
        </View>
        <View style={ TaskStyles.titleContainer}>
            <Text style={ tasks.isCompleted === true ? TaskStyles.doneTitle : TaskStyles.title }>
                {tasks.name}
            </Text>
            { tasks.scheduledTime != '' ? 
                <Text style={ tasks.isCompleted === true ? TaskStyles.doneSubTitle : TaskStyles.subTitle }>
                  { moment(new Date(tasks.scheduledTime)).format("hh:mm") }
                </Text>
              : null 
            }        
        </View>
        { tasks.isCompleted === false ? 
            <View style={ TaskStyles.deleteContainer }>
                <Pressable onPress={() => navigation.navigate("EditTask",{
                    name : tasks.name,
                    id : tasks.id,
                    scheduledTime : tasks.scheduledTime,
                    timer : tasks.timer
                  })}>
                    <View>
                      <FontAwesome name={'edit'} size={20} color="white"/>
                    </View>
                </Pressable>
            </View>
        : null}
        { tasks.isCompleted === false ? 
            <View style={ TaskStyles.deleteContainer }>
                <Pressable onPress={() => navigation.navigate("TimerTask",{
                    name : tasks.name,
                    id : tasks.id,
                    timer : tasks.timer
                  })}>
                    <View>
                      <FontAwesome name={'play'} size={20} color="white"/>
                    </View>
                </Pressable>
            </View>
        : null}
        <View style={ TaskStyles.deleteContainer }>
            <Pressable onPress={() => handleDeleteTask(tasks)}>
                <View>
                  <FontAwesome name={'remove'} size={20} color="white"/>
                </View>
            </Pressable>
        </View>
    </View>
  );
}

export const ListTask = withObservables(['tasks'], ({ tasks }) => ({
  tasks,
}))(RawListTask);