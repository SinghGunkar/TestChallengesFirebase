import React from "react"
import { Switch, Route } from "react-router-dom"

import "./App.css"

import Header from "./components/header/Header"
import HomePage from "./pages/homepage/HomePage"
import SignInSignUpPage from "./pages/signin-signup/SignInSignUpPage"
import ContactPage from "./pages/contact/ContactPage"

function App() {
    return (
        <div>
            <Header currentUser={undefined} />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/signinsignup" component={SignInSignUpPage} />
                <Route path="/contact" component={ContactPage} />
            </Switch>
        </div>
    )
}

export default App
