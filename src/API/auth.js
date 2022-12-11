import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@firebase/auth';
import {auth, db} from '../firebase/firebaseApp';
import {setDoc, doc} from 'firebase/firestore';
import {CARTS, USERS, WISHLISTS} from '../constants/collections';

const register = async ({email, password, firstName, lastName}) => {
  try {
    const userData = {
      email,
      password,
      firstName,
      lastName,
      cartItemsCount: 0,
      wishlistItemsCount: 0,
    };
    const {
      user: {uid, accessToken},
    } = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, USERS, uid), userData);
    await setDoc(doc(db, CARTS, uid), {products: []});
    await setDoc(doc(db, WISHLISTS, uid), {products: []});
    return Promise.resolve({accessToken, uid});
  } catch (err) {
    return Promise.reject({message: err.code});
  }
};

const login = async ({email, password}) => {
  try {
    const {
      user: {accessToken, uid},
    } = await signInWithEmailAndPassword(auth, email, password);
    return Promise.resolve({accessToken, uid});
  } catch (err) {
    return Promise.reject({message: err.code});
  }
};

export {register, login};
