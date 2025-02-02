import React from 'react';
import '../css/CtaSection.css'; // Import the CSS file for the component
import ctabackgrounimg from '../img/cta1-background.jpg'

const CtaSection = () => {
  return (
    <div id="team" className="section">
      {/* Background Image */}
      <div className="bg-image bg-parallax overlay" style={{backgroundImage: `url(${ctabackgrounimg})` }}></div>

      {/* Container */}
      <div className="container">
        {/* Row */}
        <div className="row">
          <div className="col-md-6">
            <h2 className="white-text">OUR GOAL</h2>
            <p className="lead white-text">
            Empower learners to master programming languages with interactive courses and real-world projects. Foster skill development, career growth, and a vibrant community of aspiring developers.            </p>
            <a className="main-button icon-button" href="#">
              Get Started!
            </a>
          </div>
        </div>
        {/* /Row */}
      </div>
      {/* /Container */}
    </div>
  );
};

export default CtaSection;
