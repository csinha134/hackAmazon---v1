import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD6mko2iokqmGNlvjrOF7ULfgu1i_mNJpw",
  authDomain: "hackon-75dc5.firebaseapp.com",
  projectId: "hackon-75dc5",
  storageBucket: "hackon-75dc5.appspot.com",
  messagingSenderId: "112818202768",
  appId: "1:112818202768:web:84a53c87b503aaa80c9015",
  measurementId: "G-G8DGJTECLX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };