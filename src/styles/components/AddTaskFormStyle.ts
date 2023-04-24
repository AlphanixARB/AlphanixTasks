import { Platform, StyleSheet } from "react-native";

export const CreateTaskButtonStyles = StyleSheet.create({
    button: {
        backgroundColor: '#005EFF',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderColor: 'black',
        borderRadius: 100,
    },
      buttonOpen: {
        backgroundColor: '#005EFF',
      },
      buttonClose: {
        backgroundColor: '#3263c8',
      },
});

export const AddTaskFormStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalView: {
        margin: 0,
        backgroundColor: '#232228',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: 360,
        height: 155
    },

    fristSection:{
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 5
    },

    titleTextInput: {
        height: 40,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 15,
        paddingLeft: 10,
        flex: 0.87,
        backgroundColor: '#2c2b33',
        color: 'white',
        ...Platform.select({
        android: {
            height: 40
        }
        }),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },

    repeatButton: {
        width: 90,
        height: 40,
        borderRadius: 15,
        textAlign: "center",
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: '#2c2a32',
        Text: {
            color: 'white',
            justifyContent: "center",
            textAlign: "center",
            marginTop: 9
        }
    },

    repeatButtonActive: {
        width: 90,
        height: 40,
        borderRadius: 15,
        textAlign: "center",
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: '#413F46',
        Text: {
            color: 'white',
            justifyContent: "center",
            textAlign: "center",
            marginTop: 9
        }
    },

    reminderButton: {
        width: 40,
        height: 40,
        borderRadius: 15,
        textAlign: "center",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c2a32',
    },

    reminderButtonActive: {
        width: 40,
        height: 40,
        borderRadius: 15,
        textAlign: "center",
        alignContent: 'center',
        backgroundColor: '#413F46',
    },

    timerButton: {
        width: 40,
        height: 40,
        borderRadius: 15,
        textAlign: "center",
        alignItems: 'center',
        justifyContent: "center",
        marginLeft: 10,
        backgroundColor: '#2c2a32'
    },

    timerButtonActive: {
        width: 40,
        height: 40,
        borderRadius: 15,
        textAlign: "center",
        backgroundColor: '#413F46',
        marginLeft: 10,
    },

    button: {
        backgroundColor: '#005EFF',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 40,
        borderColor: 'black',
        borderRadius: 15,
        fontWeight: "bold"
    },

    buttonOpen: {
        backgroundColor: '#005EFF',
    },
    buttonClose: {
        backgroundColor: '#005EFF',
    },
    text: {
        color: 'white',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});