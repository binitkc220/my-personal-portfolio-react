import React from 'react';
import './Intro.css';
import MyPhoto from '../../img/me.webp'
import Typewriter from "typewriter-effect";

export default function Intro() {
  return (
    <section id="home">
      <div className="intro-background" style={{ backgroundImage: `url(${MyPhoto})` }}>
        <div className="container intro">
          <div className="intro-name">
            <span className='intro-first'>Hi, I am</span>
            <span className='intro-second'>Binit KC</span>
            <div className='typewriter'>
              <Typewriter
                options={{
                  strings: ['A Computer Engineer', 'Software Developer', 'Programmer', 'Full Stack Web Developer'],
                  autoStart: true,
                  loop: true,
                  pauseFor: 500,
                  delay: 50,
                }}
              />
            </div>

            <a href="https://blog.binitkc.com.np" className="btn bttn blog-button" target="_blank" rel="noreferrer"><span className="blog-btn-text">View My Blog</span></a>

            
            <div className='social-icons'>
              <a href="https://www.facebook.com/binit.kc.500/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.linkedin.com/in/binit-kc-2bb363163/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="https://github.com/binitkc220" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
