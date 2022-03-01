import React from 'react';
import './about.css';
import ME from '../Images/me3.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <img src={ME} alt="" />
        </div>

        <div className='about_content'>
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ year working</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Client</h5>
              <small>300+ client worldwide</small>
            </article><article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Project</h5>
              <small>80+ completed project</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam nesciunt doloribus fuga iste accusamus, deserunt non soluta sint harum id voluptatem officiis at aspernatur excepturi architecto veniam nihil aliquid.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About