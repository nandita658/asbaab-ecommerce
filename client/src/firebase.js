// import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS3XYJ53H-KS6R8eQwRR_8xAGwqSiSTXs",
  authDomain: "asbaab-ecommerce-project.firebaseapp.com",
  projectId: "asbaab-ecommerce-project",
  storageBucket: "asbaab-ecommerce-project.appspot.com",
  messagingSenderId: "388056170696",
  appId: "1:388056170696:web:06fa55312fd854adeda5fd",
  measurementId: "G-FG9B8FTW4D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// initializeApp(firebaseConfig);
 
// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 