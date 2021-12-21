import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { compose } from "redux"
import { signOut } from "../../redux/actions.js/authActions"
import "./headerStyles.scss"

const Header = ({ isUserSignedIn, logOut, isAuthStateLoaded }) => {
    console.log(isAuthStateLoaded)

    return (
        <div className="header">
            <Link className="logo-wrapper" to="/">
                HOME
            </Link>

            <div className="navigation-links-wrapper">
                <div>
                    {isUserSignedIn && isAuthStateLoaded ? (
                        <Link className="link" to="/challenge">
                            CHALLENGE
                        </Link>
                    ) : (
                        ""
                    )}
                </div>

                <div>
                    {isUserSignedIn && isAuthStateLoaded ? (
                        <Link className="link" to="/" onClick={logOut}>
                            SIGNOUT
                        </Link>
                    ) : (
                        <Link className="link" to="/signinsignup">
                            SIGNIN
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isUserSignedIn: !state.firebase.auth.isEmpty,
        isAuthStateLoaded: state.firebase.auth.isLoaded
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch(signOut())
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Header)
