/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {

  siteMetadata: {
    title: "Gatsby bootstrap"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `src`,
        // Path to the directory
        path: `${__dirname}/src/`,
      },
    },
    { resolve: `gatsby-transformer-remark` }
  ]
}
