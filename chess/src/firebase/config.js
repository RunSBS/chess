// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVQHsooyXluAHsZSyulh6DT2LzwDfYN4A",
  authDomain: "tripikou-70337.firebaseapp.com",
  projectId: "tripikou-70337",
  storageBucket: "tripikou-70337.firebasestorage.app",
  messagingSenderId: "398159909742",
  appId: "1:398159909742:web:6fc57c321d54281eb4277f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
