import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { getFirestore, reduxFirestore } from "redux-firestore"
import { getFirebase } from "react-redux-firebase"
import { rootReducer } from "./reducers/rootReducer"
import { firebaseConfig } from "../config/firebaseConfig"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
        reduxFirestore(firebaseConfig)
    )
)
