// src/components/Menu.js
import React from 'react';
import './Menu.css'; // Import the associated CSS file

const Menu = () => {
  return (
    <div className="menu">
      <div className="logo">Your Logo</div>
      <div className="menu-items">
        <ul>
          <li>Services</li>
          <li>Industries</li>
          <li>Cases</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="lets-talk">Let's Talk</div>
    </div>
  );
};

export default Menu;
