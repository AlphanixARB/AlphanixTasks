import { StyleSheet } from "react-native";

export const TaskListStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row"
    },

    pressable: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: 'flex-end',
        flex: 1
    },

    text: {
        color: 'white',
        fontWeight: "normal",
        fontSize: 15
    },
});