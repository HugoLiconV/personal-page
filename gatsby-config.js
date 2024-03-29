module.exports = {
  siteMetadata: {
    title: "Hugo Licon",
    siteUrl: "https://www.hugolicon.dev/",
    description:
      "Hey, I'm Hugo · Here I share what I'm up to and sometimes things about JavaScript and React.",
    author: "Hugo",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hugo's website`,
        short_name: `Hugo`,
        start_url: `/`,
        background_color: `#000f1f`,
        theme_color: `#000f1f`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        plugins: [
          "gatsby-remark-relative-images",
          // {
          //   resolve: `gatsby-remark-images`,
          //   options: {
          //     maxWidth: 590,
          //   },
          // },
        ],
      },
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       "gatsby-remark-relative-images",
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 590,
    //         },
    //       },
    //     ],
    //   },
    // },
  ],
}
