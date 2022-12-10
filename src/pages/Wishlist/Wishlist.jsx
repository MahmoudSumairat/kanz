import {ImageBackground, SafeAreaView, ScrollView, View} from 'react-native';
import React from 'react';
import {pageStyles} from '../../shared/pageStyles';
import Text from '../../coreui/Text/Text';
import styles from './styles';
import WishlistItems from '../../components/WishlistItems/WishlistItems';
import Button from '../../coreui/Button/Button';

const Wishlist = ({navigation}) => {
  return (
    <View style={{...pageStyles}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/backgrounds/Home.jpg')}
        resizeMode="cover">
        <SafeAreaView>
          <View style={styles.container}>
            <Text customStyles={styles.heading}>Wishlist</Text>
            <ScrollView style={styles.scrollView}>
              <WishlistItems navigation={navigation} />
            </ScrollView>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Wishlist;
