import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const app = firebase.initializeApp({
  apiKey: "AIzaSyAl7AZ1GcceLmanp_s3U5kDKfx98fF8QhY",
  authDomain: "react-pizza-restaurant-6845c.firebaseapp.com",
  databaseURL:
    "https://react-pizza-restaurant-6845c-default-rtdb.firebaseio.com",
  projectId: "react-pizza-restaurant-6845c",
  storageBucket: "react-pizza-restaurant-6845c.appspot.com",
  messagingSenderId: "374374586722",
  appId: "1:374374586722:web:563a29f4d1979f9833343b",
  measurementId: "G-FRCFJV2S1V",
});

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
