import {View, Pressable, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {products} from '../../data/products';
import styles from './styles';
import Button from '../../coreui/Button/Button';
import Icon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Text from '../../coreui/Text/Text';
import {COLORS} from '../../constants/colors';

const ProductById = ({navigation, route}) => {
  const [productDetails, setProductDetails] = useState({});
  const [addedToWishlist, setAddedToWishlist] = useState(false);

  const onBackPress = () => {
    navigation.pop();
  };

  useEffect(() => {
    if (route.params.id) {
      const {
        params: {id},
      } = route;
      const product = products.find(prod => prod.id === id);
      setProductDetails(product);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Pressable onPress={onBackPress} style={styles.backButton}>
        <Icon name="chevron-thin-left" size={16} color={COLORS.PRIMARY} />
        <Text customStyles={styles.backButtonText}>Back</Text>
      </Pressable>
      <View style={styles.productData}>
        <View style={styles.productHeader}>
          <Text customStyles={styles.productTitle}>{productDetails.title}</Text>
          <Pressable onPress={() => setAddedToWishlist(!addedToWishlist)}>
            <AntIcon
              name={addedToWishlist ? 'heart' : 'hearto'}
              size={25}
              color={addedToWishlist ? COLORS.PRIMARY : COLORS.DARK_GRAY}
            />
          </Pressable>
        </View>
      </View>
      <Image source={{uri: productDetails.image}} style={styles.productImage} />
      <Text customStyles={styles.productDescription}>
        {productDetails.description}
      </Text>
      <Button customStyles={styles.addToCart} textContent="Add To Cart" />
    </View>
  );
};

export default ProductById;
