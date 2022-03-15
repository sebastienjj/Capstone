import React from 'react';
// import people from '../../assets/people.png';
import './header.css';

const Header = () => (
  <div className="whatApp__header section__padding" id="home">
    <div className="whatApp__header-content">
      <h1 className="gradient__text">Let&apos;s come together <br></br> A new way of earning </h1>
      <p> A new form of combined peer-to-peer banking and peer-to-peer lending.</p>

      {/* <div className="whatApp__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div> */}

      <div className="whatApp__header-content__people">
        {/* <img src={people} /> */}
        {/* <p>words can be included here </p> */}
      </div>
    </div>

    <div className="whatApp__header-image">
      {/* <img src={ai} /> */}
    </div>
  </div>
);

export default Header;