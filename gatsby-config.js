/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: ".env",
})
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Backroad",
    description:
      "Exploring awesome world wide tours and discover what makes each of them unique.",
    author: "MVT",
    image: "/hawaii1.jpg",
    twitterUsername: "@mvt",
    siteUrl: "https://travelling-project.netlify.app",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: "https://epic-bartik-aa2a36.netlify.app",
        sitemap: "https://epic-bartik-aa2a36.netlify.app/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `https-travelling-project-netlify-app-disqus`,
      },
    },
  ],
}
