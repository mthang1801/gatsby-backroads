import React, { useState, useRef, useEffect } from "react"
import { graphql, navigate } from "gatsby"
import Anilink from "gatsby-plugin-transition-link/AniLink"
import styles from "../scss/blog.module.scss"
import BlogCard from "../components/Blog/blog-card"
import Title from "../components/title"
import Layout from "../components/layout"
import BlogPaginate from "../components/Blogs/blog-paginate"
export const query = graphql`
  query($limit: Int!, $skip: Int!) {
    blogs: allContentfulBlog(
      limit: $limit
      skip: $skip
      sort: { fields: publishedAt, order: DESC }
    ) {
      edges {
        node {
          title
          slug
          id: contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          publishedAt(formatString: "Do MMM, YYYY")
        }
      }
    }
  }
`
const BlogListTemplate = props => {
  const [curPage, setCurPage] = useState(props.pathContext.currentPage)

  const handlePageClick = data => {
    const { selected } = data
    console.log(selected, curPage)
    if (selected !== curPage) {
      selected == 0 ? navigate(`/blogs/1`) : navigate(`/blogs/${selected + 1}`)
      setCurPage(selected)
    }
  }
  return (
    <Layout>
      <section className={styles.blog}>
        <Title title="latest" subtitle="posts" />
        <div className={styles.center}>
          {props.data.blogs.edges.map(({ node }) => (
            <BlogCard key={node.id} blog={node} />
          ))}
        </div>
        <BlogPaginate
          numPages={props.pathContext.numPages}
          currentPage={props.pathContext.currentPage}
          handlePageClick={handlePageClick}
        />
      </section>
    </Layout>
  )
}

export default BlogListTemplate
