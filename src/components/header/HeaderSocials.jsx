import React from 'react';
import {GrFacebook} from 'react-icons/gr';
import {FaGithubSquare} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.facebook.com/ninoolor" target="_blank" title="Facebook"><GrFacebook/></a>
      <a href="https://www.github.com/ninonezdeoolor" target="_blank" title="GitHub"><FaGithubSquare/></a>
      <a href="https://www.linkedin.com/in/ninonezdeoolor" target="_blank" title="LinkedIn"><BsLinkedin/></a>
    </div>
  )
}

export default HeaderSocials;