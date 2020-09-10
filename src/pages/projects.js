import React from "react"

/**
 * @typedef {Object} Project
 * @property {string} name
 * @property {string} description
 * @property {string} sourceCode
 * @property {string} liveVersion
 * @property {string} image
 */

const Projects = () => {
  /**
   * @type {Project[]}
   */
  const projects = [
    {
      name: "Spotify Clone",
      description:
        "A Spotify clone using React, Redux, Jest, Enzyme.\nIt's a PWA so it can be installed on your phone or computer.",
      sourceCode: "https://github.com/HugoLiconV/Spotify-react",
      liveVersion: "https://react-spotify-player.firebaseapp.com/",
      image:
        "https://github.com/HugoLiconV/Spotify-react/raw/master/screenshots/Desktop.png?raw=true",
    },
    {
      name: "Pricer",
      description:
        "A web application that tracks products from some stores and notifies you when a price goes down.",
      sourceCode: "https://github.com/HugoLiconV/Shop-scraper-website",
      liveVersion: "https://shop-scraper.firebaseapp.com/",
      image:
        "https://github.com/HugoLiconV/Shop-scraper-v2/raw/master/screenshots/home%20-%20desktop.png?raw=true",
    },
    {
      name: "Dotfiles",
      description:
        "Recently, I spent some time improving my development tools like vim, tmux, and shell.",
      sourceCode: "https://github.com/HugoLiconV/dotfiles",
      liveVersion: "",
      image:
        "https://github.com/HugoLiconV/dotfiles/raw/master/images/tmux.png",
    },
  ]
  return (
    <>
      <h1>Projects</h1>
      {projects.map(project => (
        <>
          <h3>{project.name}</h3>
          <img src={project.image} alt={project.name} key={project.name} />
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
          {project.liveVersion ? (
            <a
              href={project.liveVersion}
              target="_blank"
              className="underline"
              rel="noopener noreferrer"
            >
              Live version
            </a>
          ) : null}
        </>
      ))}
    </>
  )
}

export default Projects
