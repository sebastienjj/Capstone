import React, {useState} from 'react'
import { RiMenu3line, Ricloseline } from ' react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'

//BEM block element modifier

const Navbar = () => {
  Const [ toggleMenu, setToggleMenu] = useState(false);

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
      <div className="whatApp__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
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
      <div className="gpt3__navbar-menu_container-links-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
    </div>
    )}
      </div>
      </div>    
      
    
  );
};

export default Navbar