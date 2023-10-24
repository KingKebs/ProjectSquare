// WhatWeDo.js
import React from 'react';
import '../styles/WhatWeDo.css'; // Import the CSS file

function WhatWeDo() {
  return (
    <div className="what-we-do">
      <h2 className="section-heading">What We Do</h2>
      <p className="section-text">
        We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces.
      </p>
      <div className="card-container">
        <div className="card">
          <h3>Web Development</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="card">
          <h3>User Experience & Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="card">
          <h3>Mobile App Development</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="card">
          <h3>Blockchain Solutions</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
