import React from "react"
import devtoIcon from "../assets/images/devto.svg"
import linkedInIcon from "../assets/images/linkedin-icon.svg"
import twitterIcon from "../assets/images/twitter.svg"
import githubIcon from "../assets/images/github-icon.svg"
import { trackClickContact } from "../services/analytics"
import styled from "styled-components"

const FlexContainer = styled.div`
  display: flex;
  gap: 1rem;
`

const Icon = styled.img`
  margin: 0;
`

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
      <h2>Contact</h2>
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
      <FlexContainer>
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
            <Icon src={src} alt={alt} height={24} />
          </a>
        ))}
      </FlexContainer>
    </>
  )
}

export default Contact
