import {View, ImageBackground} from 'react-native';
import React from 'react';
import {pageStyles} from '../../shared/pageStyles';
import Logo from '../../svg/Logo';
import {COLORS} from '../../constants/colors';
import LoginForm from '../../components/LoginForm/LoginForm';
import Text from '../../coreui/Text/Text';

const Login = ({navigation}) => {
  return (
    <View style={{...pageStyles}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/backgrounds/background.jpg')}
        resizeMode="cover">
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Logo />
          <Text>Welcome Back!</Text>
          <Text customStyles={{marginTop: 5}}>
            Login using Email and Password
          </Text>
          <LoginForm navigation={navigation} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
