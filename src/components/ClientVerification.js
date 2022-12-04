import React from "react";

function ClientVerification({ icon, text }) {
    return (
        <div className="clientVerfication">
            <img src={icon} alt="" className="verificationIcon" />
            <span className="verificationText">{text}</span>
        </div>
    )
}

export default ClientVerification