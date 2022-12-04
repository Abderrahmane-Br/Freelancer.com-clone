import React from "react";

function BidUpgrade({
    tag,
    text,
    price
}) {
    return (
        <div className={`bidUpgrade`}>
            <input type="checkbox" className="filtersCheckbox" />
            <span
                className={`projectTag ${tag}`}
            >
                {tag.toUpperCase()}
            </span>
            <p>{text}</p>
            <div className="upgradePrice">{price}</div>
        </div>
    )
}

export default BidUpgrade