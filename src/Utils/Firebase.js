// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKHA05J5jjNkGaw73rDRRoQWJB1tmXATY",
  authDomain: "netflixgpt-944f2.firebaseapp.com",
  projectId: "netflixgpt-944f2",
  storageBucket: "netflixgpt-944f2.appspot.com",
  messagingSenderId: "158788140814",
  appId: "1:158788140814:web:847b4dec563621b797a15f",
  measurementId: "G-807FYQP6PW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()