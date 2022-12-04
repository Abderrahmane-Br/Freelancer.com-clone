import React from "react";
import searchIcon from "../assets/search.svg";


export default function SearchBar({ placeholder }) {
    return (
        <div className="filtersInputContainer">
            <div className="filtersInput blue--border">
                <img src={searchIcon} alt="" className="filters__searchIcon" />
                <input
                    type="text"
                    className="textInput filters__searchInput"
                    placeholder={placeholder} />
            </div>
        </div>
    )
}
