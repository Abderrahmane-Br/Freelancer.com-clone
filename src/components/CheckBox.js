import React from 'react'

function CheckBox({ isChecked, label }) {
    return (
        <label htmlFor="" className="filtersCheckLabel">
            <input
                type="checkbox"
                defaultChecked={isChecked}
                className="filtersCheckbox"
            />
            {label}
        </label>
    )
}

export default CheckBox