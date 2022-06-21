import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC5HaF88MoW4Q2xxr0QFNiyG8Qi1qtQAbU",
    authDomain: "tubespbf-54187.firebaseapp.com",
    projectId: "tubespbf-54187",
    storageBucket: "tubespbf-54187.appspot.com",
    messagingSenderId: "950006121152",
    appId: "1:950006121152:web:08b3280675edef61ebe325",
    measurementId: "G-CR4MZZM636"
  };
  
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }