import {View, Text} from 'react-native';
import React from 'react';
import CustomTextInput from '../../coreui/TextInput/TextInput';
import Button from '../../coreui/Button/Button';
import styles from './styles';
import {PAGE_NAMES} from '../../constants/pageNames';

const LoginForm = ({navigation}) => {
  const navigateToSignup = () => {
    navigation.navigate(PAGE_NAMES.REGISTER);
  };

  return (
    <View style={styles.container}>
      <CustomTextInput nativeID="email" placeholder="Email" />
      <CustomTextInput nativeID="password" placeholder="Password" />
      <Text style={styles.signUp}>
        First time here?
        <Text onPress={navigateToSignup} style={styles.signUpLink}>
          Sign up
        </Text>
      </Text>
      <Button customStyles={styles.submitButton} textContent="Login" />
    </View>
  );
};

export default LoginForm;
