import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";

import { EditTask } from "../../../components/task/EditTask";
import { EditTaskStyle } from "../../../styles/components/task/EditTask";
import { ITask } from "../../../types/Task";

type TaskProps = {
    tasks: ITask;
}

type props = NativeStackScreenProps<TaskProps, 'tasks'>;

export function EditTaskScreen({ navigation, route }: props) {

    return(
        <View style={ EditTaskStyle.container }>
            <EditTask tasks={route.params} />
        </View>
    )
};