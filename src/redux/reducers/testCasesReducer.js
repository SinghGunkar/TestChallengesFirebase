const initialState = {
    instructions: "Instructions go here"
}

const testCasesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "VALIDATE_TESTCASE":
            console.log("validated userInput in testCasesReducer.js", action)
    }

    return state
}

export default testCasesReducer
