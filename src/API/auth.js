import {createUserWithEmailAndPassword} from '@firebase/auth';
import {auth, db} from '../firebase/firebaseApp';
import {setDoc, doc, getDoc} from 'firebase/firestore';
import {USERS} from '../constants/collections';

const register = async (email, password, firstName, lastName) => {
  try {
    const userData = {
      email,
      password,
      firstName,
      lastName,
    };
    const {
      user: {uid, accessToken},
    } = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, USERS, uid), userData);
    return Promise.resolve({accessToken, userData});
  } catch (err) {
    console.log(err);
  }
};

export {register};
