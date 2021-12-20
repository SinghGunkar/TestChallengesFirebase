import { combineReducers } from "redux"
import authReducer from "./authReducer"
import testCasesReducer from "./testCasesReducer"
import { firestoreReducer } from "redux-firestore"

export const rootReducer = combineReducers({
    auth: authReducer,
    testCases: testCasesReducer,
    firestore: firestoreReducer
})
