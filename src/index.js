import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { createStore } from "redux"
import rootReducer from "./redux/rootReducer"
import "./index.css"
import App from "./App"
import { Provider } from "react-redux"

const store = createStore(rootReducer)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
)
