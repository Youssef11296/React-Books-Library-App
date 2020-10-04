import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyASXPHuV7TGzB5ie28jBrfDC1RTdk4eVP4",
  authDomain: "books-library-1c316.firebaseapp.com",
  databaseURL: "https://books-library-1c316.firebaseio.com",
  projectId: "books-library-1c316",
  storageBucket: "books-library-1c316.appspot.com",
  messagingSenderId: "622016910349",
  appId: "1:622016910349:web:ac0a6f3db574a34d423144",
  measurementId: "G-L5H636281E",
});

const db = firebaseApp.firestore();

export default db;
