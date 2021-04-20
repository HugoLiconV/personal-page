/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import dotenv from "dotenv"

dotenv.config({ path: ".env" })

const PANELBEAR_SITE_ID = process.env.PANELBEAR_SITE_ID

const PANELBEAR_CONFIG = {
  site: PANELBEAR_SITE_ID,
  spaMode: "history",
  debug: false,
}

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="panelbear-analytics-src"
      async
      src={`https://cdn.panelbear.com/analytics.js?site=${PANELBEAR_SITE_ID}`}
    />,
    <script
      key="panelbear-analytics-code"
      dangerouslySetInnerHTML={{
        __html: `
          window.panelbear = window.panelbear || function() { (window.panelbear.q = window.panelbear.q || []).push(arguments); };
          panelbear('config', ${JSON.stringify(PANELBEAR_CONFIG)});
        `,
      }}
    />,
  ])
}