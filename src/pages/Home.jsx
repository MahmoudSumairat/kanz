import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/colors';
import {pageStyles} from '../shared/pageStyles';

const Home = ({navigation}) => {
  navigation.navigate('Login');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{...pageStyles}}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
