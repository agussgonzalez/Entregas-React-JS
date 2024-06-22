// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";{}
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMlkqR5rD84LuJSLkV018L0q6V74wzunI",
  authDomain: "midland-shopping.firebaseapp.com",
  projectId: "midland-shopping",
  storageBucket: "midland-shopping.appspot.com",
  messagingSenderId: "80213385002",
  appId: "1:80213385002:web:7e72a22ab3f5f59d800853"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);