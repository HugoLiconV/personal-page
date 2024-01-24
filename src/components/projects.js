import React from "react"
import ProjectCard from "./project-card"

const Projects = ({ projects }) => {
  return (
    <div>
      <h2>Projects</h2>
      {projects.map(project => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  )
}

export default Projects
