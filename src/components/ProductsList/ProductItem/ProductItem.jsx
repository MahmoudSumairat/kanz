import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../../../coreui/Button/Button';

const ProductItem = ({productData: {image, title, price}}) => {
  console.log(image);
  return (
    <View style={styles.productItem}>
      <Image style={{height: 150, width: 150}} source={{uri: image}} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{title}</Text>
        <Text style={styles.productPrice}>${price}</Text>
      </View>
      <Button textContent="Add To Cart" customStyles={styles.addToCart} />
    </View>
  );
};

export default ProductItem;
