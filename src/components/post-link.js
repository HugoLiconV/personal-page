import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image";

const Card = styled.article`
  display: grid;
  overflow: hidden;
  line-height: 1.5;
  background-color: var(--card-bg-color);
  border-radius: 10px;

  & > a img {
    display: block;
    max-width: 100%;
    margin: 0;
  }

  & > header {
    padding: 24px;
  }

  & > h2:first-child {
    margin: 0 0 0.5rem 0;
  }

  .post-tilte {
    font-size: 1.2rem;
    margin-bottom: 0;
  }
`

const PostLink = ({ post }) => {
  return (
    <Card>
      {!!post.frontmatter.thumbnail && (
        <Link to={post.frontmatter.path}>
          <GatsbyImage
            image={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
            alt={post.frontmatter.title + "- Featured Shot"} />
        </Link>
      )}
      <header>
        <div className="post-meta">
          <span style={{ fontSize: "1rem" }}>{post.frontmatter.date}</span>
        </div>
        <h2 className="post-title">
          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
        </h2>
      </header>
    </Card>
  );
}

export default PostLink
