import { StyleSheet } from "react-native";

export const TimerTaskStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#171719",
        alignItems: 'center',
    },

    circleTimerContainer: {
        marginTop: 75
    },

    centeredView: {
        flex: 0.8,
        justifyContent: "flex-end",
        alignItems: "center",
    },

    text: {
        color: 'white',
        justifyContent: "center",
        textAlign: "center",
        marginTop: 9
    },

    button: {
        width: 140,
        height: 40,
        borderRadius: 15,
        backgroundColor: '#2c2a32',
    }
});