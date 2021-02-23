import React from "react"
import SEO from "../components/seo"
import NotFoundImage from "../assets/images/not_found.svg"
import { Link } from "gatsby"
import styled from "styled-components"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 16; */
  text-align: center;
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`

const NotFoundPage = () => (
  <Main>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>The page you&#39;re looking for doesn&#39;t exist... the sadness.</p>
    <Link to="/" className="underline">
      Go to home
    </Link>
    <img
      src={NotFoundImage}
      alt="Not found"
      style={{
        height: "50vh",
      }}
    />
  </Main>
)

export default NotFoundPage
