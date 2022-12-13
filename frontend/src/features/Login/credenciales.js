// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7aXYVPoURPJ4pEBmwD3vX6gI0azjUKY4",
  authDomain: "backend-87d76.firebaseapp.com",
  projectId: "backend-87d76",
  storageBucket: "backend-87d76.appspot.com",
  messagingSenderId: "1075574063820",
  appId: "1:1075574063820:web:137f600b79b94321b1f869"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);
export default appfirebase;