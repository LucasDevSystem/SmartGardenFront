import * as React from 'react';
import {View} from 'react-native';
import {TextInput, Button, Text, HelperText} from 'react-native-paper';
import styles from './styles';
const Login = ({navigation}) => {
  const [userInput, setUserInput] = React.useState('');
  const [passwordInput, setPasswordInput] = React.useState('');
  const [textResponse, setTextResponse] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  async function login() {
    const password = passwordInput.trim();
    const user = userInput.trim();
  }

  return (
    <View style={styles.formContainer}>
      <View style={styles.formContainer}></View>
      <TextInput
        activeOutlineColor={'#00C9A7'}
        mode="outlined"
        label="Usuario"
        style={styles.textInput}
        onChangeText={user => setUserInput(user)}
      />

      <TextInput
        label="Senha"
        activeOutlineColor={'#00C9A7'}
        mode="outlined"
        secureTextEntry
        style={styles.textInput}
        onChangeText={password => setPasswordInput(password)}
      />
      <HelperText type="error" visible={true}>
        {textResponse}
      </HelperText>
      <Button
        loading={loading}
        disabled={loading}
        style={styles.button}
        mode="contained"
        onPress={() => login()}>
        Login
      </Button>
      <View />
    </View>
  );
};

export default Login;
