import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native'

const SearchButton = props => {
  return (
   <TouchableOpacity activeOpacity = {0.8} onPress = {props.onPress} >
       <View style = {styles.buttonContainer}>
            <Text style ={styles.titleButton}>{props.children}</Text>
       </View>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width:'95%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowRadius: 6,
        elevation: 8,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        overflow: 'hidden' 
    },
    titleButton: {
        fontSize: 15,
        fontStyle: 'normal',
        fontFamily: 'open-sans'
    }
})
export default SearchButton
