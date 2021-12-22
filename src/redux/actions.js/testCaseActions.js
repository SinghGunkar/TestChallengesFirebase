import inputValidationAPI from "../../apis/inputValidationAPI"

export const validateTestCase = payload => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fireStore = getFirestore
        const uid = getState().firebase.auth.uid

        console.log(fireStore)

        inputValidationAPI
            .post("/submitTerm", {
                term: payload
            })
            .then(response =>
                dispatch({
                    type: "VALIDATE_TESTCASE",
                    payload: response.data.data
                })
            )
            .catch(err => console.log(err))
    }
}
