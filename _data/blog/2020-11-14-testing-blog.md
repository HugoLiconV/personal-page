---
template: BlogPost
path: /with-code-blog
date: 2020-02-20T15:08:12.174Z
title: Code with Syntax Highlighting with PrismJS
metaDescription: Code with Syntax Highlighting with PrismJS
thumbnail: /assets/andrew-ridley-jr4zf-rieji-unsplash.jpg
---

### Code Highlighting

```javascript
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
    </div>
  )
}
```
