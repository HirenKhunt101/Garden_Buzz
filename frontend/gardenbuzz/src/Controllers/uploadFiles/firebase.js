// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBs5TcxoI8Fx9H8rEqZZAh2hfR_b2Wtdo",
  authDomain: "gardenbuzz-12380.firebaseapp.com",
  projectId: "gardenbuzz-12380",
  storageBucket: "gardenbuzz-12380.appspot.com",
  messagingSenderId: "885406746323",
  appId: "1:885406746323:web:6f174f036662362cbdf626",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
