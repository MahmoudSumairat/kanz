import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';
import {SHADOW_STYLES} from '../../shared/shadowStyles';

const resetTextStyles = {
  marginTop: 0,
  marginBottom: 0,
  color: COLORS.DARK_GRAY,
  fontWeight: '500',
};

const itemStyles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    backgroundColor: COLORS.ORIGINAL_WHITE,
    marginVertical: 10,
    borderRadius: 10,
    ...SHADOW_STYLES,
    flexDirection: 'row',
  },
  itemImage: {
    height: 100,
    width: 100,
  },
  itemData: {
    justifyContent: 'space-between',
    marginLeft: 20,
  },
  itemTitle: {
    ...resetTextStyles,
    fontSize: 20,
  },
  itemPrice: {
    ...resetTextStyles,
    fontWeight: '700',
    color: COLORS.PRIMARY,
  },
  itemQuantity: {
    ...resetTextStyles,
  },
  wishlistItemContainer: {
    alignItems: 'center',
  },
  wishlistItemTitle: {
    marginBottom: 10,
  },
});

export default itemStyles;
