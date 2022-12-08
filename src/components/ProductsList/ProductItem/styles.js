import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';
import {SHADOW_STYLES} from '../../../shared/shadowStyles';

const productItemStyles = StyleSheet.create({
  productItem: {
    backgroundColor: COLORS.ORIGINAL_WHITE,
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    ...SHADOW_STYLES,
  },
  productInfo: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  productTitle: {
    marginRight: 10,
    fontSize: 13,
    textTransform: 'capitalize',
  },
  productPrice: {
    fontSize: 13,
    color: COLORS.PRIMARY,
    fontWeight: '700',
  },
  addToCart: {
    paddingVertical: 5,
    borderRadius: 10,
  },
});

export default productItemStyles;
