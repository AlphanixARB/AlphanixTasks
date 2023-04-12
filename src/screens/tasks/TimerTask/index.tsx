import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";

import { TimerTask } from "../../../components/task/TimerTask";
import { TimerTaskStyle } from "../../../styles/components/task/TimerTask";
import { ITask } from "../../../types/Task";

type TaskProps = {
    tasks: ITask;
}

type props = NativeStackScreenProps<TaskProps, 'tasks'>;

export function TimerTaskScreen({ navigation, route }: props) {

    return(
        <View style={ TimerTaskStyle.container }>
            <TimerTask tasks={route.params} />
        </View>
    )
};