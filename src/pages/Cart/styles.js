import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

const cartPageStyles = StyleSheet.create({
  heading: {
    fontSize: 30,
    color: COLORS.DARK_GRAY,
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  scrollView: {
    height: '86%',
  },
});

export default cartPageStyles;
