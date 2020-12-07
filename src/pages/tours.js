import React from "react"
import Layout from "../components/layout"
import Header from "../examples/RegularHeader";
import StyledHero from "../components/styled-hero"
import {graphql} from "gatsby"

export const  query = graphql`
  {
    background: file(relativePath: { regex: "/defaultBcg/" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const ToursPage = ({data}) => {
  
  return <Layout>
    <StyledHero img={data.background.childImageSharp.fluid}/>
    <Header/>
    {/* <h1>Title : {title}</h1>
    <h2>Author : {author}</h2> */}
    </Layout>
}

export default ToursPage
