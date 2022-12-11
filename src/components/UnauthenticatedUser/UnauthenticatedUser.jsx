import {View, ImageBackground, SafeAreaView} from 'react-native';
import Text from '../../coreui/Text/Text';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {COLORS} from '../../constants/colors';
import Button from '../../coreui/Button/Button';
import Logo from '../../svg/Logo';
import {PAGE_NAMES} from '../../constants/pageNames';

const UnauthenticatedUser = ({navigation}) => {
  const onNavigatePress = () => {
    navigation.push(PAGE_NAMES.LOGIN);
  };

  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/backgrounds/Home.jpg')}
      resizeMode="cover">
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.logo}>
          <Logo />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.lockIcon}>
            <Icon name="lock" size={100} color={COLORS.PRIMARY} />
          </View>
          <Text customStyles={styles.description}>
            You need to be authenticated to access this page
          </Text>
          <Button onPress={onNavigatePress} textContent="Go To Login" />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default UnauthenticatedUser;
