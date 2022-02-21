import * as React from 'react';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';
import {View} from 'react-native';

const LOGO_TEXT = {first: 'Smart', last: 'Garden'};
const LOGO_SUB_TEXT = 'Controle de onde quiser :)';
const ICON = 'tree';
const WHITE = '#FFFFFF';

const Logo = () => (
  <View style={styles.logoContainer}>
    <Text style={styles.logoText} color={WHITE}>
      {LOGO_TEXT.first}
      <Icon name={ICON} style={styles.icon} />
      {LOGO_TEXT.last}
    </Text>
    <Text style={styles.logoSubText} color={WHITE}>
      {LOGO_SUB_TEXT}
    </Text>
  </View>
);

export default Logo;
