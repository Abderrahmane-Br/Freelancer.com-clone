import React from "react";
import { filters } from "../filters";
import leftArrow from "../assets/leftArrow.svg"
import SearchBar from "./SearchBar";
import CheckBox from "./CheckBox";

function Filters({ type, reference }) {
    function deactivateBodyFilters() {
        reference.current.classList.remove("visible");
        setTimeout(() => reference.current.classList.remove("active"), 210)
    }
    return (
        <div className="bodyFiltersContainer" ref={reference}>
            <div className="bodyFiltersHeader">
                <img
                    src={leftArrow}
                    alt=""
                    className="filtersBackIcon"
                    onClick={deactivateBodyFilters}
                />
                <h3>Filters</h3>
            </div>
            <div className="bodyFilters" >
                {filters[type].map(filter => createFilter(filter))}
            </div>
            <div className="filtersResultsBtn">
                <button className="filtersResults" onClick={deactivateBodyFilters} >Show results</button>
            </div>
        </div>
    );
}

export default Filters

function createFilter(filter) {
    switch (filter.type) {
        case "title":
            return (
                <h4 className="filtersTitle">{filter.value}</h4>
            );
        case "checkbox":
            return (
                <CheckBox isChecked={filter.isChecked} label={filter.label} />
            );
        case "moneyInput":
            return (
                <div className="filtersInputContainer">
                    <label className="filtersInputLabel">
                        {filter.label}
                    </label>
                    <div className="filtersInput blue--border">
                        <span>$</span>
                        <input
                            type="text"
                            placeholder={filter.placeholder}
                            className="textInput"
                        />
                        <span>USD</span>
                    </div>
                </div>
            )
        case "searchInput":
            return (
                <SearchBar placeholder={filter.placeholder} />
            );
        default:
            return;
    }
}