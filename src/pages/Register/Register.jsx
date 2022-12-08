import {View, ImageBackground} from 'react-native';
import React from 'react';
import {pageStyles} from '../../shared/pageStyles';
import Logo from '../../svg/Logo';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Text from '../../coreui/Text/Text';

const Register = ({navigation}) => {
  return (
    <View style={{...pageStyles}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/backgrounds/background.jpg')}
        resizeMode="cover">
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
