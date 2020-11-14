import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"

const Notes = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.map(edge => (
    <PostLink key={edge.node.id} post={edge.node} />
  ))
  return <div className="grids">{Posts}</div>
}
export const pageQuery = graphql`
  query notesQuery {
    allMarkdownRemark(
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
