import React from "react"
import "./contactpageStyles.scss"
import Instructions from "../../components/instructions.js/Instructions"
import TestChallengesForm from "../../components/test-challenges-form/TestChallengesForm"

const ChallengePage = () => {
    return (
        <div>
            <Instructions />
            <TestChallengesForm />
        </div>
    )
}

export default ChallengePage
