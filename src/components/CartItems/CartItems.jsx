import {Pressable, View} from 'react-native';
import React from 'react';
import {cartItems} from '../../data/cartItems';
import Item from './Item/Item';
import styles from './styles';
import {PAGE_NAMES} from '../../constants/pageNames';

const CartItems = ({navigation}) => {
  const onCartItemPress = id => {
    navigation.push(PAGE_NAMES.PRODUCT_DETAILS, {id});
  };

  return (
    <View style={styles.listContainer}>
      {cartItems.map(item => (
        <Pressable onPress={() => onCartItemPress(item.id)}>
          <Item key={item.title} item={item} />
        </Pressable>
      ))}
    </View>
  );
};

export default CartItems;
