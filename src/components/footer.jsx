import React from 'react'
import links from "../constants/links";
import socialIcons from "../constants/social-icons";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styles from "../scss/footer.module.scss"
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
      {links.map(({path,name}) => (
        <AniLink fade key={name} to={path}>{name}</AniLink>
      ))}
      </div>
      <div>
        {socialIcons.map(({icon,url}) => (
          <AniLink fade key={url} to={url} target="_blank" className={styles.icon}>{icon}</AniLink>
        ))}
      </div>
      <p>Copyright @ Backroads Travel Company {new Date().getFullYear()} All Rights Reserved.</p>
    </div>
  )
}

export default Footer
