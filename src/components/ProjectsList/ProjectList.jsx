import React from "react";
import ProjectCards from "../ProjectCards/ProjectCards";
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis iusto
          eum optio beatae possimus quaerat pariatur placeat dolor quam?
          Consequatur culpa, autem repudiandae voluptatem eum rem voluptate?
          Adipisci, ut dicta.
        </p>
      </div>
      <div className="project-list-listing">
        {projects.map((item) => (
          <ProjectCards
            key={item.Id}
            img={item.img}
            link={item.link}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
