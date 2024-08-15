// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhJCMMoWZ0s4KV-s8AWE23MILyrCQ4xiE",
  authDomain: "inventory-management-9d326.firebaseapp.com",
  projectId: "inventory-management-9d326",
  storageBucket: "inventory-management-9d326.appspot.com",
  messagingSenderId: "1093683788166",
  appId: "1:1093683788166:web:94af012babcd5d19edd407",
  measurementId: "G-63LPG6WKSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
