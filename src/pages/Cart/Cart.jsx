import {View, SafeAreaView, ScrollView, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
import {pageStyles} from '../../shared/pageStyles';
import CartItems from '../../components/CartItems/CartItems';
import Text from '../../coreui/Text/Text';
import styles from './styles';
import Button from '../../coreui/Button/Button';
import {useSelector} from 'react-redux';
import UnauthenticatedUser from '../../components/UnauthenticatedUser/UnauthenticatedUser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getCartItems} from '../../API/carts';

const Cart = ({navigation}) => {
  const {isAuthenticated} = useSelector(state => state.auth);
  const [products, setProducts] = useState([]);

  const fetchCartItems = async () => {
    if (isAuthenticated) {
      try {
        const userId = await AsyncStorage.getItem('@uid');
        const products = await getCartItems(userId);
        setProducts(products);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return isAuthenticated ? (
    <View style={{...pageStyles}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/backgrounds/Home.jpg')}
        resizeMode="cover">
        <SafeAreaView>
          <View style={styles.container}>
            <Text customStyles={styles.heading}>What's in the bag</Text>
            <ScrollView style={styles.scrollView}>
              <CartItems products={products} navigation={navigation} />
            </ScrollView>
            <Button textContent="Checkout" />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  ) : (
    <UnauthenticatedUser navigation={navigation} />
  );
};

export default Cart;
