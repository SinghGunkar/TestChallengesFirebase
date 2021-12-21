import { combineReducers } from "redux"
import authReducer from "./authReducer"
import testCasesReducer from "./testCasesReducer"
import { firestoreReducer } from "redux-firestore"
import { firebaseReducer } from "react-redux-firebase"

export const rootReducer = combineReducers({
    auth: authReducer,
    testCases: testCasesReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})
