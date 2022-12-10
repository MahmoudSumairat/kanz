import {View, Text, ImageBackground, SafeAreaView} from 'react-native';
import React from 'react';
import {pageStyles} from '../../shared/pageStyles';
import ProfileData from '../../components/ProfileData/ProfileData';

const Profile = () => {
  return (
    <View style={{...pageStyles}}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/backgrounds/Home.jpg')}
        resizeMode="cover">
        <SafeAreaView>
          <ProfileData />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Profile;
