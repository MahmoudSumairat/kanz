import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

const profileDataStyles = StyleSheet.create({
  profileDataContainer: {
    paddingTop: 90,
  },
  profileDataIconContainer: {alignItems: 'center'},
  profileDataIcon: {
    backgroundColor: COLORS.LIGHT_GRAY,
    borderRadius: 95,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.MID_GRAY,
  },
  firstLastName: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  firstLastNameText: {
    fontSize: 30,
    color: COLORS.DARK_GRAY,
    marginHorizontal: 5,
  },
  email: {
    marginTop: 0,
    alignItems: 'center',
  },
  emailText: {
    color: COLORS.DARK_GRAY,
    fontSize: 20,
    marginTop: 0,
  },
  items: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  itemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: COLORS.LIGHT_GRAY,
  },
  itemsText: {
    marginTop: 0,
    marginBottom: 0,
    fontSize: 20,
    marginLeft: 20,
    color: COLORS.DARK_GRAY,
  },
  logoutContainer: {
    marginTop: 20,
  },
});

export default profileDataStyles;
