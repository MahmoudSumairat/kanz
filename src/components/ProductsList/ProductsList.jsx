import {View, Text} from 'react-native';
import React from 'react';
import ProductItem from './ProductItem/ProductItem';
import styles from './styles';

const ProductsList = ({navigation, products}) => {
  return (
    <View style={styles.productsListContainer}>
      {products.map(product => {
        return (
          <View style={styles.productItem}>
            <ProductItem productData={product} navigation={navigation} />
          </View>
        );
      })}
    </View>
  );
};

export default ProductsList;
