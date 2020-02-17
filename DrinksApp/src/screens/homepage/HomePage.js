import * as React from 'react'
import { View, Text, StyleSheet, Image, } from 'react-native'
import SearchButton from '../../components/searchbutton/SearchButton'


const HomePage = props => {
  return (
    <View style={styles.homeContainer}>
      <Image
        style={styles.imageContainer}
        source={{ uri: 'https://image.flaticon.com/icons/png/512/38/38706.png' }}
      />
      <Text style = {styles.title}>
        <Text style={styles.titleContainer}>Cocktail</Text><Text style={styles.title2Container}>Finder </Text>
      </Text>

      <SearchButton style = {styles.buttonContainer} onPress={() => { props.navigation.navigate('DrinksList') }} >
        Search your favourite cocktail
      </SearchButton>

    </View>
  )
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#66d9ff',
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: "center"
  },
  title: {
    marginBottom: 20
  },
  titleContainer: {
    padding: 35,
    fontSize: 25,
    fontStyle: 'italic'
  },
  title2Container: {
    padding: 35,
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  imageContainer: {
    width: 80,
    height: 80,
    padding: 40
  },
  buttonContainer: {
    paddingTop: 30
  }

})

export default HomePage