import React from 'react';
import './footer.css';
import LOGO from '../../assets/logo.png';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <div className="footer__logo">
      <a href="#"><img src={LOGO} alt="LOGO" /></a>
      </div>

      <ul className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/ninoolor" target="_blank"><FaFacebookSquare /></a>
        <a href="https://www.github.com/ninonezdeoolor" target="_blank"><FaGithubSquare /></a>
        <a href="https://www.linkedin.com/in/ninonezdeoolor" target="_blank"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; DEO Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;