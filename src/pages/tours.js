import React from "react"
import Layout from "../components/layout"
import Header from "../examples/RegularHeader";
import StyledHero from "../components/styled-hero"
import {graphql} from "gatsby"
import Tours from "../components/Tours/tours";
export const  query = graphql`
  {
    background: file(relativePath: { regex: "/defaultBcg/" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const ToursPage = ({data}) => {
  
  return <Layout>
    <StyledHero img={data.background.childImageSharp.fluid}/>    
    <Tours/>
    </Layout>
}

export default ToursPage
