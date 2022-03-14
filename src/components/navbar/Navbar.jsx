import React from 'react'
// import { RiMenu3line, Ricloseline } from ' react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'

//BEM block element modifier

const Navbar = () => {
  return (
    <div className="whatApp__navbar-">
    <div className="whatApp__navbar-links">
      <div className="whatApp__navbar-links_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="whatApp__navbar-links_contanier">
      <p><a href="#home"> Home </a></p>
      <p> <a href="#whatApp"> what is Sol? </a></p>
      <p> <a href="#home"> Home </a></p>
      <p> <a href="#features"> Case Studies </a></p>
      <p> <a href="#blog"> library </a></p>
      </div>
      </div>
      </div>
  )
}

export default Navbar