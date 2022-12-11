import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
import Logo from '../../svg/Logo';
import styles from './styles';
import SearchInput from '../../components/SearchInput/SearchInput';
import ProductsList from '../../components/ProductsList/ProductsList';
import {ScrollView} from 'react-native-gesture-handler';
import {getProducts} from '../../API/products';

const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const products = await getProducts();
    setProducts(products);
    console.log('PRODUCTS : ', products);
  };

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
            <ProductsList products={products} navigation={navigation} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
