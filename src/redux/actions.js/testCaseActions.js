export const validateTestCase = payload => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        firestore
            .collection("Users")
            .add({
                email: payload,
                name: payload,
                password: payload
            })
            .then(() => {
                dispatch({ type: "VALIDATE_TESTCASE", payload })
            })
            .catch(err => {
                dispatch({ type: "VALIDATE_TESTCASE_ERROR" })
            })
    }
}
