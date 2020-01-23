import React from 'react';

import CustomButton from '../custom-button/custom-button';

import './cta.styles.css';

const Cta = () => (

  <div className='cta-container'>
    <div className='cta-img' />
    <div className='cta-content'>
      <h1>Hello!</h1>
      <h3>I'm a Web Dev Student at:</h3>
      <span>Bridgerland Technical College.</span>
      <div className='cta-buttons'>
        <CustomButton>Hire Me</CustomButton>
        <CustomButton>See my Work</CustomButton>
      </div>
    </div>
  </div>

);

export default Cta;