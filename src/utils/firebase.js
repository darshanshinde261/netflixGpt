// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyjPLPdMDhuLgQ5_DWX_RHpv9vnvHcvog",
  authDomain: "netflixgpt-d34be.firebaseapp.com",
  projectId: "netflixgpt-d34be",
  storageBucket: "netflixgpt-d34be.firebasestorage.app",
  messagingSenderId: "402641345328",
  appId: "1:402641345328:web:bac16e12918bcfbf5246f5",
  measurementId: "G-WLX53PTY8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();