import {StyleSheet} from 'react-native';

const productsListStyles = StyleSheet.create({
  productsListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  productItem: {
    width: '48%',
    marginBottom: 14,
  },
});

export default productsListStyles;
