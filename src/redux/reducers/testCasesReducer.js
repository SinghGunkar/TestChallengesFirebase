const initialState = {
    instructions: "Instructions go here"
}

const testCasesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "VALIDATE_TESTCASE":
            console.log("Validated userInput in testCasesReducer.js", action)
            return state
        case "VALIDATE_TESTCASE_ERROR":
            console.log("Error validating the following input" + action.payload)
            return state
        default:
            return state
    }
}

export default testCasesReducer
