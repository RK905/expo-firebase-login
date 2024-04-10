// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import the getAuth function for authentication

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs085LbQMw0tm_3yb3SMpDu5ILzo2pidw",
  authDomain: "myocala-523d5.firebaseapp.com",
  projectId: "myocala-523d5",
  storageBucket: "myocala-523d5.appspot.com",
  messagingSenderId: "227826453513",
  appId: "1:227826453513:web:b4a6dacbfd5a7b075fbcd8",
  measurementId: "G-91NNYYY4LX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize the Firebase auth instance

export { app, analytics, auth }; // Export the instances you might need