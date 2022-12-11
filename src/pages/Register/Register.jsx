import {View, ImageBackground, Pressable} from 'react-native';
import React from 'react';
import {pageStyles} from '../../shared/pageStyles';
import Logo from '../../svg/Logo';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Text from '../../coreui/Text/Text';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';
import {COLORS} from '../../constants/colors';

const Register = ({navigation}) => {
  const onBackPress = () => {
    navigation.pop();
  };

  return (
    <View style={{...pageStyles}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/backgrounds/background.jpg')}
        resizeMode="cover">
        <Pressable onPress={onBackPress} style={styles.backButton}>
          <Icon
            name="chevron-thin-left"
            size={16}
            color={COLORS.ORIGINAL_WHITE}
          />
          <Text customStyles={styles.backButtonText}>Back</Text>
        </Pressable>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Logo />
          <Text>Welcome to Kanz!</Text>
          <Text customStyles={{marginTop: 5}}>
            Become a member of the most popular e-store ever!
          </Text>
          <RegisterForm navigation={navigation} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Register;
