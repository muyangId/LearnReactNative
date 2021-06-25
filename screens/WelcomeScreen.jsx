import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const WelcomeScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style="auto" />
      {/* <Text>Details Screen: params={props.route.params.testName}</Text> */}
      <Text>ようこそ ! </Text>
      <Text>JHC Newsアプリようこそ ! </Text>
      <Text>頑張って作ってみてください!</Text>
      <TouchableOpacity
        style={styles.contentItem}
        onPress={() =>
          props.navigation.navigate('Login')
        }>
        <Text>次へ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: 'center', backgroundColor: 'white' },
  contentItem: {
    width: '92%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#C194FF',
    borderRadius: 8,
    marginVertical: 8,
    padding: 8,
    bottom:-200
  },
});

export default WelcomeScreen;