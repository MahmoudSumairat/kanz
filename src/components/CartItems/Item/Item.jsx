import {View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Text from '../../../coreui/Text/Text';

const Item = ({item: {title, quantity, image, price}}) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{uri: image}} style={styles.itemImage} />
      <View style={styles.itemData}>
        <Text customStyles={styles.itemTitle}>{title}</Text>
        <Text customStyles={styles.itemQuantity}>{quantity} item(s)</Text>
        <Text customStyles={styles.itemPrice}>${price * quantity}</Text>
      </View>
    </View>
  );
};

export default Item;
