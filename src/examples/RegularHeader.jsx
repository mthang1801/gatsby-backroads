import React from 'react'
import {StaticQuery, graphql} from "gatsby"
const getSiteMetadata = graphql`
query{
  site{
    siteMetadata{
      title
      author
    }
  }
}
`
const RegularHeader = () => {
  return (
    <StaticQuery query={getSiteMetadata} render={data =>{
      const {site : {siteMetadata : { title, author}}} = data
      return <>
        <h1>{title}</h1>
        <h2>{author}</h2>
      </>
    }}></StaticQuery>
  )
}

export default RegularHeader
