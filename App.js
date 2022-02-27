import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNav from './src/navigation';
import store from './src/redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar />
        <RootNav />
      </NavigationContainer>
    </Provider>
  );
};

export default App;