import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBRKbsewrNJP4xFc2Zp0t70cPHu969Ldts",
  authDomain: "bat-a-gram.firebaseapp.com",
  projectId: "bat-a-gram",
  storageBucket: "bat-a-gram.appspot.com",
  messagingSenderId: "15406867687",
  appId: "1:15406867687:web:41b199fa9d98f01063ee42",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase)

export { firebase, FieldValue };
