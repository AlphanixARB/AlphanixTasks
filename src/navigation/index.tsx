import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

import { EditTaskScreen } from "../screens/tasks/EditTask";
import { TimerTaskScreen } from "../screens/tasks/TimerTask";
import { SettingScreen } from "../screens/setting";
import { HomeScreen } from "../screens/home";


export function Navigation(){
    return(
        <TabNavigator/>
    );
}

const Stack = createNativeStackNavigator();

function StackNavigator() {
    const { t, i18n } = useTranslation();

    return(
        <Stack.Navigator
            screenOptions={{headerShown: true}}
        >
            <Stack.Screen
                name= 'HomeScreen'
                component={ HomeScreen }
                options={{
                    headerShown: false,
                    title: String(moment().format('MMMM Do')),
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

    return(
        <Tab.Navigator
            screenOptions={{headerTintColor: 'black',tabBarStyle: {backgroundColor:'#171719', borderTopWidth: 1, borderTopColor: '#101011'}}}
        >
            <Tab.Screen
                name= 'Home'
                component={ StackNavigator }
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