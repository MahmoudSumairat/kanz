import {Animated, Easing, Pressable, Text} from 'react-native';
import React, {useEffect, useRef} from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../constants/colors';

const Button = ({
  customStyles = {},
  onPress = () => {},
  textContent = 'coreUI button',
  isLoading = false,
  loadingText = '',
  customTextStyles = {},
}) => {
  const buttonTextContent = isLoading
    ? loadingText || textContent
    : textContent;

  const rotationAnimate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isLoading) {
      runLoadingAnimation();
    } else {
      rotationAnimate.stopAnimation();
    }
  }, [rotationAnimate, isLoading]);

  const runLoadingAnimation = () => {
    Animated.loop(
      Animated.timing(rotationAnimate, {
        toValue: 360,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
  };

  return (
    <Pressable
      style={[
        {
          ...styles.button,
          backgroundColor: isLoading ? COLORS.LIGHT_GRAY : COLORS.PRIMARY,
        },
        customStyles,
      ]}
      onPress={!isLoading ? onPress : null}>
      {!isLoading && (
        <Text style={[styles.buttonText, customTextStyles]}>
          {buttonTextContent}
        </Text>
      )}
      {isLoading && (
        <Animated.View
          style={{
            width: 20,
            transform: [
              {
                rotateZ: rotationAnimate.interpolate({
                  inputRange: [0, 360],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          }}>
          <Icon size={20} style={{color: COLORS.PRIMARY}} name="loading1" />
        </Animated.View>
      )}
    </Pressable>
  );
};

export default Button;
