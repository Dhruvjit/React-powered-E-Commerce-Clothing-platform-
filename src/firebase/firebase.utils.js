import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB1U8dLbIR2yfT5kj4hsgtb-e7ry3u7ajo",
    authDomain: "ecommerce-db-7f6b1.firebaseapp.com",
    databaseURL: "https://ecommerce-db-7f6b1.firebaseio.com",
    projectId: "ecommerce-db-7f6b1",
    storageBucket: "ecommerce-db-7f6b1.appspot.com",
    messagingSenderId: "198527188721",
    appId: "1:198527188721:web:5e72f6256129d6dfe7f350",
    measurementId: "G-5R3G5ZRFWC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* code to setup google authentication utility */

// give access to google auth provider class from authentication library
const provider = new firebase.auth.GoogleAuthProvider();
// we want to always trigger google popup when we use this authentication for sign in and sign up
provider.setCustomParameters({ prompt: 'select_account' });

// To sign in with a pop-up window, call signInWithPopup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
