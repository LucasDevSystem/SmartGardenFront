import * as React from 'react';
import {Card, Divider, Title, Paragraph} from 'react-native-paper';
import styles from './styles';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
import {CardViewWithImage} from 'react-native-simple-card-view';
import Icon from 'react-native-vector-icons/Entypo';

const CardModel = ({label, imageUrl}) => (
  <CardViewWithImage
    width={Dimensions.get('window').width / 2 - 10}
    source={{
      uri: imageUrl,
    }}
    content={<IconModel temperature={29} water={69} />}
    title={label}
    withBackground={false}
    imageWidth={200}
    imageHeight={100}
    style={styles.miniCardStyle}
    roundedImageValue={50}
    roundedImage={false}
  />
);

export default CardModel;

const IconModel = ({temperature, water}) => (
  <View style={{flex: 10, flexDirection: 'row'}}>
    <Icon name="thermometer">{temperature}</Icon>

    <Icon name="water">{water}</Icon>
  </View>
);
