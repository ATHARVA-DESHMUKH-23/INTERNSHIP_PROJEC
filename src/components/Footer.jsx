import React from 'react';
import '../css/Footer.css'; // Import the CSS file for the footer

const Footer = ({ showContactForm, toggleContactForm }) => {
  return (
    <footer id="footer" className="section">
        {/* Show contact form if 'showContactForm' is true */}
        {showContactForm && (
          <div className="contact-form">
            <h4>Send A Message</h4>
            <form>
              <input className="input" type="text" name="name" placeholder="Name" />
              <input className="input" type="email" name="email" placeholder="Email" />
              <input className="input" type="text" name="subject" placeholder="Subject" />
              <textarea className="input" name="message" placeholder="Enter your Message"></textarea>
              <button className="main-button icon-button pull-right">Send Message</button>
            </form>
          </div>
        )}

      {/* New Tab */}
      <div className="footer-tab">
        <div className="row">
          {/* Contact Info */}
          <div className="col-md-6 contact">
            <div className="footer-contact-info">
              <h4>Contact Information</h4>
              <ul>
                <li><i className="fa fa-phone"></i><a href=''> 74748 73732</a></li>
                <li><i className="fa fa-envelope"></i> <a href=''> edunexus@gmail.com</a></li>
              </ul>
            </div>
          </div>

          {/* Address */}
          <div className="col-md-6 address">
            <div className="footer-address">
              <h4>Address</h4>
              <p>EduNexus Office</p>
              <p>123 Knowledge Street,</p>
              <p>Learning City, Education State, 456789</p>
            </div>
          </div>
        </div>
      </div>

      {/* Container */}
      <div className="container">
        
        {/* Row */}
        <div className="row">
          {/* Footer Logo */}
          <div className="col-md-6">
            <div className="footer-logo">
              <h3 style={{color:'Grey'}}><span style={{color:'orange'}}>Edu</span>Nexus</h3>
            </div>
          </div>
          {/* Footer Logo */}

          {/* Footer Nav */}
          <div className="col-md-6">
            <ul className="footer-nav">
              <li><a href="index.html">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          {/* /Footer Nav */}
        </div>
        {/* /Row */}

        {/* Bottom Footer Row */}
        <div id="bottom-footer" className="row">
          {/* Social Icons */}
          <div className="col-md-4 col-md-push-8">
            <ul className="footer-social">
              <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a></li>
              <li><a href="#" className="instagram"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#" className="youtube"><i className="fa fa-youtube"></i></a></li>
              <li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
          {/* /Social Icons */}

          {/* Copyright */}
          <div className="col-md-8 col-md-pull-4">
            <div className="footer-copyright">
              <span> A Project Webpage Created by <a  href="https://www.linkedin.com/in/deshmukhatharvasandesh/" target="_blank">Atharva Deshmukh</a> & <a  href="https://www.linkedin.com/in/sumit-shelwane-752089321/" target="_blank">Sumit Shelwane</a></span>
            </div>
          </div>
          {/* /Copyright */}
        </div>
        {/* /Bottom Footer Row */}
      </div>
      {/* /Container */}
    </footer>
  );
};

export default Footer;
