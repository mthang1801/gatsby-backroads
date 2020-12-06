import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import img from "../images/connectBcg.jpeg"
import styled from "styled-components"
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
        fluid {          
          src         
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
        <img src={data.fixed.childImageSharp.fixed.src} className="basic"/>
      </article>
      <article>
        <h3>Fluid image/Svg</h3>
        <img src={data.fluid.childImageSharp.fluid.src} className="basic"/>
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
`
export default Images
