import * as React from 'react';

import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import {CardViewWithImage} from 'react-native-simple-card-view';
import Icon from 'react-native-vector-icons/Entypo';
import {BottomNavigation} from 'react-native-paper';
import PlantForm from '../plantForm';
import styles from './styles';
import Garden from '../garden';
const ACTIVITY_COLOR = '#02AB8E';
const GardenRoute = () => <Garden></Garden>;
const FormRoute = () => <PlantForm></PlantForm>;

const MainPage = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'garden', title: 'Jardim', icon: 'tree'},
    {key: 'form', title: 'Cadastrar', icon: 'plus'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    garden: GardenRoute,
    form: FormRoute,
  });

  return (
    <BottomNavigation
      barStyle={{backgroundColor: ACTIVITY_COLOR}}
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MainPage;
