import React from "react"

import MenuItem from "../menu-item/MenuItem"

import "./directoryStyles.scss"

const Directory = () => {
    const homePageDisplayData = {
        id: 1,
        title: "Neo QA",
        subTitle: "Testing Challenge",
        imageUrl:
            "https://images.pexels.com/photos/3137079/pexels-photo-3137079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",

        imageAlt: "blackBackground"
    }

    return (
        <div className="directory-comp">
            <MenuItem
                key={homePageDisplayData.id}
                title={homePageDisplayData.title}
                subTitle={homePageDisplayData.subTitle}
                imageUrl={homePageDisplayData.imageUrl}
                imageAlt={homePageDisplayData.imageAlt}
            />
        </div>
    )
}

export default Directory
