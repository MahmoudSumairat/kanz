import {doc, getDoc} from 'firebase/firestore';
import {WISHLISTS} from '../constants/collections';
import {db} from '../firebase/firebaseApp';

const getWishlistItems = async userId => {
  const res = await getDoc(doc(db, WISHLISTS, userId));
  const products = res.data().products;
  return Promise.resolve(products);
};

export {getWishlistItems};
