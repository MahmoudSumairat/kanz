import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/colors';

const productByIdStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  backButton: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    color: COLORS.PRIMARY,
    fontSize: 16,
  },
  productData: {
    paddingTop: 10,
  },
  productTitle: {
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 20,
    color: COLORS.DARK_GRAY,
  },
  productImage: {
    height: 400,
    width: '100%',
    marginBottom: 20,
    borderRadius: 15,
  },
  productDescription: {
    fontSize: 16,
    height: 170,
    color: COLORS.DARK_GRAY,
  },
});

export default productByIdStyles;