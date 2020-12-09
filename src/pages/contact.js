import React from "react"
import Layout from "../components/layout"
import StyledHero from "../components/styled-hero"
import Contact from "../components/Contact/contact"
import SEO from "../components/SEO"
export const  query = graphql`
  {
    background: file(relativePath: { regex: "/connectBcg/" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const ContactPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Contact"/>
      <StyledHero img={data.background.childImageSharp.fluid}/>
      <Contact/>
    </Layout>
  )
}

export default ContactPage
