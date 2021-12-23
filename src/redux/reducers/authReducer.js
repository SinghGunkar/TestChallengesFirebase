const initialState = { signInError: null, signUpError: null }

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_ERROR":
            console.log("Login error")
            return {
                ...state,
                signInError: "Login failed"
            }
        case "LOGIN_SUCCESS":
            console.log("Login success")
            return {
                ...state,
                signInError: null
            }
        case "SIGNOUT_SUCCESS":
            console.log("Logout success")
            return state
        case "SIGNUP_SUCCESS":
            console.log("Sign up success")
            return {
                ...state,
                signUpError: null
            }
        case "SIGNUP_ERROR":
            console.log("Sign up error")
            return {
                ...state,
                signUpError: action.payload.message
            }
        case "GOOGLE_SIGN_IN_SUCCESS":
            console.log(action)
            console.log("Google sign in success")
            return {
                ...state,
                signUpError: null
            }
        default:
            return state
    }
}

export default authReducer
