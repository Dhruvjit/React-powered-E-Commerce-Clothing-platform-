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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    /* if user doesn't exists then exit this function*/
    if(!userAuth){
        return;
    }
    /*
    * it is important to understand difference between documentReference vs collectionReference
    * documentReference -> we use documentReference to make use of CRUD methods set, get, update and delete
    * document reference returns us document snapshot
    *
    * we get a snapshot object by calling get(), it returns all the data related to the storage
    *
    * collectionReference -> we use this to get query snapshot
    *
    * WE ARE MAKING USE OF DOCUMENT REFERENCE TO GET BACK THE SNAPSHOT
    * */
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    /* if user doesn't exists then create a document query in database and return it  */
    if(!snapshot.exists){
        const {displayName, email} = userAuth;
        const createdDate = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdDate,
                ...additionalData
            })
        } catch (e) {
            console.log('error creating user', e.message);
        }
    }

    return userRef;
}

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
