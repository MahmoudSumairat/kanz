import {doc, getDoc} from 'firebase/firestore';
import {CARTS} from '../constants/collections';
import {db} from '../firebase/firebaseApp';

const getCartItems = async userId => {
  const res = await getDoc(doc(db, CARTS, userId));

  const products = res.data().products;

  return Promise.resolve(products);
};

export {getCartItems};
