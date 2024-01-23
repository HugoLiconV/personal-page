/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"

const PANELBEAR_SITE_ID = "IZP4kmdyuFo"

const PANELBEAR_CONFIG = {
  site: PANELBEAR_SITE_ID,
  spaMode: "history",
  debug: false,
}

const CRONITOR_CONFIG = {
  clientKey: "7e98b2c7980979eb887e99983d65ecf9",
  debug: true,
}

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="cronitor-rum-src"
      async
      src="https://rum.cronitor.io/script.js"
    />,
    <script
      key="cronitor-rum-code"
      dangerouslySetInnerHTML={{
        __html: `
          window.cronitor = window.cronitor || function() { (window.cronitor.q = window.cronitor.q || []).push(arguments); };
          cronitor('config', ${JSON.stringify(CRONITOR_CONFIG)});
        `,
      }}
    />,
  ])
}
