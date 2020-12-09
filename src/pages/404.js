import React from 'react'
import Banner from "../components/banner"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../scss/error.module.scss"
import SEO from "../components/SEO"
const ErrorPage = () => {
  return (
    <Layout>
      <SEO title="Error"/>
      <header className={styles.error}>
      <Banner title="OOP! This Page not found :(">
        <AniLink fade to="/" className="btn-white">Back Home</AniLink>
      </Banner>
      </header>
    </Layout>
  )
}

export default ErrorPage
