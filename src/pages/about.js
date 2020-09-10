import React from "react"
import devtoIcon from "../images/devto.svg"
import linkedInIcon from "../images/linkedin-icon.svg"
import twitterIcon from "../images/twitter.svg"
import githubIcon from "../images/github-icon.svg"

const About = () => {
  const contactLinks = [
    {
      href: "https://twitter.com/hugoliconv",
      src: twitterIcon,
      alt: "Twitter profile",
    },
    {
      href: "https://www.linkedin.com/in/hugoliconv/",
      src: linkedInIcon,
      alt: "Linkedin profile",
    },
    {
      href: "https://github.com/hugoliconv",
      src: githubIcon,
      alt: "GitHub profile",
    },
    { href: "https://dev.to/hugoliconv", src: devtoIcon, alt: "Devto profile" },
  ]

  return (
    <>
      <h1>About</h1>
      <p>
        Full-stack developer with experience building complete solutions on
        React, Node and React Native.
      </p>
      <p>
        I am passionate about helping people through software, sharing my
        knowledge and learning more every day.
      </p>
      <p>
        I'm currently working full time at Prixz on a mobile app using React
        Native and a web app using React + GraphQL for a medication delivery
        system.
      </p>
      <h1>Projects</h1>

      <h1>Contact</h1>

      <div
        style={{ display: "flex", width: 150, justifyContent: "space-around" }}
      >
        {contactLinks.map(({ alt, href, src }) => (
          <a href={href} target="_blank" rel="noopener noreferrer" key={href}>
            <img src={src} alt={alt} height={24} />
          </a>
        ))}
      </div>
      <a
        href="mailto:hugo.val28@gmail.com"
        className="underline"
        style={{ margin: "1rem 0" }}
      >
        hugo.val28@gmail.com
      </a>
    </>
  )
}

export default About
