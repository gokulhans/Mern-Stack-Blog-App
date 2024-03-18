// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-app-42db8.firebaseapp.com",
  projectId: "mern-blog-app-42db8",
  storageBucket: "mern-blog-app-42db8.appspot.com",
  messagingSenderId: "98230433708",
  appId: "1:98230433708:web:c9b48f2ba6ece9e6c02c09",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
