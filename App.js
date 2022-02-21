import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './android/app/src/pages/login/index';
import MainPage from './android/app/src/pages/main/index';
import Loading from './android/app/src/pages/loading/index';
import PlantForm from './android/app/src/pages/plantForm';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={MainPage} />
        <Stack.Screen name="Cadastro" component={PlantForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
