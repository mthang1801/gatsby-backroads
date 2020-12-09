/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path : ".env"
})
module.exports = {
  /* Your site config here */
  siteMetadata : {
    title : "Backroad", 
    description : "Exploring awesome world wide tours and discover what makes each of them unique.",
    author : "MVT",    
    image : "./hawaii1.jpg",
    twitterUsername : "@mvt",
    siteUrl : "https://www.w3schools.com/bootstrap4/tryit.asp?filename=trybs_scrollspy2&stacked=h"
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
      resolve : `gatsby-plugin-styled-components`      
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
    `gatsby-plugin-playground`
  ],
}
