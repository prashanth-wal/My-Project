import React from 'react'
import Link from 'gatsby-link'
import './Header.css'


const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">

      <Link to="/"><img width="100" src={require('../Images/logo.png')}/></Link>
      <Link to="/home">Home</Link>
      <Link to="/product">Product</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/contact">Contact</Link>

    </div>
    
  </div>
)

export default Header
