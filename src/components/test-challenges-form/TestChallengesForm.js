import React from "react"
import { connect } from "react-redux"
import "./testChallengesForm.scss"
import { validateTestCase } from "../../redux/actions.js/testCaseActions"

const TestChallengesForm = ({ props }) => {
    return (
        <div>
            <h1>TestChallengesForm</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        instructions: state.testCases.instructions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        validateTestCase: userInput => dispatch(validateTestCase(userInput))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestChallengesForm)
