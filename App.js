import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import BottomNavigator from './src/components/BottomNavigator';
import {COLORS} from './src/constants/colors';
import StackNavigator from './src/components/StackNavigator';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
