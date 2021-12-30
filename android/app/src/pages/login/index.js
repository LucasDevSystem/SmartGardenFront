import * as React from 'react';
import {Button, View} from 'react-native';

import {TextInput} from 'react-native-paper';
const Login = ({navigation}) => {
  let username;

  function validate(userValue, passwordValue) {
    const password = passwordValue.trim();
    const user = userValue.trim();

    console.log(username);
  }

  return (
    <View>
      <TextInput label="Senha" mode="outlined" secureTextEntry />
      <TextInput mode="outlined" label="Usuario" />
      <Button title="login" onPress={() => validate('aa', '')} />
    </View>
  );
};
export default Login;
