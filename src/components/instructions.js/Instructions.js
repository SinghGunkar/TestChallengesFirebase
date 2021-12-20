import React from "react"
import { connect } from "react-redux"
import "./instructionsStyles.scss"

const Instructions = ({ instructions }) => {
    console.log(instructions)

    return (
        <div className="instructions-container">
            <h3>Instructions Go Here</h3>
            <li>instruction 1</li>
            <li>instruction 2</li>
            <li>{instructions + " <=from redux store"}</li>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        instructions: state.testCases.instructions
    }
}

export default connect(mapStateToProps)(Instructions)
