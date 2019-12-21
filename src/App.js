
import React from 'react';
import {
  View,
  Text,
 } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './views/Home';
import MovieDetail from './views/MovieDetail';
import Results from './views/Results';

const store = configureStore();
const Stack = createStackNavigator();


const App = () => (
  
  <Provider store={store}>
  <View>
    <Home/>
    <MovieDetail/>
    <Results/>
  </View>
  </Provider>
 
);

export default App;
