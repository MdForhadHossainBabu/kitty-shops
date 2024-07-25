// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: 'AIzaSyBIldmwn5ZI234SyxFCGCiF-442epy0gLk',
  authDomain: 'kitty-shops.firebaseapp.com',
  projectId: 'kitty-shops',
  storageBucket: 'kitty-shops.appspot.com',
  messagingSenderId: '753648698945',
  appId: '1:753648698945:web:c67416b9a68e061d13e8c0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;