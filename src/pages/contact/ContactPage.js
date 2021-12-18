import React from "react"
import { connect } from "react-redux"

import "./contactpageStyles.scss"

const ContactPage = props => {
    console.log(props)

    return (
        <div>
            <h1>Have feedback?</h1>
            <h2>{props.testCases}</h2>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        testCases: state.testCases.instructions
    }
}

export default connect(mapStateToProps)(ContactPage)
