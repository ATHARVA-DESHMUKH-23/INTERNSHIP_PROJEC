import React, { useState, useEffect } from 'react'; import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
import './css/Style.css';
import AboutSection from './components/AboutSection'; // Adjust path if necessary
import CoursesSection from './components/CourseCard'; // Adjust path if necessary
import Team from './components/team';
import CtaSection from './components/CTASection'; // Import the CTA section
import CTASection2 from './components/CTASeaction2';
import Footer from './components/Footer'; // Import the Footer component
import logo from './img/logo-alt.png';
import backgroundImage from './img/home-background.jpg'; // Adjust path as necessary



const App = () => {
  const [navCollapse, setNavCollapse] = useState(false);
  const [preloaderVisible, setPreloaderVisible] = useState(true);

  useEffect(() => {
    // Hide preloader after 600ms
    const timer = setTimeout(() => {
      setPreloaderVisible(false);
    }, 600);

    // Cleanup timeout
    return () => clearTimeout(timer);
  }, []);

  const toggleNavbar = () => {
    setNavCollapse(!navCollapse);
  };
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const options = {
      threshold: 0.6, // Trigger when 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };



  return (
    <div >
      {/* Preloader */}
      {preloaderVisible && (
        <div id="preloader">
          {/* Preloader content */}
        </div>
      )}

      {/* Header */}
      <header id="header" className="transparent-nav" style={{
        backgroundColor: 'Black', position: "sticky",
        top: 0,
        zIndex: 1030,
        color: 'black'
      }}>
        <nav className="navbar main-menu nav navbar-nav navbar-expand-lg navbar-dark static-top" >
          <div className="container">
            <a className="navbar-brand" href="#">
              <h3 style={{color:'White'}}><span style={{color:'orange'}}>Edu</span>Nexus</h3>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li
                  className={`nav-item ${activeSection === "home" ? "active" : ""
                    }`}
                >
                  <button
                    className="nav-link btn btn-link"
                    onClick={() => scrollToSection("home")}
                  >
                   <a>Home</a>
                  </button>
                </li>
                <li
                  className={`nav-item ${activeSection === "about" ? "active" : ""
                    }`}
                >
                  <button
                    className="nav-link btn btn-link"
                    onClick={() => scrollToSection("about")}
                  >
                   <a>About Us</a>
                  </button>
                </li>
                <li
                  className={`nav-item ${activeSection === "courses" ? "active" : ""
                    }`}
                >
                  <button
                    className="nav-link btn btn-link"
                    onClick={() => scrollToSection("courses")}
                  >
                    <a>Courses</a>
                  </button>
                </li>
                <li
                  className={`nav-item ${activeSection === "team" ? "active" : ""
                    }`}
                >
                  <button
                    className="nav-link btn btn-link"
                    onClick={() => scrollToSection("team")}
                  >
                    <a>Team</a>
                  </button>
                </li>
                <li
                  className={`nav-item ${activeSection === "footer" ? "active" : ""
                    }`}
                >
                  <button
                    className="nav-link btn btn-link"
                    onClick={() => scrollToSection("footer")}
                  >
                    <a>Contact Us</a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </header>
      {/* /Header */}

      {/* Home */}
      <div id="home" className="hero-area">
        {/* Background Image */}
        <div className="bg-image bg-parallax overlay" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        {/* /Background Image */}

        <div className="home-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h1 className="white-text">EduNexus is best Training Clases </h1>
                <p className="lead white-text">
                Learn programming the smart way with our comprehensive courses designed for all skill levels. Master popular languages like Python, Java, and more with hands-on lessons, expert guidance, and real-world projects                </p>
                <a className="main-button icon-button" href="#course">Get Started!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Home */}
      <AboutSection />
      <CoursesSection />
      <CtaSection />
      <Team/>
      <CTASection2/>
    </div>
  );
};

export default App;
