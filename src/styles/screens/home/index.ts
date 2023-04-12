import { StyleSheet } from "react-native";

export const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#171719"
    },
    taskListContainer: {
        flex: 0.99,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    createTaskButtonContainer: {
        position: "absolute",
        alignItems: 'center',
        justifyContent: 'center',
        left: 20,
        right: 20,
        bottom: 0,
        paddingBottom: 40,
      }
});