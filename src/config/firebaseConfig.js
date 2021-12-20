import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAm7U-U8QgfancoCHLrEh1MAUhTlpo8B0g",
    authDomain: "test-challenges-firebase.firebaseapp.com",
    projectId: "test-challenges-firebase",
    storageBucket: "test-challenges-firebase.appspot.com",
    messagingSenderId: "17043746175",
    appId: "1:17043746175:web:56361401f640c6e2a43e4a",
    measurementId: "G-KQR8C7DSQH"
}

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshot: true })

export default firebase
