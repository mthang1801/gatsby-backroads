import React from "react"
import Title from "../title"
import styles from "../../scss/home-about.module.scss"
import image from "../../images/defaultBcg.jpeg"
const About = () => {
  return (
    <section className={styles.about}>
      <Title title="About" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImage}>
          <div className={styles.imageContainer}>
            <img src={image} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            aperiam et consectetur autem aspernatur placeat!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            iure, omnis similique temporibus quo atque?
          </p>
          <button className="btn-primary">Read more</button>
        </article>
      </div>
    </section>
  )
}

export default About
