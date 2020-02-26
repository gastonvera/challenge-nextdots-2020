import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import DrinksList from '../screens/drinkslist/index';
import HomePage from '../screens/homepage/index';

const MainNavigator = createStackNavigator(
  {
    HomePage: HomePage,
    DrinksList: DrinksList,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(MainNavigator);
