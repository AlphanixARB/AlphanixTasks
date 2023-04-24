import { StyleSheet } from "react-native";

export const SettingUIStyles = StyleSheet.create({
    container: {
        flex: 0.10,
        width: 350,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#232228',
        borderRadius: 15,
        marginTop: 10,
        padding: 8
    },
    
    button: {
        flex: 1,
        height: 60,
        backgroundColor: '#232228'
    },

    contactModalView: {
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
        height: 280
    },

    subjectFieldStyle: {
        width:300,
        paddingLeft: 10,
        backgroundColor: "#2c2b33",
        borderRadius: 5
    },

    messageFieldStyle: {
        width:300,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: "#2c2b33",
        borderRadius: 5
    }
});