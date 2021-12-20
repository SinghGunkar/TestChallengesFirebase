import React from "react"
import "./challengePageStyles.scss"
import Instructions from "../../components/instructions.js/Instructions"
import TestChallengesForm from "../../components/test-challenges-form/TestChallengesForm"
import TestCasesFound from "../../components/testCasesFound/TestCasesFound"

const ChallengePage = () => {
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

export default ChallengePage
