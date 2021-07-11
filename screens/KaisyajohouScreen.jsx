import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const KaisyajohouScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style="auto" />
      <Text>会社情報。。。。。。。。。。。 ! </Text>
      <Text>。。。。。。。。。。。。。。。</Text>
      <Text>。。。。。。。。。。。。。。。</Text>
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

export default KaisyajohouScreen;