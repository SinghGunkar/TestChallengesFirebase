import React from "react"
import { useSelector } from "react-redux"
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase"
import "./testCasesFoundStyles.scss"

const TestCasesFound = () => {
    const uid = useSelector(state => state.firebase.auth.uid)

    useFirestoreConnect([{ collection: "users", doc: uid }])

    const foundTestCases = useSelector(
        ({ firestore: { data } }) => data.users && data.users[uid]?.FoundTestCases
    )

    const numberTestCasesFound = foundTestCases ? foundTestCases.length : 0

    if (!foundTestCases) {
        return <h3>You haven't found any test cases yet</h3>
    }

    if (!isLoaded(foundTestCases)) {
        return <h3>Loading</h3>
    }

    if (isEmpty(foundTestCases)) {
        return <h3>You haven't found any test cases yet</h3>
    }

    return (
        <div className="found-test-cases-container">
            <h3>Test Cases Found: {`${numberTestCasesFound}/19`}</h3>

            {foundTestCases.map((result, idk) => {
                return <li key={idk}>{result.testCase}</li>
            })}
        </div>
    )
}

// const mapStateToProps = state => {
//     console.log(state)

//     return {
//         validationResults: state.testCases.validationResults,
//         dataFromFireStore: state.firestore.data,
//         uid: state.firebase.auth.uid
//     }
// }

export default TestCasesFound
