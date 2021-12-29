
import * as React from 'react';
import { Button,View } from 'react-native';
import TextField  from './textField';
const Login = ({ navigation }) => {
 let username;






function validate (userValue , passwordValue) {
   const password  = passwordValue;
   const user = userValue;
   console.log(username);




}


    return (
      
      <View>

       <TextField
        fieldType = 'username'/>
       <TextField
        fieldType = 'password'
        onChangeText = {() =>console.log()}/>
      <Button title='login'  onPress={  () => validate('aa','')}/> 
      </View>
      
);
  };
  export default Login;