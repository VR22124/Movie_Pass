import React from 'react';
import './ContactUs.css';
import logo from '../../Assets/Site_Logo.png';
import { useEffect } from 'react';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div>
      <div className="wrapper">
        <div className="title">
          <h1>Contact Us!</h1>
        </div>
        <div className="contact-form">
          <div className="input-fields">
            <input type="text" className="input" placeholder="Name" required />
            <input type="email" className="input" placeholder="Email Address" required />
            <input type="tel" className="input" placeholder="Phone" required />
            <input type="text" className="input" placeholder="Subject" required />
          </div>
          <div className="msg">
            <textarea placeholder="Message" required></textarea>
            <a href="mailto:727822tuec259@skct.edu.in" className="btn">Send</a>
          </div>
        </div>
      </div>
<img src={logo} alt="Logo" className="logon" />
    </div>
  );
}

export default ContactUs;