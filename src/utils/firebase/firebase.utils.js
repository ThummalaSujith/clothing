// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; //creates app instance

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  doc, // retrive documents from firebase
  setDoc,
  getDoc,
} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt6-mpin_Vyy43J0aqeKWkHB2J2agAMlQ",
  authDomain: "clothing-db-15a25.firebaseapp.com",
  projectId: "clothing-db-15a25",
  storageBucket: "clothing-db-15a25.appspot.com",
  messagingSenderId: "833437057295",
  appId: "1:833437057295:web:da3fa5767d05b34b66fe7a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(); // class

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(); //auth must be same for every application

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // getting data from auth and storing in firestore

  const userDocRef = doc(db, "users", userAuth.uid); //docs takes 3 args , database,collection,identifier
  console.log(userDocRef); // we will get object which



  const userSnapshot = await getDoc(userDocRef);
console.log(userSnapshot);

if (!userSnapshot.exists()) {
  const { displayName, email } = userAuth;
  const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
    });
  } catch (error) {
    console.log("error creating the user", error.message);
  }
}
return userDocRef;
};


