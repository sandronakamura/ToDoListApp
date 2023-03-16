import React from 'react';
import {StatusBar} from 'react-native';
import MyStack from './routes/stack';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return ( 
    <NavigationContainer>
      <StatusBar backgroundColor={'#99c9ff'} />
      <MyStack />
    </NavigationContainer>
  );
};

export default App;