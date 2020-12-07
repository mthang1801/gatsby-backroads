import React from "react"
import Tour from "../Tours/tour"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Title from "../title"
import styles from "../../scss/tours.module.scss"
import { graphql, useStaticQuery } from "gatsby"

const getFeaturedTours = graphql`
  query {
    allContentfulTourExplore(filter: { featured: { eq: true } }) {
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
const FeaturedTours = () => {
  const data = useStaticQuery(getFeaturedTours)
  console.log(data)
  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>
        {data.allContentfulTourExplore.edges.map(edge => (
          <Tour tour={edge.node} key={edge.node.contentful_id} />
        ))}
      </div>

      <AniLink fade to="/tours" className="btn-primary">
        All Link
      </AniLink>
    </section>
  )
}

export default FeaturedTours
