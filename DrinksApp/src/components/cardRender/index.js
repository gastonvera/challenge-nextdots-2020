import React from 'react';
import {FlatList} from 'react-native';

import Card from '../card/index';
//import styles from './styles';

const CardRender = props => {
  let {data} = props;
  return (
    <FlatList
      data={data.drinks}
      keyExtractor={item => item.idDrink}
      renderItem={({item}) => (
        <Card drinkName={item.strDrink} drinkImage={item.strDrinkThumb} />
      )}
    />
  );
};

export default CardRender;
