import { graphql } from "gatsby"
import React from "react"
import About from "../components/about"
import Contact from "../components/contact"
import Projects from "../components/projects"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

const IndexPage = ({ data: { allMdx } }) => {
  const projects = allMdx.edges
    .map(e => e.node)
    .map(node => ({ id: node.id, ...node.frontmatter }))
  return (
    <Layout>
      <About />
      <Projects projects={projects} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query homePageQuery {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "Project" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            thumbnail
            description
            url
            sourceCode
          }
        }
      }
    }
  }
`
export default IndexPage
