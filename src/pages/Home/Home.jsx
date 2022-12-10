import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import React from 'react';
import Logo from '../../svg/Logo';
import styles from './styles';
import SearchInput from '../../components/SearchInput/SearchInput';
import ProductsList from '../../components/ProductsList/ProductsList';
import {ScrollView} from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/backgrounds/Home.jpg')}
      resizeMode="cover">
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View style={styles.logoContainer}>
            <Logo />
          </View>
          <SearchInput />
          <View style={styles.productsList}>
            <ProductsList navigation={navigation} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
