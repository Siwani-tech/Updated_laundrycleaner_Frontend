// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAAF83741Gt_asAif6xHc6f_fCx8nAVEsk",
  authDomain: "llaundry-4d372.firebaseapp.com",
  projectId: "llaundry-4d372",
  storageBucket: "llaundry-4d372.appspot.com",
  messagingSenderId: "358917282977",
  appId: "1:358917282977:web:a6838a8b447dff1ee064e0",
  measurementId: "G-1HYQMBT93W"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db=app.firestore();

const auth= firebase.auth();
// const provider=new firebase.auth.;

// const storage=firebase.storage();


export {db,auth};