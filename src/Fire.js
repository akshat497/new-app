import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyBRLu-UZQuce1e2ZY5ui0zdgswsnI8CRM4",
    authDomain: "theta-ocean-236311.firebaseapp.com",
    databaseURL: "https://theta-ocean-236311-default-rtdb.firebaseio.com",
    projectId: "theta-ocean-236311",
    storageBucket: "theta-ocean-236311.appspot.com",
    messagingSenderId: "1045228638270",
    appId: "1:1045228638270:web:dff1234cb0bc8d2a45416f",
    measurementId: "G-W0KJCY8GC6"
  };
const fbase =firebase.initializeApp(firebaseConfig);
export default fbase.database().ref();