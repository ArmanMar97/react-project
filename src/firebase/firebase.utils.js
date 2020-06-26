import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBUrfjJRUXYQFb2Q3um1Ia-UJ4POnH3Ipk",
    authDomain: "crwn-db-56e98.firebaseapp.com",
    databaseURL: "https://crwn-db-56e98.firebaseio.com",
    projectId: "crwn-db-56e98",
    storageBucket: "crwn-db-56e98.appspot.com",
    messagingSenderId: "855879122880",
    appId: "1:855879122880:web:137ec00207f1dcba7e9225",
    measurementId: "G-X03L7P0XHM"
};

const createUserProfileDocument = async function(userAuth,additionalData){
    if (!userAuth) return ;
    const userRef = firestore.collection("users").doc(`${userAuth.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists){
        const displayName = userAuth.displayName;
        const email = userAuth.email;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName:displayName,
                email:email,
                createdAt:createdAt,
                ...additionalData
            })
        }catch (e) {
            console.log(e.message)
        }
    }
    return userRef;
}
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"})
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
export {createUserProfileDocument}

createUserProfileDocument()
