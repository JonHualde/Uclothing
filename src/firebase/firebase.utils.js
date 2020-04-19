import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDqRfbbrMv8qSIX_OP6uENhAizasR6z9H0",
    authDomain: "crown-clothing-225a8.firebaseapp.com",
    databaseURL: "https://crown-clothing-225a8.firebaseio.com",
    projectId: "crown-clothing-225a8",
    storageBucket: "crown-clothing-225a8.appspot.com",
    messagingSenderId: "494551811377",
    appId: "1:494551811377:web:d6d791362ff5a8c92e1c10"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return 
  
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        createAt,
        displayName,
        email,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating user", error)
    }
  }
  return userRef;
}

// -------------- USE THIS FUNCTION TO PUSH DATA TO FIREBASE ---------------- // 
// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//   const collectionRef = firestore.collection(collectionKey);

//   const batch = firestore.batch();
//   console.log('batch1', batch)
//   objectsToAdd.forEach(object => {
//     const newDocRef = collectionRef.doc();
//     console.log('collectionRefDoc', newDocRef)
//     batch.set(newDocRef, object);
//   });

//   return await batch.commit()
// }

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map( doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title, 
      items
    }
  });
  console.log(transformedCollection, 'transformedcollection')
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;