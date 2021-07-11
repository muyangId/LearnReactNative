import React, { useState } from 'react';
import { StyleSheet, Text, Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MyTabs  from '../screens/MyTabs';
import WelcomeScreen from  './../screens/WelcomeScreen';
import RulesScreen from  './../screens/RulesScreen';
import LoginScreen from '../screens/LoginScreen';
import News from '../screens/News';
import KaisyajohouScreen from '../screens/KaisyajohouScreen';

const RootStackNavigator = () => {
  const RootStack = createStackNavigator();
 
  const [testTextInputModalVisible, setTestTextInputModalVisible] =
  useState(false);

  return (

    <RootStack.Navigator
      initialRouteName={'Welcome'}
      mode="card"
      screenOptions={({ navigation }) => ({
        headerTitleAlign: 'center',
        headerStyle: {
          //  backgroundColor: 'tomato',
          borderBottomWidth: 1,
          borderBottomColor: 'dodgerblue',
        },

        // headerTitleが設定されている時、headerTitleStyleとheaderTintColorが効かない
        headerTintColor: 'dodgerblue',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontStyle: 'italic',
          // textDecorationLine: 'line-through',
        },

        // headerTitle: () => <Text style={styles.headerTitle}>タイトル123</Text>,
        headerTitle: () => (<Image source={require('../assets/logo.png')} />),
      })}>

      <RootStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        // initialParams={{
        //   itemId: 1,
        //   code: '345',
        // }}
        options={{
          title: 'Welcome',
          headerTitle: () => <Text style={styles.headerTitle}>ようこそ</Text>,
          // headerRight: () => (
          //   <TouchableOpacity
          //     onPress={() => Alert.alert('headerRight pressed!')}>
          //     <Text style={styles.headerRight}>Info</Text>
          //   </TouchableOpacity>
          // ),
        }}
      />

       <RootStack.Screen
        name="Rules"
        component={RulesScreen}
        // initialParams={{
        //   itemId: 1,
        //   code: '345',
        // }}
        options={{
          title: 'Rules',
          headerTitle: () => <Text style={styles.headerTitle}>規約</Text>,
          // headerRight: () => (
          //   <TouchableOpacity
          //     onPress={() => Alert.alert('headerRight pressed!')}>
          //     <Text style={styles.headerRight}>Info</Text>
          //   </TouchableOpacity>
          // ),
        }}
      />

      <RootStack.Screen
        name="Login"
        component={LoginScreen}
        // initialParams={{
        //   itemId: 1,
        //   code: '345',
        // }}
        options={{
          title: 'Login',
          headerTitle: () => <Text style={styles.headerTitle}>ログイン</Text>,
          // headerRight: () => (
          //   <TouchableOpacity
          //     onPress={() => Alert.alert('headerRight pressed!')}>
          //     <Text style={styles.headerRight}>Info</Text>
          //   </TouchableOpacity>
          // ),
        }}
      />
     <RootStack.Screen
        name="myTabs"
        component={MyTabs}
        // initialParams={{
        //   itemId: 1,
        //   code: '345',
        // }}
        options={{
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: 'dodgerblue',
          },
          //title: 'myTabs',
          //headerTitle: () => <Text style={styles.headerTitle}>ようこそ</Text>,
          // headerRight: () => (
          //   <TouchableOpacity
          //     onPress={() => Alert.alert('headerRight pressed!')}>
          //     <Text style={styles.headerRight}>Info</Text>
          //   </TouchableOpacity>
          // ),
        }}
      />
      <RootStack.Screen
         name="news"
         component={News}
         // initialParams={{
         //   itemId: 1,
         //   code: '345',
         // }}
         options={{
           //title: 'myTabs',
           //headerTitle: () => <Text style={styles.headerTitle}>ようこそ</Text>,
           // headerRight: () => (
           //   <TouchableOpacity
           //     onPress={() => Alert.alert('headerRight pressed!')}>
           //     <Text style={styles.headerRight}>Info</Text>
           //   </TouchableOpacity>
           // ),
         }}
       />
       <RootStack.Screen
          name="Kaisyajohou"
          component={KaisyajohouScreen}
          // initialParams={{
          //   itemId: 1,
          //   code: '345',
          // }}
          options={{
            title: 'Kaisyajohou',
            headerTitle: () => <Text style={styles.headerTitle}>会社情報</Text>,
            // headerRight: () => (
            //   <TouchableOpacity
            //     onPress={() => Alert.alert('headerRight pressed!')}>
            //     <Text style={styles.headerRight}>Info</Text>
            //   </TouchableOpacity>
            // ),
          }}
        />

    </RootStack.Navigator>
    
    
  );

};

const styles = StyleSheet.create({
  headerTitle: { fontSize: 14, fontWeight: 'bold' },
  headerLeft: { marginStart: 10 },
  headerRight: { marginEnd: 10, color: 'dodgerblue' },
});

export default RootStackNavigator;
