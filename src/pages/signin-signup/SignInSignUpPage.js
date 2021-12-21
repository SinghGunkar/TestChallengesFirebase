import React from "react"
import { connect } from "react-redux"
import SignIn from "../../components/sign-in/SignIn"
import SignUp from "../../components/sign-up/SignUp"
import { Redirect } from "react-router-dom"
import "./signInSignUpStyles.scss"

const SignInSignUpPage = ({ isUserSignedIn }) => {
    if (isUserSignedIn) return <Redirect to="/challenge" />

    return (
        <div className="sign-in-sign-up-container">
            <SignIn />
            <SignUp />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isUserSignedIn: !state.firebase.auth.isEmpty
    }
}

export default connect(mapStateToProps)(SignInSignUpPage)
