import React from 'react';
import './App.css';

import Header from './components/header/header.component';
import Cta from './components/cta/cta.component';
import About from './components/about/about.component';
import Portfolio from './components/portfolio/portfolio.component';
import Contact from './components/contact/contact.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isMessageSent: false
    };
  }

  messageSent = (fields) => {
    console.log('Message Received!', fields)
    if (fields) {
      this.setState({
        isMessageSent: true
      })
    } else {
      return;
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Cta />
        <About />
        <Portfolio />
        <Contact messageSent={fields => this.messageSent(fields)} />
      </div>
    );
  }
}

export default App;
