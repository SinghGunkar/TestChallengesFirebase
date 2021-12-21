export const signUpUser = payload => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        const firebase = getFirebase()
        const { name, email, password, confirmPassword } = payload

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(response => {
                return firestore.collection("users").doc(response.user.uid).set({
                    name,
                    email
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
            .then(() => {
                dispatch({ type: "SIGNOUT_SUCCESS" })
            })
            .catch(err => {
                console.log(err)
            })
    }
}
