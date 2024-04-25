// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkmEQAy1syUknn6d395Nlghwjhq5oK9RQ",
    authDomain: "campus-innovations-new-3.firebaseapp.com",
    projectId: "campus-innovations-new-3",
    storageBucket: "campus-innovations-new-3.appspot.com",
    messagingSenderId: "344596716534",
    appId: "1:344596716534:web:cfbe3acc4d317b808945d7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }