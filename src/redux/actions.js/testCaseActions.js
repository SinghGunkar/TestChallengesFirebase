import inputValidationAPI from "../../apis/inputValidationAPI"

export const validateTestCase = payload => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
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
