// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQwDEvw8eeR9Wj9tEZfRgKSjxIFiLwMsQ",
  authDomain: "react-journal-a302f.firebaseapp.com",
  projectId: "react-journal-a302f",
  storageBucket: "react-journal-a302f.appspot.com",
  messagingSenderId: "1084350494874",
  appId: "1:1084350494874:web:fb42b55c1da7702f758723"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);