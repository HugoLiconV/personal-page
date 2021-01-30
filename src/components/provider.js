// src/App.js
import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"
import { preToCodeBlock } from "mdx-utils"
import { nightOwl } from "../theme/night-owl"
import { calculateLinesToHighlight } from "../utils"


function SyntaxHighligher({ codeString, language, metastring }) {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={nightOwl}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr minmax(auto, 32em) 1fr",
            gridColumn: "1/-1",
            maxWidth: "100%",
            backgroundColor: nightOwl.plain.backgroundColor,
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            fontSize: 'calc(1rem + 0.8vw)',
          }}
        >
          <pre
            className={className}
            style={{
              gridColumn: "2/3",
              fontFamily: `Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,
              fontSize: "0.6em",
              ...style,
              padding: "1rem 0",
              margin: 0,
            }}
          >
            {tokens.map((line, index) => (
              <div
                {...getLineProps({ line, key: index })}
                style={{
                  display: "flex",
                  backgroundColor: shouldHighlightLine(index)
                    ? "hsl(209, 58%, 14%)"
                    : undefined,
                }}
              >
                <span
                  style={{
                    display: "inline-block",

                    padding: "0 0.5ch",
                    marginRight: "1ch",
                    textAlign: "right",
                    borderLeft: "0.25em solid",
                    borderLeftColor: shouldHighlightLine(index)
                      ? "rgb(173, 219, 103)"
                      : "transparent",
                    backgroundColor: shouldHighlightLine(index)
                      ? "#0f2438"
                      : nightOwl.plain.backgroundColor,
                    color: "rgba(255,255,255,0.46)",
                    userSelect: "none",
                    position: "sticky",
                    left: 0,
                  }}
                >
                  {index + 1}
                </span>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  )
}

const components = {
  pre: props => {
    const codeProps = preToCodeBlock(props)
    if (codeProps) {
      return <SyntaxHighligher {...codeProps} />
    } else {
      return <pre {...props} />
    }
  },
  a: props => {
    return <a className="underline" {...props} />
  }
}

function Provider({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}

export default Provider
