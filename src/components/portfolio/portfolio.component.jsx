import React from 'react';

import './portfolio.styles.css';

import CustomButton from '../custom-button/custom-button';

const Portfolio = () => (
  <div className='portfolio-container'>
    <div className='portfolio-content'>
      <div className='portfolio-header'>
        <h3>MY SERVICES</h3>
      </div>
      <div className='boxes'>
        <div className='box'>
          <div className='box-img1' />
          <div className='box-info'>
            <h4>Front End Web Design</h4>
            <div className='box-button'>
              <CustomButton>Web Dev</CustomButton>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='box-img2' />
          <div className='box-info'>
            <h4>iOS/Android App UI Design</h4>
            <div className='box-button'>
              <CustomButton>App Dev</CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Portfolio;