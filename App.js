import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootStackNavigator from './navigators/RootStackNavigator';
import MyTabs  from './screens/MyTabs';
import 'react-native-gesture-handler';


export default function App() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
