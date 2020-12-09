import React from "react"
import Layout from "../components/layout"
import Anilink from "gatsby-plugin-transition-link/AniLink"
import styles from "../scss/single-blog.module.scss"
import {graphql } from "gatsby"
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
import StyledHero from "../components/styled-hero";
import BlogCard from "../components/Blog/blog-card"
import SEO from "../components/SEO"
export const query = graphql`
  query($slug: String) {
    blog: contentfulBlog(slug: { eq: $slug }) {
      title
      _id: contentful_id
      simpleText {
        simpleText
      }
      text {
        raw 
        references{
          ... on ContentfulAsset{                  
            contentful_id        
            file{
              url
              fileName
            }
          }
          ... on ContentfulBlog{   
            contentful_id
            title
            slug
            publishedAt (formatString : "Do MMM, YYYY")
            image{
              fluid{
                ...GatsbyContentfulFluid
              }
            }
          }
        }  
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      publishedAt(formatString: "Do MMM,YYYY")
    }
  }
`

const BlogTemplate = ({ data }) => {
  const {
    title,
    _id,
    simpleText: { simpleText },
    text: { raw, references },
    image,
    publishedAt,
  } = data.blog;   
  const options = {
    renderNode : {
      "embedded-asset-block" : node => {                     
        const contentful_id = node.data.target.sys.id             
        const {file} = data.blog.text.references.find(n => n.contentful_id === contentful_id)         
       
        const url= file.url;
        const alt = file.fileName;
      
        return <div className={styles.imgContainer}>
           <img src={url} alt={alt} className={styles.image} />
        </div>
      },
      // "embedded-entry-block" : node => {                        
      //   const contentful_id = node.data.target.sys.id ; 
      //   const res = data.blog.text.references.find(n => n.contentful_id === contentful_id)       
        
      //   return (
      //     <div className={styles.blog}>
      //       <div className={styles.center}>
      //         <BlogCard blog={res}/>
      //       </div>
      //     </div>
      //   )
      // }
    }
  }

  const otherBlogs = references.filter(({__typename}) => __typename === "ContentfulBlog")  
  return <Layout>
    <SEO title={title} />
    <StyledHero img={image.fluid}/>
    <section className={styles.blog}>
      <div className={styles.center}>
        <h1>{title}</h1>
        <h4>Published at : {publishedAt}</h4> 
        <article className={styles.post}>
          {documentToReactComponents(JSON.parse(raw), options)}
        </article>      
        <div className={styles.center}>
          <div className={styles.images}>
          {otherBlogs.map(blog => (
            <BlogCard key={blog.contentful_id} blog={blog}/>
          ))}
          </div>          
        </div>  
        <div className={styles.otherLinks}>
          <Anilink fade to="/blog" className="btn-primary link">All Posts</Anilink>
        </div>       
        
      </div>     
    </section>
  </Layout>
}

export default BlogTemplate
