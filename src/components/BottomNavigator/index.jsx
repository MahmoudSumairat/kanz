import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  tabNavigationList,
  screenOptions,
  tabNavigationOptions,
} from '../../constants/navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import {useRoute} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const NavTab = props => {
  return (
    <Tab.Navigator {...{screenOptions}}>
      {tabNavigationList.map(nav => (
        <Tab.Screen
          name={nav.name}
          options={{
            ...tabNavigationOptions,
            tabBarIcon: ({color}) => {
              return <Icon name={nav.iconName} color={color} size={25} />;
            },
          }}
          component={nav.page}
        />
      ))}
    </Tab.Navigator>
  );
};

export default NavTab;
