import React from "react";
import "./project-card.css";
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo} target="_blank" rel="noreferrer">
              <div className="link-button">
                <i class="fi-rr-globe"></i>Demo
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
              <div className="link-button">
                <i class="devicon-github-original colored"></i>Github
              </div>
            </a>
          )}
        </div>
        <p className="project-about">{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag, id) => {
            return <label className="tag" key={id}>{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.image} className="project-photo" alt={project.title} />
    </div>
  );
}

export default ProjectCard;