import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Twinkle Genon</h1>
        <h5 className="text-light">Computer Engineer</h5>
        <HeaderSocials />
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        
      </div>
    </header>
  );
};

export default Header;
