// Footer.js
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <h2 className="heading">Contact Us</h2>
      <p className="text1">Have a project in mind?</p>
      <p className="text2">Let's make it happen</p>
      <div className="address">
        <p>123 Main Street</p>
        <p>Suburb, City</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Email: info@example.com</p>
      </div>
      <div className="links">
        <p>Terms and Conditions</p>
        <p>Social Links</p>
        <p>Video Sharing Links</p>
      </div>
    </div>
  );
}

export default Footer;
