import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
const query = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        siteUrl
        author
        twitterUsername
        image
      }
    }
  }
`
const SEO = ({ title, description }) => {
  const {site } = useStaticQuery(query);
  const {
    siteTitle,
    siteDesc,
    siteUrl,
    author,
    twitterUsername,
    image
  } = site.siteMetadata

  return (
    <Helmet title={`${title} | ${siteTitle}`} >
      <meta name="description" content={description || siteDesc} />
      <meta image="image" content={image} />
     
      {/* facebook cards */}
      <meta property="og:url" content={siteUrl}/>
      <meta property="og:title" content={siteTitle}/>
      <meta property="og:type" content="website"/>
      <meta property="og:image" content={image}/>
      <meta property="og:image:width" content="400"/>
      <meta property="og:image:height" content="300"/>
      <meta property="og:description" content={siteDesc}/>
      {/* twitter cards */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:description" content={siteDesc}/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SEO
