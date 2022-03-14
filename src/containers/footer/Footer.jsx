import React from 'react';
// import whatAppLogo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="WhatApp__footer section__padding">
    <div className="whatApp__footer-heading">
      <h1 className="gradient__text"> Let's build the financial gap of the future </h1>
    </div>

    <div className="whatApp__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="whatApp__footer-links">
      <div className="whatApp__footer-links_logo">
        {/* <img src={whatAppLogo} alt="whatApp_logo" /> */}
        <p> SOL is a financial company it does not provide financial advice <br /> All Rights Reserved</p>
      </div>
      <div className="whatApp__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Contact</p>
        <p> LinkedIn</p>
      </div>
      <div className="whatApp__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="whatApp__footer-links_div">
        <h4>Get in touch</h4>
        <p> </p>
        <p>085-132567</p>
        <p>info@sol.net</p>
      </div>
    </div>

    <div className="whatApp__footer-copyright">
      <p>@2022 sol. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;