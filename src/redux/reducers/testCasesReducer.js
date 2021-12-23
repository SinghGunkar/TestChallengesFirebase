const initialState = {
    instructions: "Instructions go here",
    validationResults: [],
    fetchingState: "idle"
}

const testCasesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "VALIDATE_TESTCASE":
            return { ...state, validationResults: action.payload }
        case "VALIDATE_TESTCASE_ERROR":
            console.log("Error validating the following input" + action.payload)
            return { ...state, fetchingState: "idle" }
        case "VALIDATE_TESTCASE_SUCCESS":
            console.log("Validation was success")
            return { ...state, fetchingState: "idle" }
        case "START_FETCHING_VALIDATION_RESULTS":
            console.log("Fetching validation results")
            return { ...state, fetchingState: action.payload }
        default:
            return state
    }
}

export default testCasesReducer
