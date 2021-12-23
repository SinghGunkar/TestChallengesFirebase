import React, { useState } from "react"
import { connect } from "react-redux"
import { signIn, signInWithGoogle } from "../../redux/actions.js/authActions"
import "./signInStyles.scss"
import Button from "../button/Button"
import FormInput from "../form-input/FormInput"

const SignIn = ({ signIn, signInError, signInWithGoogle }) => {
    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = event => {
        event.preventDefault()
        signIn(state)
        setState({ email: "", password: "" })
    }

    const handleChange = event => {
        const { value, name } = event.target
        setState(prevState => ({ ...prevState, [name]: value }))
    }

    return (
        <div className="sign-in-container">
            <span className="sign-in-title">Work at Neo?</span>
            <span className="sign-in-sub-title">
                Sign in with your Neo Google account using the blue button
            </span>

            <form className="sign-in-form" onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    handleChange={handleChange}
                    value={state.email || ""}
                    label="email"
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    handleChange={handleChange}
                    value={state.password || ""}
                    label="password"
                    required
                />

                <Button type="submit"> Sign in </Button>
                <Button onClick={signInWithGoogle} isGoogleSignIn={true}>
                    Sign in with Google
                </Button>

                <h5 className="sign-in-error">
                    {signInError ? `${signInError}` : ""}
                </h5>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        signInError: state.auth.signInError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: credentials => dispatch(signIn(credentials)),
        signInWithGoogle: () => dispatch(signInWithGoogle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
