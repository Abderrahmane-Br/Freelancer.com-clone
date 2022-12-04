import React, { useRef } from "react";
import Header from "./Header";
import { Outlet } from 'react-router-dom';
import filtersIcon from "../assets/filters.svg"

function Browse() {
  const bodyfilters = useRef();
  function activateBodyFilters() {
    bodyfilters.current.classList.add("active");
    setTimeout(() => bodyfilters.current.classList.add("visible"), 50);
  }
  return (
    <>
      {/* Header */}
      <Header />
      {/* Body */}
      <div className="bodyContainer">
        <div className="bodyContent">
          <div className="filtersTab" onClick={activateBodyFilters}>
            <img src={filtersIcon} alt="" className="filtersIcon" />
            Filter
          </div>
          <Outlet context={bodyfilters} />
        </div>
      </div>

    </>
  )
}

export default Browse