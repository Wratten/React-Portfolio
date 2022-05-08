import React from "react";
import "./projectcards.css";
import { UilCodeBranch } from "@iconscout/react-unicons";

function ProjectCards({ img, link, title }) {
  return (
    <div className="project">
      <div className="project-browser">
        {/* can't seem to pass a title to be used through data file? */}
        <div className="project-name">Project title </div>
        <UilCodeBranch className="icon" color="#f4900c"></UilCodeBranch>
      </div>
      <a href={link} target="_blank" rel="noreferrer" className="container">
        <img src={img} alt="" className="project-img" />
      </a>
    </div>
  );
}

export default ProjectCards;
