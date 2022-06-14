import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import "firebase/compat/firestore";
import "firebase/compat/storage";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCKzttvmlJzoWzncHfNs4TTKs4dyEnzfn4",
    authDomain: "arforeveryone-prod.firebaseapp.com",
    projectId: "arforeveryone-prod",
    storageBucket: "arforeveryone-prod.appspot.com",
    messagingSenderId: "1091068151257",
    appId: "1:1091068151257:web:1659305588d16a92e2c5c8",
    measurementId: "G-EVY9Y0LD1Q"
})

const auth = firebase.auth()
const db = app.firestore();
const storage = firebase.storage();
export {auth, db, storage}
