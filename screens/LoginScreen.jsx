import React, { useState } from 'react';
import { StyleSheet,
         View,
         Text,
         TextInput,
         Button
        } from 'react-native';


const LoginScreen = (props) => {

  const [inputEmail, setInputEmail] = useState('');
  const [inputPwd, setInputPwd] = useState('');
  const [ButtonVisible, setButtonVisible] = useState(false);

  const Separator = () => {
    return <View style={styles.separator} />;
  };

  const Mailcheck = (text) => {
    if (text !== "" && inputPwd !== "") {
      setInputEmail(text);
      setButtonVisible(true);
      console.log('111111111', text);
    }
    else {
      console.log('222222222', text);
      setInputEmail(text);
      setButtonVisible(false);
    }
  };

  const Pwdcheck = (text) => {
    if (text !== "" && inputEmail !== "") {
      setInputPwd(text);
      setButtonVisible(true);
      console.log('333333333', text);
    }
    else {
      setInputPwd(text);
      setButtonVisible(false);
      console.log('44444444', text);
    }
  };

  return (
    <View style={styles.root} >

      <View style={styles.textContainer}>
        <Text style={styles.label}>メールアドレス</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={(styles.textInput)}
          placeholder='Email'
          keyboardType={'email-address'}
          value={inputEmail}
          onChangeText={(text) => {
            Mailcheck(text);
          }}
        />
      </View>

      <Separator />
      
      <View style={styles.textContainer}>
        <Text style={styles.label}>パスワード</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={(styles.textInput)}
          placeholder='Password'
          secureTextEntry={true}
          value={inputPwd}
          onChangeText={(text) => {
            Pwdcheck(text);
          }}
        />
      </View>

      <Separator />

      {/* <View style={styles.textContainer} >
        <TouchableOpacity
          style={styles.loginButtontyle}          
          onPress={() =>
            props.navigation.navigate('Login')
          }>
          <Text>ログイン</Text>
        </TouchableOpacity>
      </View> */}
      
      <View style={styles.textContainer} >
        <Button
          title="ログイン"
          disabled={!ButtonVisible}
          style={styles.loginButtontyle}          
          onPress={() =>
            props.navigation.navigate('myTabs')
          } />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  textInput: {
    height: 40,
    paddingStart: 8,
    fontSize: 16,
    width:300
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  loginButtontyle: {
    width: '60%',
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

export default LoginScreen;
