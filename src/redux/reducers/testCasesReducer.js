const initialState = {
    instructions: "Instructions go here"
}

const testCasesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "VALIDATE_TESTCASE":
            console.log("validated userInput in testCasesReducer.js", action)
            return state
        case "VALIDATE_TESTCASE_ERROR":
            console.log("error validating the following input" + action.payload)
            return state
        default:
            console.log(
                "dafault case ran in testCasesReducer.js (this should not be happening in prod)"
            )
            return state
    }
}

export default testCasesReducer
