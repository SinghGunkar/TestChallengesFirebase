import React from "react"
import "./instructionsStyles.scss"

const Instructions = () => {
    return (
        <div className="instructions-container">
            <h3>Instructions</h3>
            <li>Perform input (text) validation using the text field</li>
            <li>Here are some contraints:</li>
            <li>Maximum length: 20</li>
            <li>Minimum length: 10</li>
            <li>Using the constraints above, can you find all of the test cases?</li>
        </div>
    )
}

export default Instructions
