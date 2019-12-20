

import React from 'react';
import {

  View,
  Text,

} from 'react-native';
import Home from './views/Home';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
const store = configureStore();




const App = () => (
  <Provider store={store}>
  <View>
    <Home/>
  </View>
  </Provider>
);




export default App;
