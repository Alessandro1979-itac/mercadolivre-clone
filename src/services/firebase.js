import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6Uy6-H071upfkTQ2JE-A2rkS_M59dlvQ",
  authDomain: "mercadolivre-clone-a6322.firebaseapp.com",
  databaseURL: "https://mercadolivre-clone-a6322.firebaseio.com",
  projectId: "mercadolivre-clone-a6322",
  storageBucket: "mercadolivre-clone-a6322.appspot.com",
  messagingSenderId: "118915963112",
  appId: "1:118915963112:web:f7d6a3d882ff1aacbdd15d",
  measurementId: "G-MTZPPWEZ34"
};

firebase.initializeApp(firebaseConfig);

export default firebase