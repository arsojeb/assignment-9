// src/firebase.js
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOpDhu5uOCgo8wAqtdxc0Cc31ZdMUX8o8",
  authDomain: "skill-swap-41c65.firebaseapp.com",
  projectId: "skill-swap-41c65",
  storageBucket: "skill-swap-41c65.firebasestorage.app",
  messagingSenderId: "332677179523",
  appId: "1:332677179523:web:b701ab34a0c289af3b53b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
