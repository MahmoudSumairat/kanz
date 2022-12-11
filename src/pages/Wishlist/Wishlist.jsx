import {ImageBackground, SafeAreaView, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {pageStyles} from '../../shared/pageStyles';
import Text from '../../coreui/Text/Text';
import styles from './styles';
import WishlistItems from '../../components/WishlistItems/WishlistItems';
import Button from '../../coreui/Button/Button';
import {useSelector} from 'react-redux';
import UnauthenticatedUser from '../../components/UnauthenticatedUser/UnauthenticatedUser';
import {getWishlistItems} from '../../API/wishlists';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Wishlist = ({navigation}) => {
  const {isAuthenticated} = useSelector(state => state.auth);
  const [products, setProducts] = useState([]);

  const fetchWishlistItems = async () => {
    if (isAuthenticated) {
      const userId = await AsyncStorage.getItem('@uid');
      const products = await getWishlistItems(userId);
      setProducts(products);
    }
  };

  useEffect(() => {
    fetchWishlistItems();
  }, []);

  return isAuthenticated ? (
    <View style={{...pageStyles}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/backgrounds/Home.jpg')}
        resizeMode="cover">
        <SafeAreaView>
          <View style={styles.container}>
            <Text customStyles={styles.heading}>Wishlist</Text>
            <ScrollView style={styles.scrollView}>
              <WishlistItems products={products} navigation={navigation} />
            </ScrollView>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  ) : (
    <UnauthenticatedUser navigation={navigation} />
  );
};

export default Wishlist;
