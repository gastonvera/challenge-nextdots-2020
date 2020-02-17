import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import DrinksList from '../screens/drinkslist/DrinksList'
import HomePage from '../screens/homepage/HomePage'


const MainNavigator = createStackNavigator({
    HomePage: HomePage,
    DrinksList: DrinksList
})

export default createAppContainer(MainNavigator)