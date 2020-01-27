import React from 'react';

import './portfolio.styles.css';

import PortfolioBox from '../portfolio-box/portfolio-box.component';

class Portfolio extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [{
        title: 'Front End Web Design',
        imageUrl: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        buttonName: 'Web Dev',
        id: 1
      },
      {
        title: 'iOS/Android App UI Design',
        imageUrl: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        buttonName: 'App Dev',
        id: 2
      }]
    };
  }

  render() {
    return (
      <div className='portfolio-container'>
        <div className='portfolio-content'>
          <div className='portfolio-header'>
            <h2>MY SERVICES</h2>
          </div>
          <div className='boxes'>
            {
              this.state.items.map(({ id, ...otherItemsProps }) => (
                <PortfolioBox key={id} {...otherItemsProps} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;