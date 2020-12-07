import React from "react"
import ToursList from "./tours-list"
import { graphql, useStaticQuery } from "gatsby"

const getTours = graphql`
  query {
    tours: allContentfulTourExplore {
      edges {
        node {
          contentful_id
          name
          price
          featured
          slug
          country
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
const Tours = () => {
  const data = useStaticQuery(getTours)
  return <ToursList tours={data.tours.edges} />
}

export default Tours
