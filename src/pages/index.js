import { graphql } from "gatsby"
import React from "react"
import About from "../components/about"
import Contact from "../components/contact"
import Projects from "../components/projects"
import Layout from "../components/layout"

const IndexPage = ({ data: { allMdx }, path }) => {
  const projects = allMdx.edges
    .map(e => e.node)
    .map(node => ({ id: node.id, ...node.frontmatter }))

  return (
    <Layout path={path}>
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
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
