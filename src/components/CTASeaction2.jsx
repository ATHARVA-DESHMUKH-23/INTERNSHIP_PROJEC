import React, { useState } from 'react';
import Footer from './Footer';
import ctaBackgroundImg from '../img/cta2-background.jpg'; // Adjust the path to your image if needed

const CTASection2 = () => {
    const [showContactForm, setShowContactForm] = useState(false); // State to show/hide contact form

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm); // Toggle visibility
  };
  return (
    <>
    <div id="contact-cta" className="section">

      {/* Background Image */}
      <div 
        className="bg-image bg-parallax overlay" 
        style={{ backgroundImage: `url(${ctaBackgroundImg})` }}
      ></div>
      {/* Background Image */}

      {/* Container */}
      <div className="container">

        {/* Row */}
        <div className="row">

          <div className="col-md-8 col-md-offset-2 text-center">
            <h2 className="white-text">Contact Us</h2>
            <p className="lead white-text">Connect with like-minded learners and grow together in a supportive learning environment.</p>
            <a className="main-button icon-button" onClick={toggleContactForm}>
              Contact Us Now
            </a>
          </div>

        </div>
        {/* /Row */}

      </div>
      {/* /Container */}
        
    </div>
    <Footer showContactForm={showContactForm} toggleContactForm={toggleContactForm} />
    </>
  );
};

export default CTASection2;
