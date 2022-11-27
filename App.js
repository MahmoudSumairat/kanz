import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import BottomNavigator from './src/components/BottomNavigator';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
