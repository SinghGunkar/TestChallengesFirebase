import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from "redux-thunk"
import { getFirestore, reduxFirestore } from "redux-firestore"
import { getFirebase, reactReduxFirebase } from "react-redux-firebase"
import { rootReducer } from "./reducers/rootReducer"

export const store = createStore(rootReducer, applyMiddleware(thunk))
