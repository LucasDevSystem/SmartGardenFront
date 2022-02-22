import * as React from 'react';
import CardModel from './CardModel';
import {View, ScrollView} from 'react-native';
import styles from './styles';
const GARDEN_LIST = [
  {
    label: 'Orquidea',
    imageUrl:
      'https://images.tcdn.com.br/img/img_prod/637895/pacote_1000_de_fim_de_ano_537_17_20201207185608.jpg',
  },
  {
    label: 'Alecrim',
    imageUrl:
      'https://ciclovivo.com.br/wp-content/uploads/2020/08/herbs-5117039_1280.jpg',
  },
  {
    label: 'Salsinha',
    imageUrl:
      'https://mercadobomsucesso.com/wp-content/uploads/2019/11/Salsinha-Benef%C3%ADcios-para-o-cabelo.jpg',
  },
];
const Garden = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {GARDEN_LIST.map((plant, index) => {
            return (
              <CardModel
                key={index}
                label={plant.label}
                imageUrl={plant.imageUrl}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Garden;
