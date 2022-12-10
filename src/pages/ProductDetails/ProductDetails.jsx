import {View, Text, Pressable, ImageBackground} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProductById from '../../components/ProductById/ProductById';
import {pageStyles} from '../../shared/pageStyles';

const ProductDetails = ({navigation, route}) => {
  return (
    <View style={{...pageStyles}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/backgrounds/Home.jpg')}
        resizeMode="cover">
        <SafeAreaView>
          <ProductById navigation={navigation} route={route} />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default ProductDetails;
