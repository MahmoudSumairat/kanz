import {View, Text, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {pageStyles} from '../shared/pageStyles';
import Logo from '../svg/Logo';
import {COLORS} from '../constants/colors';
import {TextInput} from 'react-native-gesture-handler';

const Login = () => {
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
          <View
            style={{
              alignSelf: 'stretch',
              marginTop: 30,
              marginRight: 20,
              marginLeft: 20,
            }}>
            <TextInput
              onFocus={() => onFocus('email')}
              onBlur={() => onBlur('email')}
              nativeID="email"
              placeholder="Email"
              style={{
                borderWidth: 1,
                borderColor: focusedInputs.email
                  ? COLORS.PRIMARY
                  : COLORS.MID_GRAY,
                paddingHorizontal: 10,
                paddingVertical: 15,
                borderRadius: 10,
                marginBottom: 30,
              }}
            />
            <TextInput
              nativeID="password"
              onFocus={() => onFocus('password')}
              onBlur={() => onBlur('password')}
              style={{
                borderWidth: 1,
                borderColor: focusedInputs.password
                  ? COLORS.PRIMARY
                  : COLORS.MID_GRAY,
                paddingHorizontal: 10,
                paddingVertical: 15,
                borderRadius: 10,
              }}
              placeholder="Password"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
