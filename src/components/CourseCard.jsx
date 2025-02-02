import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import 'font-awesome/css/font-awesome.min.css'; // Font Awesome

// Import images
import course01 from '../img/course01.jpg';
import course02 from '../img/course02.jpg';
import course03 from '../img/course03.jpg';
import course04 from '../img/course04.jpg';
import course05 from '../img/course05.jpg';
import course06 from '../img/course06.jpg';
import course07 from '../img/course07.jpg';
import course08 from '../img/course08.jpg';

const CourseCard = ({ imgSrc, title, category, price }) => (
  <div id='course' className="col-md-3 col-sm-6 col-xs-6">
    <div className="course">
      <a href="#" className="course-img">
        <img src={imgSrc} alt={title} />
        <i className="course-link-icon fa fa-link"></i>
      </a>
      <a className="course-title" href="#">{title}</a>
      <div className="course-details">
        <span className="course-category">{category}</span>
        <span className={`course-price ${price === 'Free' ? 'course-free' : 'course-premium'}`}>{price}</span>
      </div>
    </div>
  </div>
);

const CoursesSection = () => {
  const courses = [
    { imgSrc: course04, title: 'Complete C programming ', category: 'Core Language', price: 'Premium' },
    { imgSrc: course05, title: 'Fundamental of Java ', category: 'Core Language', price: 'Premium' },
    { imgSrc: course06, title: 'Data Structures and Algorithms in Python', category: 'Python', price: 'Premium' },
    { imgSrc: course01, title: 'Python for Beginners', category: 'Python', price: 'Premium' }, // New Python course
    { imgSrc: course02, title: 'Fullstack Java Programming', category: 'FullStack', price: 'Premium' }, // New Python course
    { imgSrc: course04, title: 'JavaScript Basics and Beyond', category: 'Web Development', price: 'Premium' }, // New JavaScript course
    { imgSrc: course01, title: 'Mastering React: From Beginner to Pro', category: 'Web Development', price: 'Premium' }, // New React course
    { imgSrc: course03, title: 'MERN Stack', category: 'MERN Stack', price: 'Premium' }, // New Python course
  ];


  return (
    <div id="courses" className="section">
      <div className="container">
        <div className="row">
          <div className="section-header text-center">
            <h2>Explore Courses</h2>
            <p className="lead">
            Explore our wide range of programming courses, designed to take you from beginner to expert with hands-on learning and real-world projects.            </p>
          </div>
        </div>

        <div id="courses-wrapper">
          <div className="row">
            {courses.slice(0, 4).map(course => (
              <CourseCard
                key={course.title}
                imgSrc={course.imgSrc}
                title={course.title}
                category={course.category}
                price={course.price}
              />
            ))}
          </div>

          <div className="row">
            {courses.slice(4, 8).map(course => (
              <CourseCard
                key={course.title}
                imgSrc={course.imgSrc}
                title={course.title}
                category={course.category}
                price={course.price}
              />
            ))}
          </div>
        </div>

        <div className="row">
          <div className="center-btn">
            <a className="main-button icon-button" href="#">Join Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
