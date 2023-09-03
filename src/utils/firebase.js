// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM7P8-RRfQbJ-goBBzcrXWZCgiQOnS8QA",
  authDomain: "netflixgpt-85cc7.firebaseapp.com",
  projectId: "netflixgpt-85cc7",
  storageBucket: "netflixgpt-85cc7.appspot.com",
  messagingSenderId: "163067732508",
  appId: "1:163067732508:web:544cbd1375fbb24b7f35d9",
  measurementId: "G-4EWJRRG8W2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
