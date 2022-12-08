import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

const buttonStyles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: COLORS.WHITE,
    textAlign: 'center',
  },
});

export default buttonStyles;
