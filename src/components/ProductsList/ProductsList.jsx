import {View, Text} from 'react-native';
import React from 'react';
import {products} from '../../data/products';
import ProductItem from './ProductItem/ProductItem';
import styles from './styles';

const ProductsList = () => {
  return (
    <View style={styles.productsListContainer}>
      {products.map(product => {
        return (
          <View style={styles.productItem}>
            <ProductItem productData={product} />
          </View>
        );
      })}
    </View>
  );
};

export default ProductsList;
