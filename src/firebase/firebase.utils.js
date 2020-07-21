import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAhVJbVulI3IF4xn6Etv6ptna97BxnqIZk",
  authDomain: "crown-db-3d265.firebaseapp.com",
  databaseURL: "https://crown-db-3d265.firebaseio.com",
  projectId: "crown-db-3d265",
  storageBucket: "crown-db-3d265.appspot.com",
  messagingSenderId: "90444077846",
  appId: "1:90444077846:web:5c768f1c8eb40acaaa8e37",
  measurementId: "G-JL4GSFGPRM",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
