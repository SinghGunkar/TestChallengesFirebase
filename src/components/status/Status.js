import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

/* 

Todo: if there is time create a timer component here that shows how much time a user has left
Edit: attempted, issues with Javascritp epoch to date conversion

*/

const Status = ({ isUserSignedIn, userCreationTime, firebase }) => {
    const date = Date(userCreationTime)

    return (
        <div className="status-container">
            <h5>Time remaining</h5>
            <h5>{Date(5 / 1000)}</h5>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isUserSignedIn: !state.firebase.auth.isEmpty,
        userCreationTime: state.firebase.auth.createdAt,
        firebase: state.firebase
    }
}

export default connect(mapStateToProps)(Status)
