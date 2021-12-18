import React, { useState } from "react"

import "./signInStyles.scss"
import Button from "../button/Button"
import FormInput from "../form-input/FormInput"

const SignIn = () => {
    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = event => {
        event.preventDefault()
        console.log(
            `Attempted sign in using:\nUsername: ${state.email} \npassword: ${state.password}`
        )
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
            </form>
        </div>
    )
}

export default SignIn
