import React from "react"

import "./formInputStyles.scss"

const FormInput = ({ handleChange, label, ...otherProps }) => {
    const conditionalShrinkClassName = otherProps.value.length
        ? "shrink"
        : ""

    return (
        <div className="group">
            <input
                className="form-input"
                onChange={handleChange}
                {...otherProps}
            />

            {label ? (
                <label
                    className={`${conditionalShrinkClassName} form-input-label`}
                >
                    {label}
                </label>
            ) : null}
        </div>
    )
}

export default FormInput
