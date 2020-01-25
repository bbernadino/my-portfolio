import React from 'react';

import CustomButton from '../custom-button/custom-button';

import './portfolio-box.styles.css';

const PortfolioBox = ({ title, imageUrl, buttonName, id }) => (
  <div className='box'>
    <div
      className='box-img'
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className='box-info'>
      <h4>{title}</h4>
      <div className='box-button'>
        <CustomButton>{buttonName}</CustomButton>
      </div>
    </div>
  </div>
);

export default PortfolioBox;