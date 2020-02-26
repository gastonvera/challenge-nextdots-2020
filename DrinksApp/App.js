import * as React from 'react';
import {Provider} from 'react-redux';

import MainNavigation from '../DrinksApp/src/navigation/MainNavigation';
import generateStore from './src/redux/store/index';

let store = generateStore();

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
