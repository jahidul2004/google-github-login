// Do not store config on client side
import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUvBDjFzmjPJosvv4U--13DUAxwrc0eLM",
  authDomain: "simple-firebase-14d0b.firebaseapp.com",
  projectId: "simple-firebase-14d0b",
  storageBucket: "simple-firebase-14d0b.firebasestorage.app",
  messagingSenderId: "214676928182",
  appId: "1:214676928182:web:ecc52faa9e59bd8a851817"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;