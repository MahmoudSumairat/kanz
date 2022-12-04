import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {COLORS} from '../../constants/colors';
import styles from './styles';

const CustomTextInput = ({
  nativeID = 'textInputNativeID',
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  placeholder = 'text input',
  customStyles = {},
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
    onBlur();
  };

  const handleFocus = () => {
    setIsFocused(true);
    onFocus();
  };

  return (
    <TextInput
      nativeID={nativeID}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={onChange}
      style={[
        styles.textInput,
        customStyles,
        {
          borderColor: isFocused ? COLORS.PRIMARY : COLORS.MID_GRAY,
        },
      ]}
      placeholder={placeholder}
    />
  );
};

export default CustomTextInput;
