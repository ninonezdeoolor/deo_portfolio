import React from 'react';
import './about.css';
import ME from '../../assets/about.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="ME" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5 className='about__label'>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5 className='about__label'>Clients</h5>
              <small>2+ Worlwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>2+ Completed Projects</small>
            </article>
          </div>
          <p>
            Highly experienced in remote desktop support for nearly a decade, I have successfully made a career transition to become a Full-Stack Web Developer. Equipped with the latest industry knowledge and techniques, I recently completed an online coding bootcamp with Zuitt. With a strong foundation in technical support and newfound expertise in web development, I am eager to contribute my skills and creativity to create impactful web projects.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;
