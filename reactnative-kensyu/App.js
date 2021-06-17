import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet,
         Button,
         TextInput,
         SafeAreaView,
         FlatList,
         Text,
         Modal,
         View,
         TouchableHighlight,
         Alert} from 'react-native';
import TaskItem from './components/TaskItem';

export default function App() {
  const [inputTask, setInputTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const Separator = () => {
    return <View style={styles.separator} />;
  }

  const handleDeleteTask = (itemIndex) => {
    console.log('index', itemIndex);
    setTasks((prevTask) =>
      prevTask.filter((item, index) => index !== itemIndex),
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      <Separator/>

      <TouchableHighlight
        style={{ ...styles.addButton }}
        onPress={() => {
          setModalVisible(true);  
          setInputTask('');
        }}
      >
        <Text style={styles.textStyle}>タスク追加</Text>
      </TouchableHighlight>

      <Separator/>

      <Text style={styles.titleText}>タスクリスト表示一覧</Text>

      <Modal　visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            
            <TextInput
              style={styles.textInput}
              placeholder={'タスクを入力してください'}
              onChangeText={(text) => {
                 setInputTask(text);
              }}
              value={inputTask}
            />

           <Separator/>
           
           <View style={styles.fixToText}>
             <TouchableHighlight
                style={{ ...styles.addButton}}
                onPress={() => { 
                  if(inputTask !=='') {
                    setModalVisible(!modalVisible);
                    setTasks((prevTask) => [...prevTask, inputTask]); 
                  }
                  else {
                    Alert.alert('入力内容を確認してください。')
                    setModalVisible(modalVisible);
                  } 
                }}
             >
                <Text style={styles.textStyle}>　追　加　</Text>
             </TouchableHighlight>

             <TouchableHighlight><Text>　</Text></TouchableHighlight>

             <TouchableHighlight
                style={{ ...styles.cancelButton }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
             >
                <Text style={styles.textStyle}>キャンセル</Text>
             </TouchableHighlight>
           </View>
           
          </View>
        </View>
      </Modal>

      <FlatList
        style={styles.list}
        keyExtractor={(_item, index) => index.toString()}
        data={tasks}
        renderItem={({item, index}) => (
          <TaskItem title ={item}
                    onDeleteTask={handleDeleteTask}
                    index={index}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    borderWidth:1
    
  },

  titleText: {
    fontSize: 20,
    fontWeight: "bold"

  },
    
  separator: {
    marginVertical: 15,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 60,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 100
  },

  addButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },

  cancelButton: {
    backgroundColor: "green",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

});
