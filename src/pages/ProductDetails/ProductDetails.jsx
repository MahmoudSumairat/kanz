import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProductById from '../../components/ProductById/ProductById';
import {pageStyles} from '../../shared/pageStyles';

const ProductDetails = ({navigation, route}) => {
  return (
    <View style={{...pageStyles}}>
      <SafeAreaView>
        <ProductById navigation={navigation} route={route} />
      </SafeAreaView>
    </View>
  );
};

export default ProductDetails;
