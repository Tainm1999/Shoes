// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUd10bxrJLpSDmiz3tgMsOr31Q8XhuDrk",
  authDomain: "shop-62847.firebaseapp.com",
  projectId: "shop-62847",
  storageBucket: "shop-62847.appspot.com",
  messagingSenderId: "397627045525",
  appId: "1:397627045525:web:71906467fc4bb00f194d9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
