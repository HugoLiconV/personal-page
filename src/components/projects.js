import React from "react"
import ProjectCard from "./project-card"

const Projects = ({ projects }) => {
  return (
    <div>
      <h1>Projects</h1>
      {projects.map(project => (
        <ProjectCard project={project} key={project.id}/>
      ))}
    </div>
  )
}

export default Projects
