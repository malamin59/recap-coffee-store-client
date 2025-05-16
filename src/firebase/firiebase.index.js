// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUzCqOjP3_J71-pBM1jwvSkxWkck7lv8s",
  authDomain: "coffee-store-app-81e0e.firebaseapp.com",
  projectId: "coffee-store-app-81e0e",
  storageBucket: "coffee-store-app-81e0e.firebasestorage.app",
  messagingSenderId: "313719926462",
  appId: "1:313719926462:web:9e120c2c6c18e557dc38ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service 
 export const auth = getAuth(app);