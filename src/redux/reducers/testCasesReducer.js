const initialState = {
    instructions: "Instructions go here",
    validationResults: []
}

const testCasesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "VALIDATE_TESTCASE":
            return { ...state, validationResults: action.payload }
        case "VALIDATE_TESTCASE_ERROR":
            console.log("Error validating the following input" + action.payload)
            return state
        default:
            return state
    }
}

export default testCasesReducer
