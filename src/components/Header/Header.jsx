import React from 'react';
import './header.css';
import CTA from './CTA';
import Me from '../Images/me2.png';
import HaederSocial from './HeaderSocial';


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ashadu Zaman</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HaederSocial />
        <div className='scroll_down'>
          <p>Scroll Down</p>
        </div>
        <div className='me'>
          <img src={Me} alt="me" />
        </div>

        
      </div>
    </header>
  )
}

export default Header