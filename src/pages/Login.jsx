import {View, Text, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {pageStyles} from '../shared/pageStyles';
import Logo from '../svg/Logo';
import {COLORS} from '../constants/colors';
import TextInput from '../coreui/TextInput/TextInput';
import Button from '../coreui/Button/Button';
import LoginForm from '../components/LoginForm/LoginForm';

const Login = ({navigation}) => {
  const [focusedInputs, setFocusedInputs] = useState({
    email: false,
    password: false,
  });

  const onFocus = name => {
    setFocusedInputs({...focusedInputs, [name]: true});
  };

  const onBlur = name => {
    setFocusedInputs({...focusedInputs, [name]: false});
  };

  return (
    <View style={{...pageStyles}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/backgrounds/background.jpg')}
        resizeMode="cover">
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Logo />
          <Text
            style={{
              fontFamily: 'Dosis-Light',
              marginTop: 15,
              fontSize: 16,
              marginBottom: 5,
              color: COLORS.PRIMARY,
            }}>
            Welcome Back!
          </Text>
          <Text
            style={{
              fontFamily: 'Dosis-Light',
              fontSize: 16,
              marginBottom: 15,
              color: COLORS.PRIMARY,
            }}>
            Login using Email and Password
          </Text>
          <LoginForm navigation={navigation} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
