// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtA9FRA7yyNH117d61RuS7lhOMzP9weO8",
  authDomain: "shorten-c896a.firebaseapp.com",
  projectId: "shorten-c896a",
  storageBucket: "shorten-c896a.appspot.com",
  messagingSenderId: "549740799191",
  appId: "1:549740799191:web:35337bb861e11c2905bc92",
  measurementId: "G-PCP9ZJ0925",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
