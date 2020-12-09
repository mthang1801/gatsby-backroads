import React from "react"
import Layout from "../components/layout"
import SimpleHero from "../components/simple-hero"
import Banner from "../components/banner"
import {  useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import About from "../components/Home/about"
import Services from "../components/Home/services"
import StyledHero from "../components/styled-hero"
import FeaturedTours from "../components/Home/featured-tours"
import SEO from "../components/seo"
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
export default function Home({data}) {
  return (
    <Layout>
      <SEO title="home" description="this is description" />
      <StyledHero img={data.background.childImageSharp.fluid} home="true">
        <Banner
          title="Continure Exploring"
          info="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        >
          <AniLink fade to="/tours" className="btn-white">
            Exploring Tours
          </AniLink>
        </Banner>
      </StyledHero>
      <About />
      <Services />
      <FeaturedTours/>
    </Layout>
  )
}
