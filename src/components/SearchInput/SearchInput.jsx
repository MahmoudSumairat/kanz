import {View, Text, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {COLORS} from '../../constants/colors';

const SearchInput = () => {
  return (
    <View style={styles.searchInputContainer}>
      <Icon name="search1" size={20} color={COLORS.MID_GRAY} />
      <TextInput style={styles.searchInput} placeholder="Search Products ..." />
    </View>
  );
};

export default SearchInput;
