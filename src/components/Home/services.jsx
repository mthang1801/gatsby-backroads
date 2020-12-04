import React from 'react'
import styles from "../../scss/home-services.module.scss"
import services from "../../constants/services"
import Title from "../title"
const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="our" subtitle="services"/>
      <div className={styles.servicesCenter}>
        {services.map(({icon, title, text}) => (
          <article key={title} className={styles.service}>
            <span>{icon}</span>
            <h4>{title}</h4>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
