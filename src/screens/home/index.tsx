import { View, StatusBar, FlatList } from "react-native";
import { HomeStyles } from "../../styles/screens/home";
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
            <StatusBar/>
        </View>
    );
};