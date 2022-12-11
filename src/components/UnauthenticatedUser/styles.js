import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

const unauthenticatedUserStyles = StyleSheet.create({
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 60,
  },
  lockIcon: {
    backgroundColor: COLORS.LIGHT_GRAY,
    borderRadius: 80,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.MID_GRAY,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: COLORS.DARK_GRAY,
    fontWeight: '500',
  },
  logo: {
    marginTop: 20,
    marginLeft: 10,
  },
});

export default unauthenticatedUserStyles;
