
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs,getAuth } from 'firebase/firestore/lite';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBzVbSpa7tiotP9KLyqZ1zhSQDeNkk_5ak",
    authDomain: "prosync-61e0e.firebaseapp.com",
    projectId: "prosync-61e0e",
    storageBucket: "prosync-61e0e.appspot.com",
    messagingSenderId: "969064171780",
    appId: "1:969064171780:web:dee9348c87a76b144d2851",
    measurementId: "G-XQ8SXEWBBS"
  };

  //init firebase
  const app=initializeApp(firebaseConfig)

  //init services
 const projectFirestore= getFirestore(app)
 const projectAuth = getAuth();
 

 export {projectAuth,projectFirestore}