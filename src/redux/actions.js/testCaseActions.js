import inputValidationAPI from "../../apis/inputValidationAPI"

/* 
    Note: the code is this file is a messy. Suggested course of action to clean up the code below
    - refactor the code logic below into seperate actions and reducers
    - transfer client side logic over to firebase cloud functions, caveat: this will increase costs
*/

export const validateTestCase = payload => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const fireStore = getFirestore()
        const state = getState()
        const uid = state.firebase.auth.uid
        const lastLoginAt = state.firebase.auth.lastLoginAt
        const lastLoginAtFormatted = Date(lastLoginAt)

        let currentUserTestCases = state.firebase.profile.FoundTestCases?.map(
            object => object.testCase
        )

        if (!currentUserTestCases) {
            currentUserTestCases = []
        }

        let currentUserTestCasesWithTimeStamps =
            state.firebase.profile?.FoundTestCases

        if (!currentUserTestCasesWithTimeStamps) {
            currentUserTestCasesWithTimeStamps = []
        }

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

                if (isFoundNewTestCases) {
                    let foundTestCaseTime = new Date()
                    foundTestCaseTime = foundTestCaseTime.toUTCString()

                    const foundTestCasesWithTimeStamps = newResults

                    const dataToStore = foundTestCasesWithTimeStamps
                        .map(testCase => ({
                            testCase,
                            timeFound: foundTestCaseTime,
                            lastLogin: lastLoginAtFormatted
                        }))
                        .concat(currentUserTestCasesWithTimeStamps)

                    fireStore.update(
                        { collection: "users", doc: uid },
                        {
                            FoundTestCases: dataToStore
                        }
                    )
                }

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

export const setIsFetchingState = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        return dispatch({
            type: "START_FETCHING_VALIDATION_RESULTS",
            payload: "fetching"
        })
    }
}
