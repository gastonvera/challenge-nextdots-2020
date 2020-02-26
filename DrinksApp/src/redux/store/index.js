import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import DrinksReducer from '../DrinksDuck';

const rootReducer = combineReducers({
  drinks: DrinksReducer,
});

function getMiddlewares() {
  const middlewares = [thunk];
  return middlewares;
}

export default function generateStore() {
  let store = createStore(rootReducer, applyMiddleware(...getMiddlewares()));
  return store;
}
