import React from "react"
import Layout from "../components/layout"
import {Link} from "gatsby"
import {graphql} from "gatsby";
import StyledHero from "../components/styled-hero"
import BlogList from "../components/Blog/blogs-list"
export const  query = graphql`
  {
    background: file(relativePath: { regex: "/blogBcg/" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const BlogPage = ({data}) => {
  
  return (
    <Layout>
      <StyledHero img={data.background.childImageSharp.fluid}/>
      <BlogList/>            
    </Layout>
  )
}

export default BlogPage
