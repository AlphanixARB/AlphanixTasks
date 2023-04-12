import { View, StatusBar, FlatList } from "react-native";
import { HomeStyles } from "../../styles/screens/home";
import { AddTaskForm } from "../../components/task/AddTaskForm";
import { TaskListRender, IsCompletedTaskListRender } from "../../components/task/TaskList";

export function HomeScreen() {
    
    return (
        <View style={ HomeStyles.container }>
            <View style={ HomeStyles.taskListContainer }>
                <FlatList
                    ListHeaderComponent={TaskListRender}
                    ListFooterComponent={IsCompletedTaskListRender}>
                </FlatList>
            </View>
            <View style={ HomeStyles.createTaskButtonContainer }>
                <AddTaskForm/>
            </View>
            <StatusBar/>
        </View>
    );
};