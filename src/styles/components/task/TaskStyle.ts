import { StyleSheet } from "react-native";

export const TaskStyles = StyleSheet.create({
    container: {
        flex: 0.15,
        width: 350,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#232228',
        borderRadius: 15,
        marginTop: 10,
        padding: 8
    },
    
    doneContainer: {
        flex: 0.12,
    },

    titleContainer: {
        flex: 1
    },

    deleteContainer: {
        flex: 0.15,
    },

    title: {
        color: 'white',
        textAlign: "left",
        fontSize: 15
    },

    subTitle: {
        color: 'white',
        textAlign: "left",
        opacity: 0.5,
        fontSize: 12,
    },

    doneTitle: {
        color: 'white',
        opacity: 0.5,
        textDecorationLine: "line-through",
        textAlign: "left"
    },

    doneSubTitle: {
        color: 'white',
        opacity: 0.25,
        textDecorationLine: "line-through",
        textAlign: "left",
        fontSize: 12
    },

    doneCheckbox: {
        color: 'white'
    }
});