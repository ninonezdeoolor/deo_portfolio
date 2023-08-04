import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Full-Stack Web Application Development</h3>
          </div>

          <ul className="service__list">
          <li>
              <BiCheck className="service__list-icon" />
              <p>End-to-end web application development (Front-end and Back-end).</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive and user-friendly UI/UX design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Seamless integration of front-end with RESTful APIs.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implementing secure authentication and authorization using JSON Web Tokens (JWT).</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Continuous deployment and maintenance for scalable and reliable web applications.</p>
            </li>
          </ul>
        </article>
        {/* Full-Stack Web Application Development */}

        <article className="service">
          <div className="service__head">
            <h3>Web Application Deployment and Infrastructure Management</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cloud-based web application deployment.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Scalable and resilient infrastructure setup.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Continuous monitoring and performance optimization.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Data backup and disaster recovery solutions.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Security measures for protecting sensitive data.</p>
            </li>
          </ul>
        </article>
        {/* Web Application Deployment and Infrastructure Management */}

        <article className="service">
          <div className="service__head">
            <h3>Web Application Testing and Quality Assurance</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Comprehensive API testing and validation.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross-browser and device compatibility testing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Performance testing for optimal speed and responsiveness.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Bug tracking and effective issue resolution.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User acceptance testing (UAT) for smooth end-user experience.</p>
            </li>
          </ul>
        </article>
        {/* Web Application Testing and Quality Assurance */}
      </div>
    </section>
  )
}

export default Services;
