import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const CustomText = ({children, customStyles}) => {
  return <Text style={[styles.text, customStyles]}>{children}</Text>;
};

export default CustomText;
