import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

export const firebaseConfig = {
    apiKey: "AIzaSyAm7U-U8QgfancoCHLrEh1MAUhTlpo8B0g", // This is an identification key and is safe to expose to the public
    authDomain: "test-challenges-firebase.firebaseapp.com",
    projectId: "test-challenges-firebase",
    storageBucket: "test-challenges-firebase.appspot.com",
    messagingSenderId: "17043746175",
    appId: "1:17043746175:web:56361401f640c6e2a43e4a",
    measurementId: "G-KQR8C7DSQH",
    userProfile: "users", // unsure if this line is needed
    useFirestoreForProfile: true // unsure if this line is needed
}

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshot: true, merge: true })

export default firebase
