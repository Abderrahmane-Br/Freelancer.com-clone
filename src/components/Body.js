import React from "react";
import Filters from "./Filters";
import Feed from "./Feed";

function Body() {
    return (
        <div className="bodyContainer">
            {/* Filters */}
            <Filters />
            {/* Feed */}
            <Feed />
        </div>
    )
}

export default Body