import React from 'react';

import { ReactComponent as Logo } from '../../assets/kettlebell-svgrepo-com.svg';

import './header.styles.css';

const Header = () => (
  <div className='header'>
    <a href="" className='logo-container'>
      <Logo className='logo' />
    </a>
    <div className='options'>
      <a href="#" className='option'>HOME</a>
      <a href="#" className='option'>ABOUT</a>
      <a href="#" className='option'>SERVICES</a>
      <a href="#" className='option'>RESUME</a>
      <a href="#" className='option'>CONTACT</a>
    </div>
  </div>
);

export default Header;