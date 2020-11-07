import React from "react"
import devtoIcon from "../images/devto.svg"
import linkedInIcon from "../images/linkedin-icon.svg"
import twitterIcon from "../images/twitter.svg"
import githubIcon from "../images/github-icon.svg"

const Contact = () => {
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
    {
      href: "https://dev.to/hugoliconv",
      src: devtoIcon,
      alt: "Devto profile",
    },
  ]

  return (
    <>
      <h1>Contact</h1>
      If you would like to talk send me an{" "}
      <a
        href="mailto:hugo.val28@gmail.com"
        className="underline"
        style={{ margin: "1rem 0" }}
      >
        email.
      </a>
      <p>You cand find me on:</p>
      <div
        style={{ display: "flex", width: 150, justifyContent: "space-around" }}
      >
        {contactLinks.map(({ alt, href, src }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="not-underline"
            key={href}
          >
            <img src={src} alt={alt} height={24} />
          </a>
        ))}
      </div>
    </>
  )
}

export default Contact
