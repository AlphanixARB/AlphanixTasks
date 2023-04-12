import { StyleSheet } from "react-native";

export const EditTaskStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#171719",
        alignItems: 'center',
    },

    NameTextInput:{
        height: 50,
        width: 350,
        backgroundColor: '#232228',
        color: 'white',
        borderRadius: 10,
        borderWidth: 0.75,
        marginTop: 10,
        paddingLeft: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },

    button: {
        marginTop: 10,
        width: 180,
        height: 40,
        borderRadius: 15,
        textAlign: "center",
        alignContent: 'center',
        backgroundColor: '#2c2a32',
        marginLeft: 10,
    },

    text:{
        color: 'white',
        justifyContent: "center",
        textAlign: "center",
        marginTop: 9
    }
});