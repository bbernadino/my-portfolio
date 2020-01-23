import React from 'react';
import './App.css';

import Header from './components/header/header.component';
import Cta from './components/cta/cta.component';
import About from './components/about/about.component';
import Portfolio from './components/portfolio/portfolio.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Cta />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
