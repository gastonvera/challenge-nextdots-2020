import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import styles from './styles';

const SearchButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.titleButton}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchButton;
