import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TaskItem = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onDeleteTask(props.index)}>
      <View style={styles.listItem}>
        <Text>
          No.:{props.index} 内容:{props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#eef4ff',
  },
});

export default TaskItem;
