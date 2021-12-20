import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { store } from "./redux/store"
import "./index.css"
import App from "./App"
import { Provider } from "react-redux"
import firebase, { firebaseConfig } from "./config/firebaseConfig"
import { createFirestoreInstance } from "redux-firestore"
import { ReactReduxFirebaseProvider } from "react-redux-firebase"

const rootElement = document.getElementById("root")

const rrfProps = {
    firebase,
    config: firebaseConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ReactReduxFirebaseProvider>
        </Provider>
    </React.StrictMode>,
    rootElement
)
