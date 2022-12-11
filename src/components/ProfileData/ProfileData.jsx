import {View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Text from '../../coreui/Text/Text';
import {COLORS} from '../../constants/colors';
import styles from './styles';
import Button from '../../coreui/Button/Button';
import {useDispatch} from 'react-redux';
import {logoutAction} from '../../redux/actionCreators/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PAGE_NAMES} from '../../constants/pageNames';

const ProfileData = ({navigation, userData}) => {
  const dispatch = useDispatch();
  const onLogoutPress = async () => {
    await AsyncStorage.removeItem('@token');
    await AsyncStorage.removeItem('@uid');
    dispatch(logoutAction());
    navigation.navigate(PAGE_NAMES.HOME);
  };
  return (
    <View style={styles.profileDataContainer}>
      <View style={styles.profileDataIconContainer}>
        <View style={styles.profileDataIcon}>
          <Icon name="user" size={150} color={COLORS.MID_GRAY} />
        </View>
      </View>
      <View style={styles.firstLastName}>
        <Text customStyles={styles.firstLastNameText}>
          {userData.firstName}
        </Text>
        <Text customStyles={styles.firstLastNameText}>{userData.lastName}</Text>
      </View>
      <View style={styles.email}>
        <Text customStyles={styles.emailText}>{userData.email}</Text>
      </View>
      <View style={styles.items}>
        <View style={styles.itemsContainer}>
          <Icon size={25} name="shoppingcart" color={COLORS.PRIMARY} />
          <Text customStyles={styles.itemsText}>
            Cart Items : {userData.cartItemsCount}
          </Text>
        </View>
        <View style={styles.itemsContainer}>
          <Icon size={25} name="hearto" color={COLORS.PRIMARY} />
          <Text customStyles={styles.itemsText}>
            Wishlist Items : {userData.wishlistItemsCount}
          </Text>
        </View>
        <View style={styles.logoutContainer}>
          <Button onPress={onLogoutPress} textContent="Logout" />
        </View>
      </View>
    </View>
  );
};

export default ProfileData;
