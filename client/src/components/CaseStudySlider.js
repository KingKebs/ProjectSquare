// src/components/CaseStudySlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CaseStudySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="case-study-slider">
      <Slider {...settings}>
        <div>
          <h3>Case Study 1</h3>
          <p>Content for case study 1</p>
        </div>
        <div>
          <h3>Case Study 2</h3>
          <p>Content for case study 2</p>
        </div>
        {/* Add more case study slides as needed */}
      </Slider>
    </div>
  );
};

export default CaseStudySlider;
