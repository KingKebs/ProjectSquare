// Slider.js
import React from 'react';
import './Slider.css'; // Import the associated CSS file

const Slider = () => {
  return (
    <div className="slider">
      <img src="slider-image.jpg" alt="Slider Image" />
      <div className="overlay">
        <h1>Live with Confidence</h1>
        <p>Jose Mourinho brings confidence to pan-Africa</p>
      </div>
    </div>
  );
};

export default Slider;
