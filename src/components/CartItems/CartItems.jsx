import {Pressable, View} from 'react-native';
import React from 'react';
import Item from '../Item/Item';
import styles from './styles';
import {PAGE_NAMES} from '../../constants/pageNames';
import {ITEM_TYPES} from '../../constants/itemTypes';

const CartItems = ({navigation, products}) => {
  const onCartItemPress = id => {
    navigation.push(PAGE_NAMES.PRODUCT_DETAILS, {id});
  };

  return (
    <View style={styles.listContainer}>
      {products.map(item => (
        <Pressable onPress={() => onCartItemPress(item.id)}>
          <Item itemType={ITEM_TYPES.CART} key={item.title} item={item} />
        </Pressable>
      ))}
    </View>
  );
};

export default CartItems;
