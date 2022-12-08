import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {SHADOW_STYLES} from '../../shared/shadowStyles';

const searchInputStyles = StyleSheet.create({
  searchInputContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.ORIGINAL_WHITE,
    marginHorizontal: 15,
    borderRadius: 15,
    alignItems: 'center',
    paddingLeft: 10,
    ...SHADOW_STYLES,
    marginTop: 20,
  },
  searchInput: {
    padding: 15,
  },
});

export default searchInputStyles;
