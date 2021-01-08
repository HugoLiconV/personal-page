import React from "react"
import Image from "../assets/images/Ice cream-01.svg"
import Layout from "../components/layout"

const Reading = ({ path }) => {
  return (
    <Layout path={path}>
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
