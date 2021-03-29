import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../assets/images/Ice cream.svg"

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
          textAlign: "center",
        }}
      >
        <img
          src={Image}
          alt="Not found"
          style={{
            height: "30vh",
          }}
        />
        <h1>Work in progress</h1>
      </div>
      <p>
        I am in progress of copying my blogs from dev.to to this page, if you
        are interested you can find them{" "}
        <a
          href="https://dev.to/hugoliconv"
          target="_blank"
          className="underline"
          rel="noopener noreferrer"
        >
          here
        </a>
      </p>
    </Layout>
  )
}

// <div className="grids">{Posts}</div>
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
