import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from './config';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp(firebaseConfig());

export const auth = getAuth(app);
export const db = getFirestore(app);
export default firebase;
