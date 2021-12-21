export const signUpUser = payload => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        const { name, email, password, confirmPassword } = payload

        firestore
            .collection("Users")
            .add({
                name,
                email,
                password,
                confirmPassword
            })
            .then(() => {
                dispatch({ type: "SIGN_UP_USER", payload })
            })
            .catch(err => {
                dispatch({ type: "SIGN_UP_USER_ERROR" })
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

        // console.log(firebase)

        firebase
            .logout()
            .then(() => {
                dispatch({ type: "SIGNOUT_SUCCESS" })
            })
            .catch(err => {
                console.log(err)
            })
    }
}
