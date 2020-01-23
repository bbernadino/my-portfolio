import React from 'react';

import CustomButton from '../custom-button/custom-button';

import './about.styles.css';

const About = () => (
  <div className='about-container'>
    <div className='about-content'>
      <div className='about-heading'>
        <h2>ABOUT ME</h2>
      </div>
      <div className='about-img' />
      <div className='about-info'>
        <h3>I'm Bailey Santistevan.</h3>
        <p>Javascript is my main focus in my quest
          to learn how to build engaging, exciting, and
          user friendly experiences from the ground up. Web and
          Software design/development is what I enjoy most.
        </p>
      </div>
      <div className='about-button'>
        <CustomButton>Contact Me</CustomButton>
      </div>
    </div>

  </div>
);

export default About;