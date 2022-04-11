import { initializeApp,getApps,getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAdovvNjIrXoeCu73GQ4EXIfUOLZ1VY_tw",
    authDomain: "docs20.firebaseapp.com",
    projectId: "docs20",
    storageBucket: "docs20.appspot.com",
    messagingSenderId: "965035020692",
    appId: "1:965035020692:web:5470bdf18c2653de6bff81"
  };

  // Initialize Firebase
  export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  export const db = getFirestore()
  export const storage = getStorage() 
  export const auth = getAuth()