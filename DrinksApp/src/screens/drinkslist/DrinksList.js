import React from 'react';
import { View, StyleSheet, TextInput, ScrollView } from 'react-native'
import Card from '../../components/card/Card'

const DrinksList = props => {
    const [value, onChangeText] = React.useState('Search')
    return (

        <View style={styles.container}>
            <TextInput
                style={styles.buttonContainer}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
            <ScrollView>
               <Card>Cocktail</Card> 
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#66d9ff',
        flex: 1,
        alignItems: 'center'
    },
    buttonContainer: {
        width: 600,
        maxWidth: '95%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowRadius: 8,
        elevation: 8,
        backgroundColor: 'white',
        borderColor: 'black',
        borderRadius: 10,
        padding: 15,
        overflow: 'hidden',
        marginVertical: 10
    }
})


export default DrinksList