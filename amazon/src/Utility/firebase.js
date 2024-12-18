import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv2RfRLrfO2NkYxPF9cLC4kGIH-oFlv58",
  authDomain: "clone-3107d.firebaseapp.com",
  projectId: "clone-3107d",
  storageBucket: "clone-3107d.firebasestorage.app",
  messagingSenderId: "310798994649",
  appId: "1:310798994649:web:404c78f08c22389c7902c8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db = app.firestore()