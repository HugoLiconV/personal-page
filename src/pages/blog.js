import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({
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
      <SEO title="Blog" />
      <div className="grids">{Posts}</div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query indexPageQuery {
    allMdx(
      filter: {
        frontmatter: { template: { eq: "BlogPost" }, published: { eq: true } }
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
                gatsbyImageData(
                  width: 600
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  formats: [WEBP, PNG]
                )
              }
            }
            path
          }
        }
      }
    }
  }
`

export default Blog
