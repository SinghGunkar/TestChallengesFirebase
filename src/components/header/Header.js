import React from "react"
import { Link } from "react-router-dom"

import "./headerStyles.scss"

const Header = ({ currentUser }) => {
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
                    {currentUser ? (
                        <Link
                            className="link"
                            to="/"
                            onClick={() => console.log("signout")}
                        >
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

export default Header
