import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Layout from "../components/layout"

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
      <div className="grids">{Posts}</div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query notesQuery {
    allMdx(
      filter: { frontmatter: { template: { eq: "Note" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            thumbnail
            path
          }
        }
      }
    }
  }
`
export default Notes
