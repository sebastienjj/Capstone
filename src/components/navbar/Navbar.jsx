import React from 'react'
import { RiMenu3line, Ricloseline } from ' react-icons/ri'
import './navbar.css'

//BEM block element modifier

const Navbar = () => {
  return (
    <div className="whatApp__navbar-">
    <div className="whatApp__navbar-links">
      <div className="whatApp__navbar-links_logo">
        <img src={logo} alt="logo" />
      </div>
      </div>
      </div>
  )
}

export default Navbar