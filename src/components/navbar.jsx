import React, {useState} from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../scss/navbar.module.scss"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import logo from "../images/logo.svg"
import { FaAlignRight } from "react-icons/fa"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {  
    setIsOpen(prevState=> !prevState)
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.navHeader}>
        <AniLink fade to="/">
          <img src={logo} alt="backroad logo" />
        </AniLink>
        <button type="button" className={styles.toggleBtn} onClick={toggleNav}>
          <FaAlignRight className={styles.logoIcon} />
        </button>
      </div>
      <ul className={isOpen ? `${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
        {links.map(link => (
          <li key={link.name}><AniLink fade to={link.path}>{link.name}</AniLink></li>
        ))}
      </ul>
      <div className={styles.navSocialLinks}>
        {socialIcons.map( ({icon, url}) => (
          <a key={url} href={url} target="_blank" rel="noopener noreferrer">{icon}</a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
