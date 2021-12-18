import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { store } from "./redux/store"
import "./index.css"
import App from "./App"
import { Provider } from "react-redux"

const rootElement = document.getElementById("root")

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    rootElement
)
