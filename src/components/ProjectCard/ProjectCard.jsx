import React from "react";
import "./projectcard.css";
import { UilCodeBranch } from "@iconscout/react-unicons";

function ProjectCards({ img, deployedLink, repoLink, title }) {
  return (
    <div className="project">
      <div className="project-browser">
        {/* can't seem to pass a title to be used through data file? */}
        <div className="project-name"> {title} </div>
        <a
          href={repoLink}
          target="_blank"
          rel="noreferrer"
          className="project-icon-container"
        >
          <UilCodeBranch
            className="icon"
            size="23"
            color="#f4900c"
          ></UilCodeBranch>
        </a>
      </div>
      <a
        href={deployedLink}
        target="_blank"
        rel="noreferrer"
        className="container"
      >
        <img src={img} alt="" className="project-img" />
      </a>
    </div>
  );
}

export default ProjectCards;
