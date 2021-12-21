import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { compose } from "redux"
import { signOut } from "../../redux/actions.js/authActions"
import "./headerStyles.scss"

const Header = ({ isUserLoggedOut, logOut }) => {
    console.log(isUserLoggedOut)

    return (
        <div className="header">
            <Link className="logo-wrapper" to="/">
                HOME
            </Link>

            <div className="navigation-links-wrapper">
                <div>
                    <Link className="link" to="/challenge">
                        CHALLENGE
                    </Link>
                </div>

                <div>
                    {isUserLoggedOut ? (
                        <Link className="link" to="/signinsignup">
                            SIGNIN
                        </Link>
                    ) : (
                        <Link className="link" to="/" onClick={logOut}>
                            SIGNOUT
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)

    return { isUserLoggedOut: state.firebase.auth.isEmpty }
}

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch(signOut())
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Header)
