import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Notes = ({
  data: {
    allMdx: { edges },
  },
  path,
}) => {
  const Posts = edges.map(edge => (
    <PostLink key={edge.node.id} post={edge.node} />
  ))
  return (
    <Layout path={path}>
      <SEO title="Notes" />
      <p>
        These are notes on books, courses, tutorials, or articles, some of them
        are unedited, disorganized and might not be as useful for you as they
        are for me.
      </p>
      <div className="grids">{Posts}</div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query notesQuery {
    allMdx(
      filter: {
        frontmatter: { template: { eq: "Note" }, published: { eq: true } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 800, layout: CONSTRAINED)
              }
            }
            path
          }
        }
      }
    }
  }
`
export default Notes
