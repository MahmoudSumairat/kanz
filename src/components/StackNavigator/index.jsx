import React from 'react';

import {
  stackNavigationList,
  stackNavigationOptions,
} from '../../constants/navigation';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      {stackNavigationList.map(nav => (
        <Stack.Screen
          options={stackNavigationOptions}
          name={nav.name}
          component={nav.page}
        />
      ))}
    </Stack.Navigator>
  );
};

export default Navigator;
