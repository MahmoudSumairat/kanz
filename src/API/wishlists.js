import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import {WISHLISTS} from '../constants/collections';
import {db} from '../firebase/firebaseApp';

const getWishlistItems = async userId => {
  const res = await getDoc(doc(db, WISHLISTS, userId));
  const products = res.data().products;
  return Promise.resolve(products);
};

const addItemToWishlist = async (productData, userId) => {
  return updateDoc(doc(db, WISHLISTS, userId), {
    products: arrayUnion(productData),
  });
};

const removeItemFromWishlist = async (productData, userId) => {
  return updateDoc(doc(db, WISHLISTS, userId), {
    products: arrayRemove(productData),
  });
};

export {getWishlistItems, addItemToWishlist, removeItemFromWishlist};
