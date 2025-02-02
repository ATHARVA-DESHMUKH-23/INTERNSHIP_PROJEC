import React from 'react';
import Avtar from '../img/avatar.png'
import '../css/team.css'

const team = () => {
  return (
    <div id="why-us" className="section">

      {/* Container */}
      <div className="container">

        {/* Row */}
        <div className="row">
          <div className="section-header text-center">
            <h2>Our Teachers</h2>
            <p className="lead"> Gain insights from industry professionals with years of experience in software development.</p>
          </div>

          {/* Feature 1 */}
          <div className="col-md-4">
            <div className="feature">
                <img src={Avtar} alt="" />
              <div className="feature-content">
                <h4>Sakshi Pawar</h4>
                <p>Ex Micrsoft intern | Senior Software Engineer</p>
                <p>An accomplished software engineer with hands-on experience at Microsoft. Sakshi specializes in building scalable web applications and mentoring students in advanced coding practices.</p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-md-4">
            <div className="feature">
            <img src={Avtar} alt="" />
              <div className="feature-content">
                <h4>Amit Verma</h4>
                <p>Full-Stack Developer | Tech Educator</p>
                <p>Amit has over 7 years of experience as a full-stack developer, working with companies like Google and Uber.</p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-md-4">
            <div className="feature">
            <img src={Avtar} alt="" />
              <div className="feature-content">
                <h4>Nikita Sharma</h4>
                <p>Data Scientist | Machine Learning Enthusiast</p>
                <p>Nikita brings a wealth of knowledge from her years in the data science field, specializing in machine learning and AI. </p>
              </div>
            </div>
          </div>
        </div>
        {/* /Row */}

        <hr className="section-hr" />

        
        {/* /Row */}

      </div>
      {/* /Container */}

    </div>
  );
};

export default team;
