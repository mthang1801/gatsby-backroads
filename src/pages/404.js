import React from 'react'
import Banner from "../components/banner"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../scss/error.module.scss"
const ErrorPage = () => {
  return (
    <Layout>
      <header className={styles.error}>
      <Banner title="OOP! This Page not found :(">
        <AniLink fade to="/" className="btn-white">Back Home</AniLink>
      </Banner>
      </header>
    </Layout>
  )
}

export default ErrorPage
