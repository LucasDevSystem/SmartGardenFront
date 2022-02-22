// by Lucas Emanuel 01/01/2022
import * as React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Logo from './Logo';
import styles from './styles';

const GRADIENT_COLORS = ['#3ADDC2', '#00C9A7', '#02AB8E'];
const ACTIVITY_COLOR = '#676E6E';

const Loading = ({navigation}) => {
  React.useEffect(() => {
    async function sleep2s() {
      await sleep(2000);
      navigation.navigate('Login', {name: 'Login'});
    }
    sleep2s();
  });

  return (
    <View style={styles.container}>
      <LinearGradient colors={GRADIENT_COLORS} style={styles.gradient}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
      </LinearGradient>
    </View>
  );
};
export default Loading;

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
