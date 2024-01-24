import React from "react"
import { trackClickResume } from "../services/analytics"

const About = () => {
  return (
    <div>
      <p>
        Software engineer with 5+ years of experience driven by a passion for
        creating seamless user experiences, I specialize in building frontend
        solutions for both mobile and web platforms.
      </p>
      <p>
        My previous role was as a Software Engineer at{" "}
        <a
          href="https://www.usesammy.com/en"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sammy
        </a>{" "}
        helping them building a financial technology platform that provides a
        bank account in the U.S. without the need to be a resident or U.S.
        citizen designed for international digital professionals.
      </p>
      <p>
        Want to learn more about my experience? Check out my resume{" "}
        <a
          href="https://www.dropbox.com/s/xa7cqxx4mbn07p1/Hugo%20Licon%20-%20Resume.pdf?dl=0"
          target="_blank"
          className="underline"
          rel="noopener noreferrer"
          onClick={trackClickResume}
        >
          here
        </a>
      </p>
    </div>
  )
}

export default About
