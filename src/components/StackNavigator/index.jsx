import React, {useEffect} from 'react';

import {
  stackNavigationList,
  stackNavigationOptions,
} from '../../constants/navigation';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginAction} from '../../redux/actionCreators/auth';

const Stack = createStackNavigator();

const Navigator = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('@token');
      const uid = await AsyncStorage.getItem('@uid');
      if (token && uid) {
        dispatch(loginAction({token, userId: uid}));
      }
    })();
  }, []);
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
