import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Homepage from '../../screens/homepage';
import RegisterTask from '../../screens/registerTask';

const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <Stack.Navigator
        initialRouteName="Homepage">
        <Stack.Screen
          name="Homepage"
          options={{headerShown: false}}
          component={Homepage} />
        <Stack.Screen
          name="RegisterTask"
          options={{
            headerBackTitleVisible: false,
            title: '',
            headerStyle: {
              backgroundColor: '#CCCCCC'
            }
          }}
          component={RegisterTask} />
      </Stack.Navigator>
    );
  }