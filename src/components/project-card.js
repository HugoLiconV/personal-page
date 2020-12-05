import React from "react"
import styled from "styled-components"

const Card = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  background-color: #131516;
  flex-direction: row;
  margin-bottom: 16px;
  height: 180px;
  border-radius: 10px;

  .image-container {
    background-size: cover;
    width: 25%;
    min-width: 25%;
    height: 100%;
  }
  .img {
    object-fit: cover;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    width: 100%;
    height: 100%;
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

const PriceLabel = styled.span`
  color: #696969;
  text-transform: uppercase;
`

const Price = styled.span`
  font-size: 0.875rem;
  &:before {
    content: "$";
  }
`

const CardTitle = styled.h3`

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
    <Card className="">
      <figure className="image-container m-0 p-0">
        <img
          src={project.thumbnail}
          className="img m-0 p-0"
          alt={project.title}
        />
      </figure>
      <CardBody>
        <div>
          <CardTitle className="bold m-0">{project.title}</CardTitle>
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
