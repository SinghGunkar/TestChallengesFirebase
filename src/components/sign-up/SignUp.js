import React, { useState } from "react"
import { connect } from "react-redux"
import Button from "../button/Button"
import FormInput from "../form-input/FormInput"
import { signUpUser } from "../../redux/actions.js/authActions"

import "./signUpStyles.scss"

const SignUp = ({ signUpUser, signUpError }) => {
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleSubmit = event => {
        event.preventDefault()
        console.log(
            `Attempted sign in using:\nUsername: ${state.name}\n${state.email}\nPassword: ${state.password}\nConfirmPassword: ${state.confirmPassword}`
        )
        signUpUser(state)
        setState({ name: "", email: "", password: "", confirmPassword: "" })
    }

    const handleChange = event => {
        const { value, name } = event.target
        setState(prevState => ({ ...prevState, [name]: value }))
    }

    return (
        <div className="sign-up-container">
            <span className="sign-up-title">Don't have an account?</span>
            <span className="sign-up-sub-title">Sign up instead</span>

            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    name="name"
                    type="name"
                    handleChange={e => handleChange(e)}
                    value={state.name || ""}
                    label="name"
                    required
                />

                <FormInput
                    name="email"
                    type="email"
                    handleChange={e => handleChange(e)}
                    value={state.email || ""}
                    label="email"
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    handleChange={e => handleChange(e)}
                    value={state.password || ""}
                    label="password"
                    required
                />

                <FormInput
                    name="confirmPassword"
                    type="password"
                    handleChange={e => handleChange(e)}
                    value={state.confirmPassword || ""}
                    label="confirm password"
                    required
                />

                <Button type="submit"> Sign Up </Button>
                <br />
                <h5 className="sign-up-error">
                    {signUpError ? `${signUpError}` : ""}
                </h5>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        signUpError: state.auth.signUpError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUpUser: userSignUpData => dispatch(signUpUser(userSignUpData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
