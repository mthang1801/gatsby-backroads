import React from "react"
import Layout from "../components/layout"
import {Link} from "gatsby"
import Images from "../examples/Images"
const BlogPage = (props) => {
  console.log(props)
  return (
    <Layout>
      Blog page 
      <Link to="/">back home</Link>
      <Images/>
    </Layout>
  )
}

export default BlogPage
