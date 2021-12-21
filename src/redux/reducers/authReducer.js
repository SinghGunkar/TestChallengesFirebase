const initialState = { authError: null }

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_ERROR":
            console.log("Login error")
            return {
                ...state,
                authError: "Login failed"
            }
        case "LOGIN_SUCCESS":
            console.log("Login success")
            return {
                ...state,
                authError: null
            }
        case "SIGNOUT_SUCCESS":
            console.log("Logout success")
            return state
        case "SIGNUP_SUCCESS":
            console.log("Sign up success")
            return {
                ...state,
                authError: null
            }
        case "SIGNUP_ERROR":
            console.log("Sign up error", action.payload.message)
            return state
        default:
            return state
    }
}

export default authReducer
