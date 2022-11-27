import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import BottomNavigator from './src/components/BottomNavigator';
import {COLORS} from './src/constants/colors';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.WHITE}}>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
