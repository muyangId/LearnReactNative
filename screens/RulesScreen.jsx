import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const RulesScreen = (props) => {
  // console.log('[HomeScreen] props', props);
  
  return (
    <View style={styles.root}>
      <StatusBar style="auto" />
      {/* <Text>Details Screen: params={props.route.params.testName}</Text> */}
      <TouchableOpacity
        style={styles.contentItem}>      
        <Text>本規約は、本サービスの提供条件及び本サービスの利用に関する当社とユーザーとの間の権利義務関係を定めることを目的とし、
            ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。</Text>
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
    backgroundColor: '#EDF4FF',
    borderRadius: 8,
    marginVertical: 8,
    padding: 8,
  },
});

export default RulesScreen;