import React from 'react';
import './experience.css';
import {BiLogoHtml5} from 'react-icons/bi';
import {IoLogoCss3} from 'react-icons/io';
import {DiJavascript} from 'react-icons/di';
import {FaReact} from 'react-icons/fa';
import {SiBootstrap} from 'react-icons/si';
import {BiLogoTailwindCss} from 'react-icons/bi';
import {BiLogoNodejs} from 'react-icons/bi';
import {SiExpress} from 'react-icons/si';
import {BiLogoMongodb} from 'react-icons/bi';
import {SiMysql} from 'react-icons/si';
import {DiCodeigniter} from 'react-icons/di';
import {FaLaravel} from 'react-icons/fa';

const Experience = () => {
  return (
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Front-End Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BiLogoHtml5 className='experience__details-icon' />
                <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <IoLogoCss3 className='experience__details-icon' />
                <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <DiJavascript className='experience__details-icon' />
                <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <FaReact className='experience__details-icon' />
                <div>
                <h4>React.JS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <SiBootstrap className='experience__details-icon' />
                <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BiLogoTailwindCss className='experience__details-icon' />
                <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Beginner</small>
                </div>
              </article>
            </div>
          </div>
          {/* END OF FRONTEND */}

          <div className="experience__backend">
          <h3>Back-End Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BiLogoNodejs className='experience__details-icon' />
                <div>
                <h4>Node.JS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <SiExpress className='experience__details-icon' />
                <div>
                <h4>Express.JS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BiLogoMongodb className='experience__details-icon' />
                <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <SiMysql className='experience__details-icon' />
                <div>
                <h4>MySQL</h4>
                <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <DiCodeigniter className='experience__details-icon' />
                <div>
                <h4>CodeIgniter</h4>
                <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <FaLaravel className='experience__details-icon' />
                <div>
                <h4>Laravel</h4>
                <small className='text-light'>Beginner</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Experience;