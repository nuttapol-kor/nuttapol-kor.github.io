import React from "react";
import "./project-card.css";
import { MdComputer } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a
              className="project-link"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-button">
                <MdComputer />
                Demo
              </div>
            </a>
          )}
          {project.github && (
            <a
              className="project-link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-button">
                <AiFillGithub />
                Github
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <div className="cover-img">
        <img
          src={project.image}
          className="project-photo-mobile"
          alt="project"
        />
      </div>
      <img src={project.image} className="project-photo" alt="project" />
    </div>
  );
}

export default ProjectCard;
