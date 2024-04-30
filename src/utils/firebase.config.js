// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGBdEJSE_97mT6BGZK1morCoBav5v0WXg",
  authDomain: "netflixgpt-e3e88.firebaseapp.com",
  projectId: "netflixgpt-e3e88",
  storageBucket: "netflixgpt-e3e88.appspot.com",
  messagingSenderId: "644334268740",
  appId: "1:644334268740:web:122898f36a470f3c396711",
  measurementId: "G-731DPSP5NC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();