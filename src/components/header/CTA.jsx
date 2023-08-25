import React from 'react';
import CV from '../../assets/deo.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className='btn' title="Download my CV">Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA;
