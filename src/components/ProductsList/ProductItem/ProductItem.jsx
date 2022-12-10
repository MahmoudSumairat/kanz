import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../../../coreui/Button/Button';
import {PAGE_NAMES} from '../../../constants/pageNames';

const ProductItem = ({productData: {image, title, price, id}, navigation}) => {
  const onProductPress = () => {
    navigation.push(PAGE_NAMES.PRODUCT_DETAILS, {id});
  };

  return (
    <Pressable onPress={onProductPress}>
      <View style={styles.productItem}>
        <Image style={{height: 150, width: 150}} source={{uri: image}} />
        <View style={styles.productInfo}>
          <Text style={styles.productTitle}>{title}</Text>
          <Text style={styles.productPrice}>${price}</Text>
        </View>
        <Button textContent="Add To Cart" customStyles={styles.addToCart} />
      </View>
    </Pressable>
  );
};

export default ProductItem;
