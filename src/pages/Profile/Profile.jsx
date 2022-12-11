import {View, Text, ImageBackground, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {pageStyles} from '../../shared/pageStyles';
import ProfileData from '../../components/ProfileData/ProfileData';
import {useSelector} from 'react-redux';
import UnauthenticatedUser from '../../components/UnauthenticatedUser/UnauthenticatedUser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserDetails} from '../../API/users';

const Profile = ({navigation}) => {
  const {isAuthenticated} = useSelector(state => state.auth);
  const [userData, setUserData] = useState({});

  const fetchUserData = async () => {
    if (isAuthenticated) {
      const userId = await AsyncStorage.getItem('@uid');
      const userData = await getUserDetails(userId);
      setUserData(userData);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return isAuthenticated ? (
    <View style={{...pageStyles}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/backgrounds/Home.jpg')}
        resizeMode="cover">
        <SafeAreaView>
          <ProfileData userData={userData} navigation={navigation} />
        </SafeAreaView>
      </ImageBackground>
    </View>
  ) : (
    <UnauthenticatedUser navigation={navigation} />
  );
};

export default Profile;
