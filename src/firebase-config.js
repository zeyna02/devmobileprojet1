import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUpI4ocYpPcmrIh_Z1Jmx5F18NfU9qR4c",
  authDomain: "zeyna-5f160.firebaseapp.com",
  projectId: "zeyna-5f160",
  storageBucket: "zeyna-5f160.appspot.com",
  messagingSenderId: "988479643819",
  appId: "1:988479643819:web:1325dafc9300a3a30f17ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export{auth, db};