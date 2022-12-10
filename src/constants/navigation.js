import Cart from '../pages/Cart/Cart';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import Register from '../pages/Register/Register';
import Wishlist from '../pages/Wishlist/Wishlist';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import BottomNavigator from '../components/BottomNavigator';
import {COLORS} from './colors';
import {PAGE_NAMES} from './pageNames';

export const tabNavigationList = [
  {
    name: PAGE_NAMES.HOME,
    iconName: 'home',
    page: Home,
  },
  {
    name: PAGE_NAMES.CART,
    iconName: 'shoppingcart',
    page: Cart,
  },
  {
    name: PAGE_NAMES.WISHLIST,
    iconName: 'hearto',
    page: Wishlist,
  },
  {
    name: PAGE_NAMES.PROFILE,
    iconName: 'user',
    page: Profile,
  },
];

export const stackNavigationList = [
  {
    name: PAGE_NAMES.STACK_HOME,
    page: BottomNavigator,
  },
  {
    name: PAGE_NAMES.CART,
    page: Cart,
  },
  {
    name: PAGE_NAMES.WISHLIST,
    page: Wishlist,
  },
  {
    name: PAGE_NAMES.LOGIN,
    page: Login,
  },
  {
    name: PAGE_NAMES.REGISTER,
    page: Register,
  },
  {
    name: PAGE_NAMES.PROFILE,
    page: Profile,
  },
  {
    name: PAGE_NAMES.PRODUCT_DETAILS,
    page: ProductDetails,
  },
];

export const stackNavigationOptions = {
  headerShown: false,
};

export const tabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: COLORS.PRIMARY,
  tabBarInactiveTintColor: COLORS.MID_GRAY,
};

export const screenOptions = {
  tabBarStyle: {
    backgroundColor: COLORS.WHITE,
    height: 80,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: COLORS.LIGHT_GRAY,
  },
};
