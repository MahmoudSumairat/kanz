import {View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Text from '../../coreui/Text/Text';
import {ITEM_TYPES} from '../../constants/itemTypes';

const Item = ({item: {title, quantity, image, price}, itemType}) => {
  const isCartItem = itemType === ITEM_TYPES.CART;
  const isWishlistItem = itemType === ITEM_TYPES.WISHLIST;

  return (
    <View
      style={[
        styles.itemContainer,
        isWishlistItem ? styles.wishlistItemContainer : null,
      ]}>
      <Image source={{uri: image}} style={styles.itemImage} />
      <View style={styles.itemData}>
        <Text
          customStyles={[
            styles.itemTitle,
            isWishlistItem ? styles.wishlistItemTitle : null,
          ]}>
          {title}
        </Text>
        {isCartItem && (
          <>
            <Text customStyles={styles.itemQuantity}>{quantity} item(s)</Text>
          </>
        )}
        <Text customStyles={styles.itemPrice}>${price * (quantity || 1)}</Text>
      </View>
    </View>
  );
};

export default Item;
