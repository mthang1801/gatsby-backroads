import React from 'react'
import Banner from "../components/banner"
import Layout from "../components/layout"
import {Link} from "gatsby"
import styles from "../scss/error.module.scss"
const ErrorPage = () => {
  return (
    <Layout>
      <header className={styles.error}>
      <Banner title="OOP! This Page not found :(">
        <Link to="/" className="btn-white">Back Home</Link>
      </Banner>
      </header>
    </Layout>
  )
}

export default ErrorPage
