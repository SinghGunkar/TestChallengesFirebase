import React, { useState } from "react"
import { connect } from "react-redux"
import "./testChallengesForm.scss"
import { validateTestCase } from "../../redux/actions.js/testCaseActions"
import FormInput from "../form-input/FormInput"
import Button from "../button/Button"
import { setIsFetchingState } from "../../redux/actions.js/testCaseActions"

const TestChallengesForm = ({
    fetchValidationResults,
    fetchingStatus,
    setAPIRequestStatusToFetching
}) => {
    const [userInput, setUserInput] = useState("")

    const handleChange = e => {
        setUserInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setAPIRequestStatusToFetching()
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
                    disabled={fetchingStatus === "fetching" ? "disabled" : ""}
                    required
                />

                {fetchingStatus === "fetching" ? (
                    <h3 className="loading-text">Loading</h3>
                ) : (
                    <Button
                        onClick={handleSubmit}
                        isGoogleSignIn={false}
                        type="submit"
                    >
                        Submit
                    </Button>
                )}
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        fetchingStatus: state.testCases.fetchingState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchValidationResults: userInput => dispatch(validateTestCase(userInput)),
        setAPIRequestStatusToFetching: () => dispatch(setIsFetchingState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestChallengesForm)
