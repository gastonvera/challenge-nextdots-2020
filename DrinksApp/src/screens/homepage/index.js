import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import SearchButton from '../../components/searchbutton/index';
import styles from './styles';

const HomePage = props => {
  return (
    <View style={styles.homeContainer}>
      <Image
        style={styles.imageContainer}
        source={{uri: 'https://image.flaticon.com/icons/png/512/38/38706.png'}}
      />
      <Text style={styles.title}>
        <Text style={styles.titleContainer}>Cocktail</Text>
        <Text style={styles.title2Container}>Finder </Text>
      </Text>

      <SearchButton
        style={styles.buttonContainer}
        onPress={() => {
          props.navigation.navigate('DrinksList');
        }}>
        Search your favourite cocktail
      </SearchButton>
    </View>
  );
};

export default HomePage;
