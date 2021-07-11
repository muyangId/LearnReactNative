import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './navigators/RootStackNavigator';
import 'react-native-gesture-handler';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MixReducer from './src/store/reducers/item';


const rootReducer = combineReducers({
  item: MixReducer,
});

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>



    </Provider>

  );
}
