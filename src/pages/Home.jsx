import {View, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';
import {pageStyles} from '../shared/pageStyles';

const Home = () => {
  return (
    <View style={{...pageStyles}}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
