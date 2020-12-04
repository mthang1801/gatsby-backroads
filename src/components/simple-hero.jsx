import React from 'react'
import styles from "../scss/simple-hero.module.scss"
const SimpleHero = ({children}) => {
  return (
    <header className={styles.defaultHero}>
      {children}      
    </header>
  )
}

export default SimpleHero
