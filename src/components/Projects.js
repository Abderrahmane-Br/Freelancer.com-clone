import React from "react";
import Feed from "./Feed";
import Filters from "./Filters";
import { jobs as projects } from "../data";
import { useOutletContext } from "react-router-dom";

function Projects() {
  return (
    <>
      <Filters type="projects" reference={useOutletContext()}
      />
      <Feed
        type="projects"
        data={projects}
      />
    </>
  )
}

export default Projects