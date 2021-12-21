import React from "react"
import "./challengePageStyles.scss"
import Instructions from "../../components/instructions.js/Instructions"
import TestChallengesForm from "../../components/test-challenges-form/TestChallengesForm"
import TestCasesFound from "../../components/testCasesFound/TestCasesFound"
import { connect } from "react-redux"
import { firebaseConnect } from "react-redux-firebase"
import { Redirect } from "react-router-dom"

const ChallengePage = ({ isUserSignedIn }) => {
    if (!isUserSignedIn) return <Redirect to="/signinsignup" />

    return (
        <div className="challenge-page-container">
            <div className="left-column">
                <Instructions />
                <TestChallengesForm />
            </div>

            <div className="right-column">
                <TestCasesFound />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isUserSignedIn: !state.firebase.auth.isEmpty
    }
}

export default connect(mapStateToProps)(ChallengePage)
