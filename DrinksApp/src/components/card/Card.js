import * as React from 'react'  
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native'

const Card = props => {
    return(
        <TouchableOpacity activeOpacity={0.9} style={styles.cardContainer}>
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={{ uri: 'https://okdiario.com/img/2018/07/02/receta-de-cocktail-de-martini-con-limon-1.jpg' }}
            />
        </View>
    <Text style={styles.titleContainer}>{props.children}</Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '95%',
        height: 150,
        shadowColor: 'black',
        justifyContent: 'center',
        shadowRadius: 6,
        elevation: 8,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'black',
        padding: 20,
        overflow: 'hidden',
        margin: 6,
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center"
    },
    imageContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: 'black',
        borderWidth: 0.2,
        overflow: 'hidden',
        margin: 10
    },
    image: {
        width: '100%',
        height: '100%'
    },
    titleContainer: {
        fontSize: 35,
        fontStyle: 'italic',
        fontWeight: 'bold',
        maxWidth: "60%"
    }
})

export default Card