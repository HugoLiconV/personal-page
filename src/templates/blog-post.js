import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Provider from "../components/provider"
import Layout from "../components/layout"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import SEO from "../components/seo"

const BlogContainer = styled.div`
  font-size: 1rem;
  .post-title {
    margin-bottom: 0.5rem;
  }
  .post-meta {
    color: var(--accent-color);
    margin-bottom: 1rem;
  }
  ul {
    li {
      margin-bottom: 0.2rem;
    }
    &::last-child {
      margin-bottom: calc(1.45rem / 2);
    }
  }
  p {
    margin-bottom: 0.5rem;
  }
  h2,
  h3 {
    color: var(--secondary-color);
  }
  h3 {
    font-weight: normal;
  }
  code {
    background: #4c1d2d;
    border: 1px solid var(--accent-color);
    border-radius: 5px;
  }
`

const ImageContainer = styled.div`
  aspect-ratio: 16/9;
  height: 400px;
  width: 100%;

  .post-thumbnail {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  path,
}) {
  const { site, mdx } = data // data.mdx holds your post data
  const { siteMetadata } = site
  const { frontmatter, body } = mdx
  return (
    <Layout path={path}>
      <SEO
        title={frontmatter.title}
        description={frontmatter.metaDescription}
      />
      <BlogContainer>
        <article className="post">
          <h1 className="post-title">{frontmatter.title}</h1>
          <div className="post-meta">{frontmatter.date}</div>
          {!!frontmatter.thumbnail && (
            <ImageContainer>
              <GatsbyImage
                image={frontmatter.thumbnail.childImageSharp.gatsbyImageData}
                className="post-thumbnail"
                style={{}}
              />
            </ImageContainer>
          )}
          <Provider>
            <MDXRenderer>{body}</MDXRenderer>
          </Provider>
        </article>
      </BlogContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        metaDescription
      }
    }
  }
`
