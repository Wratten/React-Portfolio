import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./projectlist.css";
import { projects } from "../../data";

function ProjectList() {
  return (
    <div className="project-list">
      <div className="project-list-texts">
        <h1 className="project-list-title">
          Check out my <b>Projects</b>
        </h1>
        <p className="project-list-description">
          Over the last six months, I've built a project every week. You're more
          than welcome to take a look! Click on the image to go to the deployed
          application and the code symbol to checkout the repo.
        </p>
      </div>
      <div className="project-list-listing">
        {projects.map((item) => (
          <ProjectCard
            key={item.id}
            img={item.img}
            deployedLink={item.deployedLink}
            repoLink={item.repoLink}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
