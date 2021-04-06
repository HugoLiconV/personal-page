import React from "react"
import devtoIcon from "../assets/images/devto.svg"
import linkedInIcon from "../assets/images/linkedin-icon.svg"
import twitterIcon from "../assets/images/twitter.svg"
import githubIcon from "../assets/images/github-icon.svg"
import { trackClickContact } from "../services/analytics"

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
      <p>
        If you would like to talk send me an{" "}
        <a
          href="mailto:hugo.val28@gmail.com"
          className="underline"
          style={{ margin: "1rem 0" }}
        >
          email
        </a>{" "}
        or you can find me on:
      </p>
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
            onClick={() => {
              trackClickContact(alt)
            }}
          >
            <img src={src} alt={alt} height={24} />
          </a>
        ))}
      </div>
    </>
  )
}

export default Contact
