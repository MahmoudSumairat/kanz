import firebase from 'firebase/compat/app';
import {getAuth} from 'firebase/auth';
import {firebaseConfig} from '../config/firebase';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app); // auth app
const db = firebase.firestore(app); // database

export {auth, db};
