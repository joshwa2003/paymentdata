// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCKeZY0gkFQWcEHrO1E5WJ6aIbvqqBZPyM",
  authDomain: "payment-data-testing.firebaseapp.com",
  projectId: "payment-data-testing",
  storageBucket: "payment-data-testing.appspot.com",
  messagingSenderId: "605296361009",
  appId: "1:605296361009:web:6515154042acfede619f10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

const db = getFirestore();

export {db};