import {StyleSheet} from 'react-native';
import {red100} from 'react-native-paper/lib/typescript/styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    padding: 30,
  },

  icon: {
    fontSize: 25,
  },
  button: {
    backgroundColor: '#00C9A7',

    justifyContent: 'center',
  },
  formContainer: {
    width: '100%',
    top: 150,
    maxWidth: 450,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
  },

  textInput: {
    justifyContent: 'center',
  },
});

export default styles;
