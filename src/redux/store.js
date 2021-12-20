import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from "redux-thunk"
import { getFirestore, reduxFirestore } from "redux-firestore"
import { getFirebase, reactReduxFirebase } from "react-redux-firebase"
import { rootReducer } from "./reducers/rootReducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)
