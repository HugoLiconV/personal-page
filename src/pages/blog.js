import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

const Blog = ({
  data: {
    allMdx: { edges },
  },
}) => {
  const Posts = edges.map(edge => (
    <PostLink key={edge.node.id} post={edge.node} />
  ))
  return (
    <Layout>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="" />
      </Helmet>
      <div className="grids">{Posts}</div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query indexPageQuery {
    allMdx(
      filter: { frontmatter: { template: { eq: "BlogPost" } } }
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

export default Blog
