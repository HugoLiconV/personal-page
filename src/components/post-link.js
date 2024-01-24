import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const Card = styled.article`
  --image-height: 212px;
  display: grid;
  overflow: hidden;
  line-height: 1.5;
  background-color: var(--card-bg-color);
  border-radius: 10px;

  .image-link {
    height: var(--image-height);
    .gatsby-image-wrapper {
      height: 100%;
    }
  }

  header {
    padding: 12px;
  }

  h3 {
    margin: 0.5rem 0;
  }

  .post-title {
    font-size: 1.2rem;
    margin-bottom: 0;
    font-weight: bold;
  }
  .post-meta {
    color: var(--accent-color);
  }
  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    --image-height: 134px;
  }
  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    --image-height: 180px;
  }
`

const PostLink = ({ post }) => {
  return (
    <Card>
      {!!post.frontmatter.thumbnail && (
        <Link to={post.frontmatter.path} className="image-link">
          <GatsbyImage
            image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
            alt={post.frontmatter.title + "- Featured Shot"}
          />
        </Link>
      )}
      <header>
        <div className="post-meta">
          <span style={{ fontSize: "1rem" }}>{post.frontmatter.date}</span>
        </div>
        <h3 className="post-title">
          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
        </h3>
      </header>
    </Card>
  )
}

export default PostLink
