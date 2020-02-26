import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {SearchBar} from 'react-native-elements';

import styles from './styles';
import CardRender from '../../components/cardRender/index';
import getDrinks from '../../redux/DrinksDuck';

const DrinksList = (data, isLoading) => {
  const {search} = '';

  const updateSearch = () => {};

  if (search.length >= 3) {
    getDrinks(search);
  }

  return (
    <View style={styles.container}>
      <View>
        <SearchBar
          onChangeText={updateSearch}
          value={search}
          inputStyle={{backgroundColor: 'white', color: '#000'}}
          containerStyle={{
            backgroundColor: '#ff4d4d',
            borderWidth: 1,
          }}
          placeholderTextColor={'#ff4d4d'}
          inputContainerStyle={{backgroundColor: '#fff'}}
          cancelButtonTitle="Cancel"
          searchIcon={{color: '#000'}}
          placeholder="Search your drink..."
        />
      </View>
      <View>
        <CardRender data={data} />
      </View>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    data: state.data,
    isLoading: state.isLoading,
  };
}

export default connect(mapStateToProps)(DrinksList);
