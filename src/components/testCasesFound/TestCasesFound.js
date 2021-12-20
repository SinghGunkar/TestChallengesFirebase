import React from "react"
import { connect } from "react-redux"
import "./testCasesFoundStyles.scss"

const TestCasesFound = ({ instructions }) => {
    return (
        <div className="found-test-cases-container">
            <h3>Test Cases Found</h3>
            <li>Test case 1</li>
            <li>Test case 2</li>
            <li>Test case 3</li>
            <li>Test case 4</li>
            <li>Test case 5</li>
            <li>Test case 6</li>
            <li>Test case 7</li>
            <li>Test case 8</li>
            <li>{instructions + "(from redux)"}</li>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        instructions: state.testCases.instructions
    }
}

export default connect(mapStateToProps)(TestCasesFound)
