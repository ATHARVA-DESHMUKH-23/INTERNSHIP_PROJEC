import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import 'font-awesome/css/font-awesome.min.css'; // Font Awesome
import aboutimg from '../img/about.png';


const AboutSection = () => {
  return (
    <div id="about" className="section">
      {/* Container */}
      <div className="container">
        {/* Row */}
        <div className="row">
          <div className="col-md-6">
            <div className="section-header">
              <h2>Welcome to EduNexus</h2>
              <p className="lead">
              Welcome to EduNexus, your ultimate destination for mastering programming languages! Explore our interactive courses and start your journey to becoming a skilled developer today              </p>
            </div>

            {/* Feature 1 */}
            <div className="feature">
              <i className="feature-icon fa fa-flask"></i>
              <div className="feature-content">
                <h4>Structured Courses</h4>
                <p>
                  Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam
                  nominati.
                </p>
              </div>
            </div>
            {/* /Feature 1 */}

            {/* Feature 2 */}
            <div className="feature">
              <i className="feature-icon fa fa-users"></i>
              <div className="feature-content">
                <h4>Expert Teachers</h4>
                <p>
                  Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam
                  nominati.
                </p>
              </div>
            </div>
            {/* /Feature 2 */}

            {/* Feature 3 */}
            <div className="feature">
              <i className="feature-icon fa fa-comments"></i>
              <div className="feature-content">
                <h4>Community</h4>
                <p>
                  Ceteros fuisset mei no, soleat epicurei adipiscing ne vis. Et his suas veniam
                  nominati.
                </p>
              </div>
            </div>
            {/* /Feature 3 */}
          </div>

          <div className="col-md-6">
            <div className="about-img">
              <img src={aboutimg} alt="About Edusite" />
            </div>
          </div>
        </div>
        {/* /Row */}
      </div>
      {/* /Container */}
    </div>
  );
};

export default AboutSection;
