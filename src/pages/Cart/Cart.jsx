import {View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {pageStyles} from '../../shared/pageStyles';
import CartItems from '../../components/CartItems/CartItems';
import Text from '../../coreui/Text/Text';
import styles from './styles';
import Button from '../../coreui/Button/Button';

const Cart = ({navigation}) => {
  return (
    <View style={{...pageStyles}}>
      <SafeAreaView>
        <View style={styles.container}>
          <Text customStyles={styles.heading}>What's in the bag</Text>
          <ScrollView style={styles.scrollView}>
            <CartItems navigation={navigation} />
          </ScrollView>
          <Button textContent="Checkout" />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Cart;
