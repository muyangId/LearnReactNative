import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Chip, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';


const MypageScreen = (props) => {
  
  const [modalVisible, setModalVisible] = useState(false);
  const itemList = useSelector((state) => state.item.itemList);
  const data = itemList[itemList.length - 1].name;
  const Separator = () => {
    return <View style={styles.separator} />;
  }
  const logOut = () => {
    Alert.alert(
      "ログアウト",
      "ログアウトします。よろしいでしょうか？",
      [
        {
          text: "キャンセル",
        },
        { text: "ログアウト", onPress: () => props.navigation.navigate('Login') }
      ]
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.account}>
        <Chip title="アカウント管理"　type="outline" ></Chip>
      </View>
      <View style={styles.information}>
        <Text>登録メールアドレス</Text>
        <Text>{data.inputEmail}</Text>
        <Separator/>
        <Text>パスワード</Text>
        <Text>{data.inputPwd}</Text>
      </View>
      <View style={styles.other}>
        <Chip title="その他"　type="outline"></Chip>
      </View>
      <View style={styles.listItem}>
        <ListItem onPress={() => {props.navigation.navigate('Kaisyajohou')}}>
          <ListItem.Content>
            <ListItem.Title>会社情報</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </View>
      <View style={styles.listItem}>
        <ListItem onPress={logOut}>
          <ListItem.Content>
            <ListItem.Title>ログアウト</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
       </ListItem>
      </View>     
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: 'center', backgroundColor: 'white' },
  account: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: 40,  
    borderRadius: 8,
    marginVertical: 8,
    padding: 8,
    top:-70,

  },
  information: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius:25,
    marginVertical: 10,
    padding: 20,
    margin:20,
    top:-60,
    backgroundColor:'#DDDDDD',
  },
  other: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: 40, 
    borderRadius: 8,
    marginVertical: 8,
    padding: 8,
    top:-60
  },
  listItem: {
    width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // height: 40, 
    top:-40,
    
    borderBottomColor:'#EAEAEA',
    borderBottomWidth:1,
    // fontSize:50
  },
  text: {
    fontSize:15,
    textAlign:'left'
  },
  separator: {
    marginVertical: 15,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default MypageScreen;