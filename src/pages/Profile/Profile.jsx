import {View, Text, ImageBackground, SafeAreaView} from 'react-native';
import React from 'react';
import {pageStyles} from '../../shared/pageStyles';
import ProfileData from '../../components/ProfileData/ProfileData';
import {useSelector} from 'react-redux';
import UnauthenticatedUser from '../../components/UnauthenticatedUser/UnauthenticatedUser';

const Profile = ({navigation}) => {
  const {isAuthenticated} = useSelector(state => state.auth);
  return isAuthenticated ? (
    <View style={{...pageStyles}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/backgrounds/Home.jpg')}
        resizeMode="cover">
        <SafeAreaView>
          <ProfileData navigation={navigation} />
        </SafeAreaView>
      </ImageBackground>
    </View>
  ) : (
    <UnauthenticatedUser navigation={navigation} />
  );
};

export default Profile;
