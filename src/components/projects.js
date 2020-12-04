import React from "react"

/**
 * @typedef {Object} Project
 * @property {string} title
 * @property {string} description
 * @property {string} sourceCode
 * @property {string} url
 * @property {string} thumbnail
 */

const Projects = ({ projects }) => {
  return (
    <>
      <h1>Projects</h1>
      {projects.map(project => (
        <div key={project.title}>
          <h3>{project.title}</h3>
          <img src={project.thumbnail} alt={project.title} key={project.title} />
          <p>{project.description}</p>
          {project.sourceCode ? (
            <a
              href={project.sourceCode}
              target="_blank"
              className="underline"
              style={{ marginRight: 16 }}
              rel="noopener noreferrer"
            >
              Source code
            </a>
          ) : null}
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              className="underline"
              rel="noopener noreferrer"
            >
              Live version
            </a>
          ) : null}
        </div>
      ))}
    </>
  )
}

export default Projects
