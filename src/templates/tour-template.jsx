import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import StyledHero from "../components/styled-hero"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import styles from "../scss/tour-template.module.scss"
import Img from "gatsby-image"
import Day from "../components/SingleTour/day"
import AniLink from "gatsby-plugin-transition-link/AniLink"
export const query = graphql`
  query($slug: String) {
    tour: contentfulTourExplore(slug: { eq: $slug }) {
      name
      price
      slug
      country
      start(formatString: "dddd do MMM, YYYY")
      days
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
const TourTemplate = ({ data }) => {
  const {
    name,
    price,
    slug,
    country,
    start,
    days,
    description: { description },
    journey,
    images,
  } = data.tour

  const [mainImage, ...tourImages] = images
  console.log(mainImage, tourImages)
  return (
    <Layout>
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map(({ fluid }, index) => (
              <Img
                key={index}
                fluid={fluid}
                alt={name}
                className={styles.image}
              />
            ))}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>
            starts on : <span className={styles.date}>{start}</span>{" "}
          </h4>
          <h4>
            duration : <span className={styles.date}>{days}</span>{" "}
          </h4>
          <p className={styles.desc}>{description}</p>
          <h2>daily schedule</h2>
          <div className={styles.journey}>
            {journey.map((item, index) => (
              <Day key={index} day={item.day} info={item.info} />
            ))}
          </div>
          <AniLink fade to="/tours" className="btn-primary">
            Back Tours
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export default TourTemplate
