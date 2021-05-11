import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
apiKey: "AIzaSyBqtEoY18PfRBN6fSqa1GqgBIea4wajEbk",
  authDomain: "messenger-24581.firebaseapp.com",
  projectId: "messenger-24581",
  storageBucket: "messenger-24581.appspot.com",
  messagingSenderId: "410383869963",
  appId: "1:410383869963:web:f23618c105670feaa6ff0e",
  measurementId: "G-B5BW51VXQT"
})
const db=firebaseApp.firestore()
export default db