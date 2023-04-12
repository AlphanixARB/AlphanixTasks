import { Platform, StyleSheet } from "react-native";

export const CreateTaskButtonStyles = StyleSheet.create({
    button: {
        backgroundColor: '#3263c8',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderColor: 'black',
        borderRadius: 100,
    },
      buttonOpen: {
        backgroundColor: '#3263c8',
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
        height: 165
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
        width: 110,
        height: 40,
        borderRadius: 15,
        textAlign: "center",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c2a32',
    },

    reminderButtonActive: {
        width: 110,
        height: 40,
        borderRadius: 15,
        textAlign: "center",
        alignContent: 'center',
        backgroundColor: '#413F46',
    },

    timerButton: {
        width: 85,
        height: 40,
        borderRadius: 15,
        textAlign: "center",
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#2c2a32',
        marginLeft: 10,
    },

    timerButtonActive: {
        width: 85,
        height: 40,
        borderRadius: 15,
        textAlign: "center",
        backgroundColor: '#413F46',
        marginLeft: 10,
    },

    button: {
        backgroundColor: '#591EFF',
        justifyContent: 'center',
        alignItems: 'center',
        width: 320,
        height: 50,
        borderColor: 'black',
        borderRadius: 15,
        marginTop: 8,
        marginBottom: 4,
        fontWeight: "bold"
    },

    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    text: {
        color: 'white',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});