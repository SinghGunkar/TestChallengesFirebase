import React, { useState } from "react"
import { connect } from "react-redux"
import "./testChallengesForm.scss"
import { validateTestCase } from "../../redux/actions.js/testCaseActions"
import FormInput from "../form-input/FormInput"
import Button from "../button/Button"

const TestChallengesForm = ({ fetchValidationResults, appState }) => {
    const [userInput, setUserInput] = useState("")

    const handleChange = e => {
        setUserInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetchValidationResults(userInput)
        setUserInput("")
    }

    return (
        <div className="test-challenges-form-container">
            <h3 className="title">Enter Input below</h3>

            <form className="test-challenges-form">
                <FormInput
                    name="userInput"
                    type="text"
                    handleChange={e => handleChange(e)}
                    value={userInput || ""}
                    label="Text"
                    required
                />
                <Button onClick={handleSubmit} isGoogleSignIn={false} type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        appState: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchValidationResults: userInput => dispatch(validateTestCase(userInput))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestChallengesForm)
