import React from "react"
import styled from "styled-components"

const Card = styled.div`
  color: white;
  display: flex;
  background-color: rgb(10, 25, 41);
  margin-bottom: 2rem;
  border-radius: 10px;
  flex-direction: column;

  .image-container {
    width: 100%;
    height: 100%;
  }

  .img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  /* Tablet */
  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    height: 180px;
    .image-container {
      width: 25%;
      min-width: 25%;
      height: 100%;
    }
    .img {
      border-bottom-left-radius: 6px;
      border-top-left-radius: 6px;
    }
  }
`

const CardBody = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const CardDescription = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
`

const CardActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

/**
 * @typedef {Object} Project
 * @property {string} title
 * @property {string} description
 * @property {string} sourceCode
 * @property {string} url
 * @property {string} thumbnail
 */

/**
 *
 * @param {Object} props
 * @param {Project} props.project
 */
function ProjectCard({ project }) {
  return (
    <Card>
      <figure className="image-container m-0 p-0">
        <img
          src={project.thumbnail}
          className="img m-0 p-0"
          alt={project.title}
        />
      </figure>
      <CardBody>
        <div>
          <h3 className="bold m-0">{project.title}</h3>
          <CardDescription>{project.description}</CardDescription>
        </div>
        <CardActions>
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
        </CardActions>
      </CardBody>
    </Card>
  )
}

export default ProjectCard
