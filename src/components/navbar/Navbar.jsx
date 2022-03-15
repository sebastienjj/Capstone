import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="whatApp__navbar">
      <div className="whatApp__navbar-links">
        <div className="whatApp__navbar-links_logo">
          {/* <img src={logo} /> */}
        </div>
        <div className="whatApp__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#Sol">What is SOL?</a></p>
          {/* <p><a href="#possibility">Open AI</a></p> */}
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#wallet">Wallet</a></p>
        </div>
      </div>
      <div className="whatApp__navbar-sign">
        {/* <p>Sign in</p> */}
        <button href type="button">Login</button>
      </div>
      <div className="whatApp__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="whatApp__navbar-menu_container scale-up-center">
          <div className="whatApp__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#whatApp">What is Sol?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="whatApp__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;