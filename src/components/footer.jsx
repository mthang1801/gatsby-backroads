import React from 'react'
import links from "../constants/links";
import socialIcons from "../constants/social-icons";
import {Link} from "gatsby";
import styles from "../scss/footer.module.scss"
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
      {links.map(({path,name}) => (
        <Link key={name} to={path}>{name}</Link>
      ))}
      </div>
      <div>
        {socialIcons.map(({icon,url}) => (
          <Link key={url} to={url} className={styles.icon}>{icon}</Link>
        ))}
      </div>
      <p>Copyright @ Backroads Travel Company {new Date().getFullYear()} All Rights Reserved.</p>
    </div>
  )
}

export default Footer
