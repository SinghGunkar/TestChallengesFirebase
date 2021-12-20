export const validateTestCase = payload => {
    return (dispatch, getState) => {
        // make async call

        console.log("validate: " + payload)

        dispatch({ type: "VALIDATE_TESTCASE", payload })
    }
}
