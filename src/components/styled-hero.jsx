import React from 'react'
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import {useStaticQuery, graphql} from "gatsby"

const getImage = graphql`
  {
    bgDefault :file(relativePath : {
      regex : "/defaultBcg.jpeg/"
    }){
      childImageSharp{
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const StyledHero = ({img, className, children, home}) => {
  const imageData = useStaticQuery(getImage)
  return (
    <BackgroundImage fluid={img || imageData.bgDefault.childImageSharp.fluid} className={className} home={home}>
      {children}
    </BackgroundImage>
  )
}



export default styled(StyledHero)`
  min-height : ${({home}) => home ? "calc(100vh - 65px)" : "50vh"}; 
  background : ${({home}) => home ? "linear-gradient(rgba(63,208,212,0.7), rgba(0,0,0,0.3))" : "none"};
  background-position : center; 
  background-size : cover ; 
  opacity : 1 !important ; 
  display : flex ; 
  align-items : center;
`
