import {View, Text} from 'react-native';
import React from 'react';
import CustomTextInput from '../../coreui/TextInput/TextInput';
import Button from '../../coreui/Button/Button';
import styles from './styles';
import {PAGE_NAMES} from '../../constants/pageNames';

const RegisterForm = ({navigation}) => {
  const navigateToSignup = () => {
    navigation.navigate(PAGE_NAMES.LOGIN);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <CustomTextInput
          customStyles={styles.halfWidth}
          nativeID="firstName"
          placeholder="First Name"
        />
        <CustomTextInput
          customStyles={styles.halfWidth}
          nativeID="lastName"
          placeholder="Last Name"
        />
      </View>
      <CustomTextInput nativeID="email" placeholder="Email" />
      <CustomTextInput nativeID="password" placeholder="Password" />
      <Text style={styles.signIn}>
        Already have an account?
        <Text onPress={navigateToSignup} style={styles.signInLink}>
          Sign in
        </Text>
      </Text>
      <Button customStyles={styles.submitButton} textContent="Register" />
    </View>
  );
};

export default RegisterForm;
