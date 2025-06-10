import './global.css'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#B23A34" barStyle="light-content" />
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;