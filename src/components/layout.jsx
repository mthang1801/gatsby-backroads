import React from 'react'
import Navbar from "./navbar"
import Footer from "./footer";
import "./layout.css"
const Layout = ({children}) => {
  return (
    <div className="container">
      <Navbar/>
      <div className="body">
        {children}
      </div>
     
      <Footer/>
    </div>
  )
}

export default Layout
