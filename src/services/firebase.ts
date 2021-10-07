import dotenv from 'dotenv';
//import firebase from "firebase";
//import 'firebase/compat/auth';

import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

dotenv.config();
initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

console.log('...........................')

export const auth = getAuth();
const googleProvider = new GoogleAuthProvider()
export const signInWithGoogle = () => {
  console.log('signInWithGoogle..........')
  return signInWithPopup(auth, googleProvider).catch((error) => {
    console.log(error.message);
  })
}

export const logOut = () => {
  signOut(auth).then(()=> {
    console.log('logged out')
  }).catch((error) => {
    console.log(error.message)
  })
}
