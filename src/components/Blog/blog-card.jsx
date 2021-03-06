import React from "react"
import styles from "../../scss/blog-card.module.scss"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogCard = ({ blog }) => {
  const {
    title,
    slug,
    _id,
    image,
    publishedAt,
    createdAt,
  } = blog
  return <article className={styles.blog}>
    <div className={styles.imgContainer}>
      <Img fluid={image.fluid} alt={title} className={styles.img}/>
      <AniLink fade className={styles.link} to={`/blog/${slug}`}>Read more</AniLink>
      <h6 className={styles.date}>{publishedAt}</h6>
    </div>
    <div className={styles.footer}>
      <h4>{title}</h4>
    </div>
  </article>
}

export default BlogCard
