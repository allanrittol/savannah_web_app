import firebase from 'firebase/app';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_mzcWKZ5164dMEsPKmEe1CON_eOT81o0",
  authDomain: "web-app-5e836.firebaseapp.com",
  projectId: "web-app-5e836",
  storageBucket: "web-app-5e836.firebasestorage.app",
  messagingSenderId: "670505909843",
  appId: "1:670505909843:web:a008f3eb649352a15210a6",
  measurementId: "G-SWYMQLNG8X"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
