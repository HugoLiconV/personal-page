import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { trackClickProject } from "../services/analytics"

const Card = styled.div`
  color: var(--font-color);
  display: flex;
  background-color: var(--card-bg-color);
  margin-bottom: 2rem;
  border-radius: 10px;
  flex-direction: column;

  .image-container {
    width: 100%;
    aspect-ratio: 4 / 3;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      margin: 0;
    }
  }

  /* Tablet */
  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    .image-container {
      width: 500px;
      border-bottom-left-radius: 6px;
      border-top-left-radius: 6px;
      border-top-right-radius: 0px;
    }
  }
`

const CardBody = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    font-size: 1.8rem;
  }
`
const CardDescription = styled.p`
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
      <GatsbyImage
        image={project.thumbnail.childImageSharp.gatsbyImageData}
        src={project.thumbnail}
        className="image-container m-0 p-0"
      />
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
              onClick={() => {
                trackClickProject(project.title, "source code")
              }}
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
              onClick={() => {
                trackClickProject(project.title, "live")
              }}
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
