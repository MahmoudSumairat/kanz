import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

const loginStyles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 50,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 999,
  },
  backButtonText: {
    marginTop: 0,
    marginBottom: 0,
    fontWeight: '500',
    color: COLORS.ORIGINAL_WHITE,
  },
});

export default loginStyles;
