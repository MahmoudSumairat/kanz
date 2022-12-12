import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import {CARTS} from '../constants/collections';
import {db} from '../firebase/firebaseApp';

const getCartItems = async userId => {
  const res = await getDoc(doc(db, CARTS, userId));

  const products = res.data().products;

  return Promise.resolve(products);
};

const addItemToCart = async (productData, userId) => {
  return updateDoc(doc(db, CARTS, userId), {
    products: arrayUnion(productData),
  });
};

const removeItemFromCart = async (productData, userId) => {
  return updateDoc(doc(db, CARTS, userId), {
    products: arrayRemove(productData),
  });
};

export {getCartItems, addItemToCart, removeItemFromCart};
