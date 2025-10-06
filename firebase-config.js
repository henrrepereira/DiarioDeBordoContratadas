// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnit6_u1ZZG4Mg1Ma4q9c0OeTqeos5mJQ",
  authDomain: "diario-de-bordo-tecnico.firebaseapp.com",
  projectId: "diario-de-bordo-tecnico",
  storageBucket: "diario-de-bordo-tecnico.firebasestorage.app",
  messagingSenderId: "398639660413",
  appId: "1:398639660413:web:ac182a4ea9e0f90edb2014",
  measurementId: "G-5HT50J72E2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
