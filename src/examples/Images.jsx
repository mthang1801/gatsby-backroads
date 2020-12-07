import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import img from "../images/connectBcg.jpeg"
import styled from "styled-components"
import Img from "gatsby-image"
const getImages = graphql`
  query {
    fixed: file(relativePath: { regex: "/default/" }) {
      childImageSharp {
        fixed(width: 300, height: 300, grayscale: true ) {
          ...GatsbyImageSharpFixed          
        }
      }
    }
    fluid: file(relativePath: { regex: "/blog/" }) {
      childImageSharp {
        fluid (maxWidth:300){          
          ...GatsbyImageSharpFluid_tracedSVG         
        }
      }
    }
  }
`
const Images = () => {
  const data = useStaticQuery(getImages)

  console.log(data)
  return (
    <Wrapper>
      <article>
        <h3>basic image</h3>
        <img src={img} className="basic" />
      </article>
      <article>
        <h3>fixed image/blur</h3>
        <Img fixed={data.fixed.childImageSharp.fixed} objectFit="cover" objectPosition="50% 50%" className="basic"/>
      </article>
      <article>
        <h3>Fluid image/Svg</h3>
        <Img fluid={data.fluid.childImageSharp.fluid} />
        <div className="fluid">
       
        <Img fluid={data.fluid.childImageSharp.fluid} />
        </div>
        
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  width: 80vw;
  margin: 0 auto 10rem auto;
  margin: 1px solid red;
  text-transform: capitalize;
  .basic {
    width: 100%;    
  }
  article{
    padding : 1rem 0rem ; 
    border : 1px solid red;
  }
  @media(min-width: 992px){
    display : grid ;
    grid-template-columns : 1fr 1fr 1fr ; 
    grid-column-gap : 1rem;
  }
  .fluid{
    max-width : 200px;
  }
`
export default Images
