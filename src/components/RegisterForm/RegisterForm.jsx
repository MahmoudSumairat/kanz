import {View, Text} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../../coreui/TextInput/TextInput';
import Button from '../../coreui/Button/Button';
import styles from './styles';
import {PAGE_NAMES} from '../../constants/pageNames';
import {register} from '../../API/auth';
import {ERROR_MESSAGE} from '../../constants/errorMessages';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {loginAction} from '../../redux/actionCreators/auth';

const RegisterForm = ({navigation}) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const [registrationError, setRegistrationError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const navigateToSignup = () => {
    navigation.navigate(PAGE_NAMES.LOGIN);
  };

  const onRegisterPress = async () => {
    try {
      setIsLoading(true);
      const {accessToken, uid} = await register(userData);
      setIsLoading(false);
      await AsyncStorage.setItem('@token', accessToken);
      await AsyncStorage.setItem('@uid', uid);
      dispatch(loginAction({token: accessToken, userId: uid}));
      navigation.navigate(PAGE_NAMES.HOME);
    } catch (err) {
      console.log(err);
      setRegistrationError(err.message);
      setIsLoading(false);
    }
  };

  const onInputChange = (name, value) => {
    setUserData({...userData, [name]: value});
  };

  return (
    <>
      <Text style={styles.errorMessage}>
        {ERROR_MESSAGE[registrationError]}
      </Text>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <CustomTextInput
            customStyles={styles.halfWidth}
            nativeID="firstName"
            placeholder="First Name"
            onChangeText={e => onInputChange('firstName', e)}
          />
          <CustomTextInput
            customStyles={styles.halfWidth}
            nativeID="lastName"
            placeholder="Last Name"
            onChangeText={e => onInputChange('lastName', e)}
          />
        </View>
        <CustomTextInput
          nativeID="email"
          placeholder="Email"
          onChangeText={e => onInputChange('email', e)}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <CustomTextInput
          secureTextEntry={true}
          nativeID="password"
          placeholder="Password"
          onChangeText={e => onInputChange('password', e)}
        />
        <Text style={styles.signIn}>
          Already have an account?
          <Text onPress={navigateToSignup} style={styles.signInLink}>
            Sign in
          </Text>
        </Text>
        <Button
          isLoading={isLoading}
          onPress={onRegisterPress}
          customStyles={styles.submitButton}
          textContent="Register"
        />
      </View>
    </>
  );
};

export default RegisterForm;
