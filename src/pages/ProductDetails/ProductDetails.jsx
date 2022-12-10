import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProductById from '../../components/ProductById/ProductById';

const ProductDetails = ({navigation, route}) => {
  return (
    <View>
      <SafeAreaView>
        <ProductById navigation={navigation} route={route} />
      </SafeAreaView>
    </View>
  );
};

export default ProductDetails;
