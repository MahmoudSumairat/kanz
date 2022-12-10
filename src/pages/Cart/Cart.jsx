import {View, SafeAreaView, ScrollView, ImageBackground} from 'react-native';
import React from 'react';
import {pageStyles} from '../../shared/pageStyles';
import CartItems from '../../components/CartItems/CartItems';
import Text from '../../coreui/Text/Text';
import styles from './styles';
import Button from '../../coreui/Button/Button';

const Cart = ({navigation}) => {
  return (
    <View style={{...pageStyles}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/backgrounds/Home.jpg')}
        resizeMode="cover">
        <SafeAreaView>
          <View style={styles.container}>
            <Text customStyles={styles.heading}>What's in the bag</Text>
            <ScrollView style={styles.scrollView}>
              <CartItems navigation={navigation} />
            </ScrollView>
            <Button textContent="Checkout" />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Cart;
