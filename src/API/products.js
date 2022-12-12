import {collection, doc, getDoc, getDocs} from 'firebase/firestore';
import {PRODUCTS} from '../constants/collections';
import {db} from '../firebase/firebaseApp';

const getProducts = async () => {
  const res = await getDocs(collection(db, PRODUCTS));
  const products = [];
  res.forEach(doc => products.push({id: doc.id, ...doc.data()}));
  return Promise.resolve(products);
};

const getProductDetails = async productId => {
  const res = await getDoc(doc(db, PRODUCTS, productId));
  return Promise.resolve(res.data());
};

export {getProducts, getProductDetails};
