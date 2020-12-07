import React from "react"
import Title from "../title"
import styles from "../../scss/contact.module.scss"
const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="Contact" subtitle="us" />
      <div className={styles.center}>
        <form className={styles.form} action="https://formspree.io/f/mthang1801@gmail.com" method="POST">
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              id="name"
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="johndoe@email.com"
              id="email"
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className={styles.formInput}
              placeholder="Hello there"
              rows="10"
            ></textarea>
          </div>
          <button className={styles.btnSubmit}>Submit Here</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
