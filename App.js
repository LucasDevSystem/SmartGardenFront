import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './android/app/src/pages/login/index';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Login}
          options={{ title: 'Welcome' }}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};
  export default App;