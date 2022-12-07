import firebase from 'firebase/compat/app';
import {getAuth} from 'firebase/auth';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBfEXAtqLNeQdvzBoGJweoScvnyu02wmMo',
  authDomain: 'kanz-251ce.firebaseapp.com',
  projectId: 'kanz-251ce',
  storageBucket: 'kanz-251ce.appspot.com',
  messagingSenderId: '232599328848',
  appId: '1:232599328848:web:5bb074863b147e3b421955',
};

const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app); // auth app
const db = firebase.firestore(app); // database

export {auth, db};
