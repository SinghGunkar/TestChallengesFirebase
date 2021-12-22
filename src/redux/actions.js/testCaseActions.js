import inputValidationAPI from "../../apis/inputValidationAPI"

export const validateTestCase = payload => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fireStore = getFirestore()
        const state = getState()
        const uid = state.firebase.auth.uid
        const currentUserTestCases = state.firebase.profile.FoundTestCases.map(
            object => object.testCase
        )
        const currentUserTestCasesWithTimeStamps =
            state.firebase.profile.FoundTestCases

        inputValidationAPI
            .post("/submitTerm", {
                term: payload
            })
            .then(response => {
                return response.data.data
            })
            .then(validatonResults => {
                const newResults = validatonResults.filter(
                    item => !currentUserTestCases.includes(item)
                )

                const isFoundNewTestCases = newResults.length > 0

                console.log(validatonResults)
                console.log("new results: ", newResults)
                console.log("old cases: ", currentUserTestCases)

                if (isFoundNewTestCases) {
                    const foundTestCaseTime = new Date()
                    const foundTestCasesWithTimeStamps = newResults

                    const dataToStore = foundTestCasesWithTimeStamps
                        .map(testCase => ({
                            testCase,
                            timeFound: foundTestCaseTime
                        }))
                        .concat(currentUserTestCasesWithTimeStamps)

                    fireStore.update(
                        { collection: "users", doc: uid },
                        {
                            FoundTestCases: dataToStore
                        }
                    )
                }

                console.log("found no new results")
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
