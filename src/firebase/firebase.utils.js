import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyD8KtZW6ET2sUOx670ssrzmKBSYXMJJv2M",
    authDomain: "crown-clothing-db-a933f.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-a933f.firebaseio.com",
    projectId: "crown-clothing-db-a933f",
    storageBucket: "crown-clothing-db-a933f.appspot.com",
    messagingSenderId: "743699352164",
    appId: "1:743699352164:web:eb74dbca7d1888cd9e2d71",
    measurementId: "G-7JL4KRBHQF"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;