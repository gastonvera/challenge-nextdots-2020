import * as React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';

import styles from './styles';

const Card = props => {
  let {drinkImage, drinkName} = props;
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: drinkImage}} />
      </View>
      <Text style={styles.titleContainer}>{drinkName}</Text>
    </TouchableOpacity>
  );
};

export default Card;
