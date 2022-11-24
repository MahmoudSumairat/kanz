import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home';
import Cart from '../../pages/Cart';

const Tab = createBottomTabNavigator();

const NavTab = ({navigator}) => {
  return (
    <View>
      <Tab.Navigator>
        <Tab.Screen
          options={{headerShadowVisible: false}}
          name="Home"
          component={navigator}
        />
        <Tab.Screen name="Cart" component={Cart} />
      </Tab.Navigator>
    </View>
  );
};

export default NavTab;
