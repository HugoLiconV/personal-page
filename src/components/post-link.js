import { Link } from "gatsby"
import React from "react"

const PostLink = ({ post }) => {
  return (
    <article className="card">
      {!!post.frontmatter.thumbnail && (
        <Link to={post.frontmatter.path}>
          <img
            src={post.frontmatter.thumbnail}
            alt={post.frontmatter.title + "- Featured Shot"}
          />
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
    </article>
  )
}

export default PostLink
