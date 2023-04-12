import { View, FlatList, Text, Pressable } from "react-native";
import withObservables from '@nozbe/with-observables';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Q } from "@nozbe/watermelondb";
import React, { useState } from "react";

import { database } from "../../models/database";
import { ListTask } from "./ListTask";
import { ITasks } from "../../types/Task";
import { TaskListStyle } from "../../styles/components/task/TaskList";

const db = database.collections.get('tasks');
const observeTasks = () => db.query(Q.where('isCompleted', false)).observe();
const observeIsCompletedTasks = () => db.query(Q.where('isCompleted', true)).observe();



const enhanceWithTasks = withObservables([], () => ({
  tasks: observeTasks(),
}));

const enhanceWithIsCompletedTasks = withObservables([], () => ({
  tasks: observeIsCompletedTasks(),
}));

const TaskList = ({ tasks }: ITasks) => {
  //const [showUncompletedTasks, setShowUncompletedTasks] = useState(true);
  
  return(
  <View>
    {/* {tasks.length != 0 ?
      <View style={TaskListStyle.container}>
          <Text style={TaskListStyle.text}>Tasks</Text>
          <Pressable style={TaskListStyle.pressable} onPress={() => setShowUncompletedTasks(!showUncompletedTasks)}>
              <FontAwesome name={showUncompletedTasks === true ? 'angle-up': 'angle-down'} size={20} color="white"/>
          </Pressable>
      </View>
    : null}
    {showUncompletedTasks === true ?  */}
    <Text style={TaskListStyle.text}>Tasks</Text>
    <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <ListTask tasks={item} />}
    />
    {/* : null} */}
  </View>
)};

const isCompletedTaskList = ({ tasks }: ITasks) => {
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);
  
  return(
  <View style={{marginTop: 10}}>
      {tasks.length != 0 ? 
          <View style={TaskListStyle.container}>
              <Text style={TaskListStyle.text}>isCompleted</Text>
              <Pressable style={TaskListStyle.pressable} onPress={() => setShowCompletedTasks(!showCompletedTasks)}>
                  <FontAwesome name={showCompletedTasks === true ? 'angle-up': 'angle-down'} size={20} color="white"/>
              </Pressable>
          </View>
      : null}
      {showCompletedTasks === true ? 
        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ListTask tasks={item} />}
        />
      : null}
  </View>
)};

export const TaskListRender = enhanceWithTasks(TaskList);
export const IsCompletedTaskListRender = enhanceWithIsCompletedTasks(isCompletedTaskList);