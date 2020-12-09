import React from "react"
import BlogCard from "./blog-card"
import Title from "../title"
import styles from "../../scss/blog.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const getBlogsList = graphql`
  query {
    posts: allContentfulBlog(sort: { fields: publishedAt, order: DESC }) {
      edges {
        node {
          title
          slug
          _id: contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          publishedAt(formatString: "MMMM Do, yyyy")
          createdAt(formatString: "LLLL")
        }
      }
    }
  }
`

const BlogsList = () => {
  const { posts } = useStaticQuery(getBlogsList)
  return (
    <div className={styles.blog}>
      <Title title="Our" subtitle="blogs" />
      <div className={styles.center}>
        <div className={styles.posts}>
          {posts.edges.map(({ node }) => (
            <BlogCard key={node._id} blog={node} />
          ))}
        </div>

        <div className={styles.otherLinks}>
          <AniLink className="btn-primary" to="/">
            back home
          </AniLink>
        </div>
      </div>
    </div>
  )
}

export default BlogsList
