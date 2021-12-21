import React from "react"
import { connect } from "react-redux"
import "./testCasesFoundStyles.scss"

const TestCasesFound = ({ validationResults }) => {
    return (
        <div className="found-test-cases-container">
            <h3>Test Cases Found</h3>

            {validationResults.map((result, idk) => {
                return <li key={idk}>{result}</li>
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        validationResults: state.testCases.validationResults
    }
}

export default connect(mapStateToProps)(TestCasesFound)
