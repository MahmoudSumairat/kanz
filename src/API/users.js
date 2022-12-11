import {doc, getDoc} from 'firebase/firestore';
import {USERS} from '../constants/collections';
import {db} from '../firebase/firebaseApp';

const getUserDetails = async userId => {
  const res = await getDoc(doc(db, USERS, userId));

  const data = res.data();

  return Promise.resolve(data);
};

export {getUserDetails};
