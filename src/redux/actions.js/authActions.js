export const signUpUser = payload => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        const firebase = getFirebase()

        /* 
        Note: confirm password functionality is not implemented, use:
        `const { name, email, password, confirmPassword } = payload`
        to destrucutre paramaters of the payload 
        */

        const { name, email, password } = payload

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(response => {
                return firestore.collection("users").doc(response.user.uid).set({
                    name,
                    email,
                    FoundTestCases: []
                })
            })
            .then(() => {
                dispatch({ type: "SIGNUP_SUCCESS" })
            })
            .catch(err => {
                dispatch({ type: "SIGNUP_ERROR", payload: err })
            })
    }
}

export const signIn = payload => {
    const { email, password } = payload

    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                dispatch({ type: "LOGIN_SUCCESS" })
            })
            .catch(err => {
                dispatch({ type: "LOGIN_ERROR", payload: err })
            })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()

        firebase
            .logout()
            .then(response => {
                dispatch({ type: "SIGNOUT_SUCCESS" })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const signInWithGoogle = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase()
        firebase
            .login({
                provider: "google",
                type: "popup"
            })
            .then(response => {
                return dispatch({
                    type: "GOOGLE_SIGN_IN_SUCCESS"
                })
            })
            .catch(err => {
                dispatch({ type: "LOGIN_ERROR", payload: err })
            })
    }
}
