import inputValidationAPI from "../../apis/inputValidationAPI"

export const validateTestCase = payload => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fireStore = getFirestore()
        const firebase = getFirebase()
        const uid = getState().firebase.auth.uid

        console.log(uid)

        inputValidationAPI
            .post("/submitTerm", {
                term: payload
            })
            .then(response => {
                return response.data.data
            })
            .then(validatonResults => {
                fireStore.update(
                    { collection: "users", doc: uid },
                    { FoundTestCases: validatonResults }
                )

                return validatonResults
            })
            .then(validatonResults => {
                dispatch({
                    type: "VALIDATE_TESTCASE_SUCCESS",
                    payload: validatonResults
                })
            })
            .catch(err => console.log(err))
    }
}
