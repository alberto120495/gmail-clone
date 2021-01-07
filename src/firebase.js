import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUcElo4hHRNwCB29cfsG8cxj0xG4s4qPM",
  authDomain: "clone-8bc36.firebaseapp.com",
  projectId: "clone-8bc36",
  storageBucket: "clone-8bc36.appspot.com",
  messagingSenderId: "645307802221",
  appId: "1:645307802221:web:c07e25feaf109438029564",
  measurementId: "G-3KB2FMRP7L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
