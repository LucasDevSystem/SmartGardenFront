import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 25,
  },
  miniCardStyle: {
    shadowColor: '#000000',
    shadowOffsetWidth: 2,
    shadowOffsetHeight: 2,
    shadowOpacity: 0.1,
    hadowRadius: 5,
    bgColor: '#ffffff',
    padding: 5,
    margin: 5,
    borderRadius: 3,
    elevation: 3,
    width: Dimensions.get('window').width / 2 - 10,
  },
});

export default styles;
