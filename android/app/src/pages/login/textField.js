import * as React from 'react';
import {TextInput} from 'react-native-paper';

const DEFAULT_VALUE = '';

const TextField = props => {
  const [text, setText] = React.useState(DEFAULT_VALUE);

  if (props.fieldType === 'password') {
    return passwordField();
  }
  if (props.fieldType === 'username') {
    return userNameField();
  }
  function passwordField() {
    return (
      <TextInput
        label="Senha"
        mode="outlined"
        secureTextEntry
        right={<TextInput.Icon name="eye" />}
      />
    );
  }
  function userNameField(callback) {
    return (
      <TextInput
        mode="outlined"
        label="Usuario"
        onChangeText={text => React.useCallback(text)}
      />
    );
  }
};

export default TextField;
