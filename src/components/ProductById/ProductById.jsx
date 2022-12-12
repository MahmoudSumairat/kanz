import {View, Pressable, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Button from '../../coreui/Button/Button';
import Icon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Text from '../../coreui/Text/Text';
import {COLORS} from '../../constants/colors';
import {getProductDetails} from '../../API/products';
import {
  addItemToWishlist,
  getWishlistItems,
  removeItemFromWishlist,
} from '../../API/wishlists';
import {addItemToCart, getCartItems, removeItemFromCart} from '../../API/carts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductById = ({navigation, route}) => {
  const [productDetails, setProductDetails] = useState({});
  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onBackPress = () => {
    navigation.pop();
  };

  const fetchProductDetails = async () => {
    if (route.params.id) {
      try {
        const userId = await AsyncStorage.getItem('@uid');
        const productData = await getProductDetails(route.params.id);
        setProductDetails(productData);
        const wishlistItems = await getWishlistItems(userId);
        setAddedToWishlist(
          wishlistItems.find(item => item.id === route.params.id),
        );
        const cartItem = await getCartItems(userId);
        setAddedToCart(cartItem.find(item => item.id === route.params.id));
      } catch (err) {
        console.log(err);
      }
    }
  };

  const addProductToWishlist = async () => {
    try {
      const userId = await AsyncStorage.getItem('@uid');
      const itemData = {
        id: route.params.id,
        image: productDetails.image,
        title: productDetails.title,
        price: productDetails.price,
      };
      await addItemToWishlist(itemData, userId);
      setAddedToWishlist(true);
    } catch (err) {
      console.log(err);
    }
  };

  const removeProductFromWishlist = async () => {
    try {
      const userId = await AsyncStorage.getItem('@uid');
      const itemData = {
        id: route.params.id,
        image: productDetails.image,
        title: productDetails.title,
        price: productDetails.price,
      };
      await removeItemFromWishlist(itemData, userId);
      setAddedToWishlist(false);
    } catch (err) {
      console.log(err);
    }
  };

  const addProductToCart = async () => {
    try {
      const {image, price, title} = productDetails;
      const userId = await AsyncStorage.getItem('@uid');
      const itemData = {
        id: route.params.id,
        image,
        price,
        quantity: 1,
        title,
      };
      setIsLoading(true);
      await addItemToCart(itemData, userId);
      setAddedToCart(true);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const removeProductFromCart = async () => {
    try {
      const {image, price, title} = productDetails;
      const userId = await AsyncStorage.getItem('@uid');
      const itemData = {
        id: route.params.id,
        image,
        price,
        quantity: 1,
        title,
      };
      setIsLoading(true);
      await removeItemFromCart(itemData, userId);
      setAddedToCart(false);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <View style={styles.container}>
      <Pressable onPress={onBackPress} style={styles.backButton}>
        <Icon name="chevron-thin-left" size={16} color={COLORS.PRIMARY} />
        <Text customStyles={styles.backButtonText}>Back</Text>
      </Pressable>
      <View style={styles.productData}>
        <View style={styles.productHeader}>
          <Text customStyles={styles.productTitle}>{productDetails.title}</Text>
          <Pressable
            onPress={
              addedToWishlist ? removeProductFromWishlist : addProductToWishlist
            }>
            <AntIcon
              name={addedToWishlist ? 'heart' : 'hearto'}
              size={25}
              color={addedToWishlist ? COLORS.PRIMARY : COLORS.DARK_GRAY}
            />
          </Pressable>
        </View>
      </View>
      <Image source={{uri: productDetails.image}} style={styles.productImage} />
      <Text customStyles={styles.productDescription}>
        {productDetails.description}
      </Text>
      <Button
        isLoading={isLoading}
        onPress={addedToCart ? removeProductFromCart : addProductToCart}
        customStyles={styles.addToCart}
        textContent={addedToCart ? 'Remove From Cart' : 'Add To Cart'}
      />
    </View>
  );
};

export default ProductById;
