import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import React from 'react';
import Logo from '../../svg/Logo';
import styles from './styles';
import SearchInput from '../../components/SearchInput/SearchInput';

const Home = () => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/backgrounds/Home.jpg')}
      resizeMode="cover">
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <SearchInput />
        <View style={styles.logoContainer}>
          <Text>Home</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
