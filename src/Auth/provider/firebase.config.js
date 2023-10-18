// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtINvjpM3Gkfee1ctUODkYuzHXVLAN8ek",
  authDomain: "gadget-luxe-auth.firebaseapp.com",
  projectId: "gadget-luxe-auth",
  storageBucket: "gadget-luxe-auth.appspot.com",
  messagingSenderId: "1078288182387",
  appId: "1:1078288182387:web:4ca886bc075d01c0484e06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;