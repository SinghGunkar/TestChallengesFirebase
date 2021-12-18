import React from "react"

import "./menuItemStyles.scss"

const MenuItem = ({ title, imageUrl, imageAlt, subTitle }) => {
    return (
        <div className={`menu-item`}>
            <div className="background-image">
                <img src={imageUrl} alt={imageAlt} />
            </div>

            <div className="content">
                <div>
                    <h1 className="title">{title.toUpperCase()}</h1>
                </div>
                <div>
                    <h1 className="subtitle">{subTitle.toUpperCase()}</h1>
                </div>
            </div>
        </div>
    )
}

export default MenuItem
