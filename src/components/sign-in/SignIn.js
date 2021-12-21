import React, { useState } from "react"
import { connect } from "react-redux"
import { signIn } from "../../redux/actions.js/authActions"
import "./signInStyles.scss"
import Button from "../button/Button"
import FormInput from "../form-input/FormInput"

const SignIn = ({ signIn, authError }) => {
    const [state, setState] = useState({
        email: "",
        password: ""
    })

    console.log(authError)

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
            <span className="sign-in-title">Already have an account?</span>
            <span className="sign-in-sub-title">
                Sign in with your email and password
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
                <Button
                    onClick={() => console.log("handle sign in with Google")}
                    isGoogleSignIn={true}
                >
                    Sign in with Google
                </Button>

                <h5 className="sign-in-error">{authError ? `${authError}` : ""}</h5>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: credentials => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
