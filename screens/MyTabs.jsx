import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from '../screens/HomeNavigator';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import MypageScreen from '../screens/MypageScreen';


const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Mypage</Text>
    </View>
    
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        // inactiveTintColor: '#FFFFFF',
        // activeBackgroundColor: '#33CCFF',
        style: {
          backgroundColor: '#9FEDFF',
        },
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
      }}
    > 
      <Tab.Screen name="Home" component={HomeScreen,HomeNavigator} 
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5 name="home" size={24} color="#FFFFFF"/> 
          ),
        }}
      />
      <Tab.Screen name="Mypage" component={SettingsScreen,MypageScreen} 
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={24} color="#FFFFFF"/> 
            ),
          }}
      />
      
    </Tab.Navigator>
  );
}

export default MyTabs;

