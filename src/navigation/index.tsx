import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTranslation } from 'react-i18next';

import { EditTaskScreen } from "../screens/tasks/EditTask";
import { TimerTaskScreen } from "../screens/tasks/TimerTask";
import { SettingScreen } from "../screens/setting";
import { HomeScreen } from "../screens/home";
import { AddTaskFormModal } from '../components/task/AddTaskFormModal';
import { TouchableOpacity, View } from 'react-native-ui-lib';
import { Platform } from 'react-native';
import { useState } from 'react';

function EmptyScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      </View>
    );
}

export function Navigation(){
    return(
        <Root/>
    );
}

const Stack = createNativeStackNavigator();

function Root(){
    const { t, i18n } = useTranslation();

    return(
        <Stack.Navigator 
            screenOptions={{headerShown: true}}
        >
            <Stack.Screen
                name= 'HomeScreen'
                component={ TabNavigator }
                options={{
                    headerShown: false,
                    title: 'April 13th',
                    headerTitleStyle: {
                        color: 'white',
                    }, 
                    headerStyle: {
                        backgroundColor: '#171719',
                    } 
                }}
            />

            <Stack.Screen
                name= 'EditTask'
                component={ EditTaskScreen }
                options={{
                    title: String(t("editTaskScreenTitle")),
                    headerTitleStyle: {
                      color: 'white',
                    },
                    headerStyle: {
                      backgroundColor: '#171719',
                    },
                    headerTintColor: 'white'
                }}
            />

            <Stack.Screen
                name= 'TimerTask'
                component={ TimerTaskScreen }
                options={{
                    title: String(t('timerTaskScreenTitle')),
                    fullScreenGestureEnabled: true,
                    headerTitleStyle: {
                      color: 'white',
                    },
                    headerStyle: {
                      backgroundColor: '#171719',
                    },
                    headerTintColor: 'white'
                }}
            />
        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
    const { t, i18n } = useTranslation();
    const [openModal, setOpenModal] = useState(false)

    return(
        <Tab.Navigator
            screenOptions={{headerTintColor: 'black',tabBarStyle: {backgroundColor:'#171719', borderTopWidth: 1, borderTopColor: '#101011'}}}
        >
            <Tab.Screen
                name= 'Home'
                component={ HomeScreen }
                options={{
                    title: String(moment().format('MMMM Do')),
                    headerTitleStyle: {
                    color: 'white',
                    },
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" color={color} size={size} />
                    ),
                    tabBarLabel:() => {return null},
                    headerStyle: {
                    backgroundColor: '#171719',
                    },
                    headerTintColor: 'white'
                }}
            />

            <Tab.Screen name={"AddTaskButton"} component={EmptyScreen} 
                options={{
                    title: "",
                    tabBarIcon: ({ focused }) => (
                        <TouchableOpacity onPress={() => {setOpenModal(!openModal)}}>
                            <View style={{
                                width: 52,
                                height: 52,
                                backgroundColor: "#005EFF",
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: Platform.OS == "android" ? 50 : 30
                            }}>
                                <FontAwesome name={'plus'} size={23} color="white"/>
                            </View>
                            <AddTaskFormModal open={openModal} onClose={() => {setOpenModal(!openModal)}}/>
                        </TouchableOpacity>
                    )
                }}
            />

            <Tab.Screen
                name= {t("setting")}
                component={ SettingScreen }
                options={{
                    headerTitleStyle: {
                      color: 'white',
                    },
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons name="settings-outline" color={color} size={size} />
                    ),
                    tabBarLabel:() => {return null},
                    headerStyle: {
                      backgroundColor: '#171719',
                    },
                    headerTintColor: 'white'
                }}
            />
        </Tab.Navigator>
    );
}