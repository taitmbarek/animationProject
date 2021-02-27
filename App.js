/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/store';
import AppRoot from './src/navigation/AppRoot';
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppRoot />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
