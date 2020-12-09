import React from 'react'
import styles from "../../scss/tour.module.scss"
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {FaMap} from "react-icons/fa"
import PropTypes from "prop-types";
import {useStaticQuery, graphql} from "gatsby";

const getImage = graphql`
  {
    bgDefault :file(relativePath : {
      regex : "/defaultBcg.jpeg/"
    }){
      childImageSharp{
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Tour = ({tour}) => {
  const imageData = useStaticQuery(getImage);
  const {name, price, slug, country, days, images } = tour;
  const mainImage = images[0] || imageData.bgDefault.childImageSharp;

  console.log(mainImage)
  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Img fluid={mainImage.fluid} alt={name} className={styles.img} />
        <AniLink fade to={`/tours/${slug}`} className={styles.link}>Detail</AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country}
          </h4>
          <div className={styles.details}>
            <h6>About {days} days</h6>
            <h6>From ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

Tour.protoType = {
  tour : PropTypes.shape({
    name : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired, 
    slug : PropTypes.string.isRequired, 
    country : PropTypes.string.isRequired, 
    days : PropTypes.number.isRequired,
    images : PropTypes.arrayOf(PropTypes.object).isRequired
  })
}
export default Tour
