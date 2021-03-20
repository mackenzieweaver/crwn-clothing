import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBmGJaU5CCqfktHX-amBzsueW1VV9xv6vU",
    authDomain: "crwn-db-559e9.firebaseapp.com",
    projectId: "crwn-db-559e9",
    storageBucket: "crwn-db-559e9.appspot.com",
    messagingSenderId: "689451571866",
    appId: "1:689451571866:web:3f929c28dd70aa17c49d23",
    measurementId: "G-Q8EHZK9FRY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;