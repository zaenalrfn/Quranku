// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTy1BCt5Z8ZIVqEmBVztEWtOIoqXfHhBE",
  authDomain: "quranku-521f9.firebaseapp.com",
  projectId: "quranku-521f9",
  storageBucket: "quranku-521f9.appspot.com",
  messagingSenderId: "528530149184",
  appId: "1:528530149184:web:c8c00adcebd0b74615b4a5",
  measurementId: "G-LKGGRJQD88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
