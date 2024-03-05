// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASjiFBkw8OZA93IcI50AF0wIihrfYs7Ms",
  authDomain: "netflix-54cf4.firebaseapp.com",
  projectId: "netflix-54cf4",
  storageBucket: "netflix-54cf4.appspot.com",
  messagingSenderId: "172487335608",
  appId: "1:172487335608:web:a2e5cfbb99222eba4dde4d",
  measurementId: "G-02NG69Y7XG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();