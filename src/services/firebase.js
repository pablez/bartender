// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyC1nivZ4HsdbBOHkuZala_sDUaOn0N_xCU",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "bartenderdb-d5ad1.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "bartenderdb-d5ad1",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "bartenderdb-d5ad1.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1087668004197",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1087668004197:web:53e9d2a90c011e4595ad8c",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-V2BCHNFJE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Analytics (optional)
export const analytics = getAnalytics(app);

export default app;