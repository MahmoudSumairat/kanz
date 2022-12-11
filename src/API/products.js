import {collection, getDocs} from 'firebase/firestore';
import {PRODUCTS} from '../constants/collections';
import {db} from '../firebase/firebaseApp';

const getProducts = async () => {
  const res = await getDocs(collection(db, PRODUCTS));
  const products = [];
  res.forEach(doc => products.push({id: doc.id, ...doc.data()}));
  return Promise.resolve(products);
};

export {getProducts};
