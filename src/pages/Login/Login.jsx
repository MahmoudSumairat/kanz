import {View, ImageBackground, Pressable} from 'react-native';
import React from 'react';
import {pageStyles} from '../../shared/pageStyles';
import Logo from '../../svg/Logo';
import {COLORS} from '../../constants/colors';
import LoginForm from '../../components/LoginForm/LoginForm';
import Text from '../../coreui/Text/Text';
import Icon from 'react-native-vector-icons/Entypo';
import styles from './styles';

const Login = ({navigation}) => {
  const onBackPress = () => {
    navigation.pop();
  };

  return (
    <View style={{...pageStyles}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/backgrounds/background.jpg')}
        resizeMode="cover">
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Pressable onPress={onBackPress} style={styles.backButton}>
            <Icon
              name="chevron-thin-left"
              size={16}
              color={COLORS.ORIGINAL_WHITE}
            />
            <Text customStyles={styles.backButtonText}>Back</Text>
          </Pressable>
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
