import React from 'react';
import { Provider } from 'react-redux';

import store from './src/store/config';
import AppNavigator from './src/navigation/AppNavigator';

export default App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);
