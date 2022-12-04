import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

const loginFormStyles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginTop: 30,
    marginRight: 20,
    marginLeft: 20,
  },
  inputContainer: {},
  signIn: {
    color: COLORS.DARK_GRAY,
    marginTop: 5,
  },
  signInLink: {
    color: COLORS.PRIMARY,
    textDecorationLine: 1,
    marginLeft: 5,
  },
  submitButton: {
    marginTop: 20,
  },
  halfWidth: {
    flex: 0.48,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default loginFormStyles;
