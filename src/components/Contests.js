import React from "react";
import { useOutletContext } from "react-router-dom";
import Feed from "./Feed";
import Filters from "./Filters";
import { jobs as contests } from "../data"

function Contests() {
  return (
    <>
      <Filters type="contests" reference={useOutletContext()} />
      <Feed type="contests" data={contests} />
    </>
  )
}

export default Contests