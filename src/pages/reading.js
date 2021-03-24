import React from "react"
import Image from "../assets/images/Ice cream.svg"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Reading = ({ path }) => {
  return (
    <Layout path={path}>
      <SEO title="Reading" />
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
    </Layout>
  )
}

export default Reading
