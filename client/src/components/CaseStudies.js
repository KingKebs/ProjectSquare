import React from 'react';
import '../styles/CaseStudies.css';

function CaseStudies() {
  return (
    <div className="case-studies">
      <h2 className="case-studies-heading">Case Studies</h2>
      <div className="case-card">
        <div className="case-card-content">
          <h3 className="case-card-title">The Olympian</h3>
          <p className="case-card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="case-card">
        <div className="case-card-content">
          <h3 className="case-card-title">The Savings Jar</h3>
          <p className="case-card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="case-card">
        <div className="case-card-content">
          <h3 className="case-card-title">Sekhokho seMali</h3>
          <p className="case-card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
