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
