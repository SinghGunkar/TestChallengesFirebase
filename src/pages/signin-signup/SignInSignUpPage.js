import React from "react"

import SignIn from "../../components/sign-in/SignIn"
import SignUp from "../../components/sign-up/SignUp"

import "./signInSignUpStyles.scss"

const SignInSignUpPage = () => {
    return (
        <div className="sign-in-sign-up-container">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInSignUpPage
