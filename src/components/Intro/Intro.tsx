'use client';

import React from 'react';
import './Intro.css';
import Typewriter from 'typewriter-effect';

export default function Intro() {
  return (
    <section id="home" className="hero">
      {/* ambient glow blobs */}
      <div className="hero-blob hero-blob-a" aria-hidden="true" />
      <div className="hero-blob hero-blob-b" aria-hidden="true" />

      {/* photo — right side with gradient fade */}
      <div
        className="hero-photo"
        style={{ backgroundImage: 'url(/img/me.webp)' }}
        aria-hidden="true"
      />

      <div className="container hero-inner">
        <div className="hero-content">

          {/* availability badge */}
          <div className="hero-badge">
            <span className="badge-pulse" />
            Open to opportunities
          </div>

          <p className="hero-greeting">Hi, I am</p>
          <h1 className="hero-name">Er. Binit KC</h1>

          <div className="hero-typewriter">
            <Typewriter
              options={{
                strings: [
                  'Computer Engineer',
                  'Full Stack Developer',
                  'Software Developer',
                  'Programmer',
                ],
                autoStart: true,
                loop: true,
                pauseFor: 600,
                delay: 45,
              } as object}
            />
          </div>

          <p className="hero-sub">
            Building production-grade web apps, real-time systems &amp; AI-integrated platforms.
          </p>

          <div className="hero-ctas">
            <a href="#contact" className="hero-btn-primary">
              Hire Me &nbsp;<i className="fa-solid fa-arrow-right" />
            </a>
            <a
              href="https://blog.binitkc.com.np"
              target="_blank"
              rel="noreferrer"
              className="hero-btn-ghost"
            >
              <i className="fa-brands fa-hashnode" /> &nbsp;My Blog
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://www.facebook.com/binit.kc.500/"
              target="_blank" rel="noreferrer"
              className="hero-social" aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a
              href="https://www.linkedin.com/in/binit-kc-2bb363163/"
              target="_blank" rel="noreferrer"
              className="hero-social" aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a
              href="https://github.com/binitkc220"
              target="_blank" rel="noreferrer"
              className="hero-social" aria-label="GitHub"
            >
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="hero-scroll-cue" aria-hidden="true">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </div>
    </section>
  );
}
