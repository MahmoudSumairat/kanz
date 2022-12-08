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
  error = null,
  ...props
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

  const activeOrInactiveBorderColor = isFocused
    ? COLORS.PRIMARY
    : COLORS.MID_GRAY;
  const validOrInvalidBorderColor = error
    ? COLORS.DANGER
    : activeOrInactiveBorderColor;

  return (
    <TextInput
      nativeID={nativeID}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={onChange}
      {...props}
      style={[
        styles.textInput,
        customStyles,
        {
          borderColor: validOrInvalidBorderColor,
        },
      ]}
      placeholder={placeholder}
    />
  );
};

export default CustomTextInput;
