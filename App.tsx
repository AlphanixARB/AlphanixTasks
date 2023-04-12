import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import moment from 'moment';

import { HomeScreen } from './src/screens/home';
import { EditTaskScreen } from './src/screens/tasks/EditTask';
import { TimerTaskScreen } from './src/screens/tasks/TimerTask';

const Stack = createNativeStackNavigator();

export default function App() {
  const day = new Date()
  
  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName={ moment().format('MMMM Do') }>
            <Stack.Screen
              name= { moment().format('MMMM Do') }
              component={ HomeScreen }
              options={{
              headerTitleStyle: {
                color: 'white',
              }, 
              headerStyle: {
                backgroundColor: '#171719',
              } }}
            />
            <Stack.Screen
              name="EditTask"
              component={ EditTaskScreen }
              options={{
                title: 'Edit Task',
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
              name="TimerTask"
              component={ TimerTaskScreen }
              options={{
                title: 'Timer Task',
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
    </NavigationContainer>
  );
}