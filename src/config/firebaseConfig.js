// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsFpNpTrPn1Iir6Z9YbF2XmJICPRNGiDM",
  authDomain: "dashboard-app-d1d24.firebaseapp.com",
  projectId: "dashboard-app-d1d24",
  storageBucket: "dashboard-app-d1d24.appspot.com",
  messagingSenderId: "804567223646",
  appId: "1:804567223646:web:12fd55fbf44226d09d93cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
