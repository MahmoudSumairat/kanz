import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import Wishlist from '../pages/Wishlist';
import BottomNavigator from '../components/BottomNavigator';
import {COLORS} from './colors';

export const tabNavigationList = [
  {
    name: 'Home',
    iconName: 'home',
    page: Home,
  },
  {
    name: 'Cart',
    iconName: 'shoppingcart',
    page: Cart,
  },
  {
    name: 'Wishlist',
    iconName: 'hearto',
    page: Wishlist,
  },
  {
    name: 'Profile',
    iconName: 'user',
    page: Profile,
  },
];

export const stackNavigationList = [
  {
    name: 'Home',
    page: BottomNavigator,
  },
  {
    name: 'Cart',
    page: Cart,
  },
  {
    name: 'Wishlist',
    page: Wishlist,
  },
  {
    name: 'Login',
    page: Login,
  },
  {
    name: 'Register',
    page: Register,
  },
  {
    name: 'Profile',
    page: Profile,
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
    height: 60,
    borderTopWidth: 1,
    borderTopColor: COLORS.LIGHT_GRAY,
  },
};
