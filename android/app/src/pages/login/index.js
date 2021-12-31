import * as React from 'react';
import {View} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';
import styles from './styles';
const axios = require('axios');
const AUTH_URL = 'http://192.168.18.179:5000/sigin';

const Login = ({navigation}) => {
  const [userInput, setUserInput] = React.useState('');
  const [passwordInput, setPasswordInput] = React.useState('');
  const [textResponse, setTextResponse] = React.useState('');

  async function login() {
    const password = passwordInput.trim();
    const user = userInput.trim();
    const authResponse = await userAuthentication(user, password);
    processAuthResponse(authResponse);
    //setTextResponse(authResponse);
  }
  function processAuthResponse(authResponse) {
    console.log(authResponse.data);
    if (authResponse.data.status === 'loged') {
      // save token in local storage
      saveLocalToken();
    }
  }
  return (
    <View style={styles.formContainer}>
      <Text>{textResponse}</Text>
      <TextInput
        mode="outlined"
        label="Usuario"
        onChangeText={user => setUserInput(user)}
      />
      <TextInput
        label="Senha"
        mode="outlined"
        secureTextEntry
        onChangeText={password => setPasswordInput(password)}
      />
      <Button style={styles.button} mode="contained" onPress={() => login()}>
        Login
      </Button>
    </View>
  );
};
async function userAuthentication(user, password) {
  const response = await axios.post(AUTH_URL, {
    userName: user,
    password: password,
  });
  return response;
}
export default Login;
