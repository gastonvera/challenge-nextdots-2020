import axios from 'axios';

const drinkService = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?',
});

const searchDrinks = drinkName => {
  return drinkService.get(`s=${drinkName}`);
};

export {searchDrinks};
