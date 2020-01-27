import React from 'react';

import CustomButton from '../custom-button/custom-button';

import { ReactComponent as Insta } from '../../assets/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import { ReactComponent as Snapchat } from '../../assets/snapchat.svg';
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';
import { ReactComponent as GitHub } from '../../assets/github.svg';

import './contact.styles.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  render() {
    return (
      <div className='contact-container'>
        <div className='contact-content'>
          <div className='contact-header'>
            <h2>Contact Me</h2>
          </div>
          <div className='contact-info'>
            <div className='form-box'>
              <form className='contact-form'>
                <label>Your Name</label>
                <input
                  className='input-field'
                  name='name'
                  type='text'
                  placeholder='Name'
                  value={this.state.name}
                  onChange={e => this.handleChange(e)}
                />
                <label>Your Email</label>
                <input
                  className='input-field'
                  name='email'
                  type='email'
                  placeholder='Email'
                  value={this.state.email}
                  onChange={e => this.handleChange(e)}
                />
                <label>Your Message</label>
                <textarea
                  className='textarea'
                  name='message'
                  type='string'
                  placeholder='Please leave a message.'
                  value={this.state.message}
                  onChange={e => this.handleChange(e)}
                  cols={40}
                  rows={10}
                />
              </form>
              <CustomButton onClick={e => this.handleSubmit(e)}>Send!</CustomButton>
            </div>
            <div className='social-box'>
              <a href='#'>
                <Insta className='social-icon' />
              </a>
              <a href='#'>
                <Twitter className='social-icon' />
              </a>
              <a href='#'>
                <Snapchat className='social-icon' />
              </a>
              <a href='#'>
                <LinkedIn className='social-icon' />
              </a>
              <a href='#'>
                <GitHub className='social-icon' />
              </a>
            </div>
          </div>

        </div>
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.messageSent(this.state)

    this.setState({
      name: '',
      email: '',
      message: ''
    });
  };
}

export default Contact;



