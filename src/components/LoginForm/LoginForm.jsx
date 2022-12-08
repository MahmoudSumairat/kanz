import {View, Text} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../../coreui/TextInput/TextInput';
import Button from '../../coreui/Button/Button';
import styles from './styles';
import {PAGE_NAMES} from '../../constants/pageNames';
import {login} from '../../API/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ERROR_MESSAGE} from '../../constants/errorMessages';

const LoginForm = ({navigation}) => {
  const navigateToSignup = () => {
    navigation.navigate(PAGE_NAMES.REGISTER);
  };

  const [loginData, setLoginData] = useState({email: '', password: ''});
  const [loginError, setLoginError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onInputChange = (name, value) => {
    setLoginData({...loginData, [name]: value});
  };

  const onLoginPress = async () => {
    try {
      setIsLoading(true);
      const {accessToken, uid} = await login(loginData);
      setIsLoading(false);
      console.log(accessToken, uid);
      AsyncStorage.setItem('@token', accessToken);
      AsyncStorage.setItem('@uid', uid);
      navigation.navigate(PAGE_NAMES.HOME);
    } catch (err) {
      setLoginError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Text style={styles.errorMessage}>{ERROR_MESSAGE[loginError]}</Text>
      <View style={styles.container}>
        <CustomTextInput
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={value => onInputChange('email', value)}
          nativeID="email"
          placeholder="Email"
        />
        <CustomTextInput
          secureTextEntry={true}
          nativeID="password"
          onChangeText={value => onInputChange('password', value)}
          placeholder="Password"
        />
        <Text style={styles.signUp}>
          First time here?
          <Text onPress={navigateToSignup} style={styles.signUpLink}>
            Sign up
          </Text>
        </Text>
        <Button
          isLoading={isLoading}
          onPress={onLoginPress}
          customStyles={styles.submitButton}
          textContent="Login"
        />
      </View>
    </>
  );
};

export default LoginForm;
