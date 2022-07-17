import { initializeApp } from 'firebase/app'
import {getAuth,signInWithPopup, GoogleAuthProvider, signOut} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD1S7QQ6C40iSFcF1uZnVuhkYvJebDqZjk",
  authDomain: "react-movie-app-36e7c.firebaseapp.com",
  databaseURL: "https://react-movie-app-36e7c-default-rtdb.firebaseio.com",
  projectId: "react-movie-app-36e7c",
  storageBucket: "react-movie-app-36e7c.appspot.com",
  messagingSenderId: "794701318518",
  appId: "1:794701318518:web:d558fd72dbec449cfd9257",
  measurementId: "G-V5KRWWBFT2"
}

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider();
const auth = getAuth()
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  signOut(auth)
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });
export {auth}