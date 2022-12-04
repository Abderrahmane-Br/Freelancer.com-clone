import React from "react";
import Feed from "./Feed";
import Filters from "./Filters";
import { useOutletContext } from "react-router-dom";

function Freelancers() {
  return (
    <>
      <Filters type="freelancers" reference={useOutletContext()} />
      <Feed type="freelancers" />
    </>
  )
}

export default Freelancers