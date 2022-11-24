/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/pages/Home';
import Cart from './src/pages/Cart';
import Wishlist from './src/pages/Wishlist';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Profile from './src/pages/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Navigator = () => (
  <Stack.Navigator>
    <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
    <Stack.Screen options={{headerShown: false}} name="Cart" component={Cart} />
    <Stack.Screen
      options={{headerShown: false}}
      name="Wishlist"
      component={Wishlist}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name="Login"
      component={Login}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name="Register"
      component={Register}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name="Profile"
      component={Profile}
    />
  </Stack.Navigator>
);

const screenOptions = {
  tabBarStyle: {
    backgroundColor: '#fafafa',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#eaeaea',
  },
};

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator {...{screenOptions}}>
          <Tab.Screen
            name="Home"
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarActiveTintColor: '#DA5B6E',
              tabBarInactiveTintColor: '#BBBABA',
              tabBarIcon: ({color}) => {
                return <Icon name="home" color={color} size={25} />;
              },
            }}
            component={Navigator}
          />
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarActiveTintColor: '#DA5B6E',
              tabBarInactiveTintColor: '#BBBABA',
              tabBarIcon: ({color}) => (
                <Icon name="shoppingcart" color={color} size={25} />
              ),
            }}
            name="Cart"
            component={Cart}
          />
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarActiveTintColor: '#DA5B6E',
              tabBarInactiveTintColor: '#BBBABA',
              tabBarIcon: ({color}) => (
                <Icon name="hearto" color={color} size={25} />
              ),
            }}
            name="Wishlist"
            component={Wishlist}
          />
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarActiveTintColor: '#DA5B6E',
              tabBarInactiveTintColor: '#BBBABA',
              tabBarIcon: ({color}) => (
                <Icon name="user" color={color} size={25} />
              ),
            }}
            name="Profile"
            component={Profile}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
