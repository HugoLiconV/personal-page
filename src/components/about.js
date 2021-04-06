import React from "react"
import { trackClickResume } from "../services/analytics"

const About = () => {
  return (
    <div>
      <p>
        Front-end developer working at{" "}
        <a
          href="http://casai.com"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Casai
        </a>{" "}
        with experience with React, Node, and React Native. (You can find out
        more{" "}
        <a
          href="https://www.dropbox.com/s/xa7cqxx4mbn07p1/Hugo%20Licon%20-%20Resume.pdf?dl=0"
          target="_blank"
          className="underline"
          rel="noopener noreferrer"
          onClick={trackClickResume}
        >
          {" "}
          here
        </a>
        )
      </p>
      <p>
        I am passionate about helping people through software, sharing my
        knowledge and learning more every day.
      </p>
    </div>
  )
}

export default About
