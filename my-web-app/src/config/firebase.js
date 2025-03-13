// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeHqvDrfr3vM_zwSearN7vLOYIp8T0N0w",
  authDomain: "sava-webapp.firebaseapp.com",
  projectId: "sava-webapp",
  storageBucket: "sava-webapp.firebasestorage.app",
  messagingSenderId: "1069644481646",
  appId: "1:1069644481646:web:713c56b9f98574261a127f",
  measurementId: "G-Z4B350Y5WD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();