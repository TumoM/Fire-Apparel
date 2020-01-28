import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBIWK73kjRf8a3aqcfj7DtmlLNTJcc3nwU",
  authDomain: "fire-apparel.firebaseapp.com",
  databaseURL: "https://fire-apparel.firebaseio.com",
  projectId: "fire-apparel",
  storageBucket: "fire-apparel.appspot.com",
  messagingSenderId: "758209102234",
  appId: "1:758209102234:web:41c7928d16f28995f33a23",
  measurementId: "G-RRB02T781L"
};

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if (!userAuth) {
        return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    
    const snapshot = await userRef.get()

    if (!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user',error);
            
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;