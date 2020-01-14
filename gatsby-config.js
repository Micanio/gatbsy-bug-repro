/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `stage-www.mypossibleself.com`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: [],
        verboseOutput: true,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/menus"
        ],
      }
    },
  ]
}
