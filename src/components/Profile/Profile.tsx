'use client';

import React, { useState } from 'react';
import TiltCard from '../TiltCard/TiltCard';
import Timeline from '../Timeline/Timeline';
import './Profile.css';

export default function Profile() {
  const [activeTab, setActiveTab] = useState<'personal' | 'educational' | 'experience'>('personal');

  return (
    <div className="profile" id="about">
      <div className="container">
        <h1 className="sec-title">About</h1>

        <div className="profile-tabs">
          <button
            type="button"
            className={`profile-tab-btn profile-red-underline ${activeTab === 'personal' ? 'active-underline' : ''}`}
            onClick={() => setActiveTab('personal')}
          >
            <span className="profile-title">Personal</span>{' '}
            <span className="profile-title" style={{ color: 'var(--red)' }}>Details</span>
          </button>
          <button
            type="button"
            className={`profile-tab-btn profile-red-underline ${activeTab === 'educational' ? 'active-underline' : ''}`}
            onClick={() => setActiveTab('educational')}
          >
            <span className="profile-title">Educational</span>{' '}
            <span className="profile-title" style={{ color: 'var(--red)' }}>Details</span>
          </button>
          <button
            type="button"
            className={`profile-tab-btn profile-red-underline ${activeTab === 'experience' ? 'active-underline' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <span className="profile-title">Experience</span>{' '}
            <span className="profile-title" style={{ color: 'var(--red)' }}>Details</span>
          </button>
        </div>

        {activeTab === 'personal' && (
          <div className="collapse-item">
            <span>
              Hi, I am Binit KC from Nepal — Co-Founder &amp; Frontend Developer at AskMe and
              Full Stack Developer at BT Labs. I am an Electronics, Communication &amp; Information
              Engineer with hands-on experience building production-grade web applications,
              real-time systems, AI-integrated platforms, and cloud-deployed services.
            </span>
            <br /><br />
            <TiltCard />
          </div>
        )}

        {activeTab === 'educational' && (
          <div className="collapse-item">
            <Timeline />
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="collapse-item">
            <i className="fa-solid fa-briefcase header-icon"></i>
            <div className="timeline-area">

              {/* AskMe */}
              <div className="timeline">
                <span>
                  Co-Founder &amp; Frontend Developer —{' '}
                  <a href="https://www.askme.global/" target="_blank" rel="noreferrer" className="exp-link">
                    AskMe <i className="fa-solid fa-arrow-up-right-from-square exp-link-icon"></i>
                  </a>
                </span>
                <span><i className="fa-regular fa-calendar"></i> Jan 2024 – Present · Kathmandu, Nepal</span>
                <span>
                  Designed and developed a responsive, user-friendly platform. Built profile
                  management with following/unfollowing, a real-time chat app with WebSockets,
                  WebRTC-based voice/video calls, a secure appointment booking system, and a
                  digital wallet with balance loading and transactions. Deployed on AWS EC2 &amp;
                  Amplify with REST API, authentication, and cloud storage integration.
                </span>
              </div>

              {/* BT Labs */}
              <div className="timeline">
                <span>Full Stack Developer — BT Labs</span>
                <span><i className="fa-regular fa-calendar"></i> Jan 2025 – Jun 2026 · Mechanicsburg, US</span>
                <span>Built and maintained 6+ production web applications in a team environment:</span>
                <ul className="experience-list">
                  <li>
                    <b>NextPostAI</b> —{' '}
                    <a href="https://www.nextpostai.com/" target="_blank" rel="noreferrer" className="exp-link">
                      nextpostai.com <i className="fa-solid fa-arrow-up-right-from-square exp-link-icon"></i>
                    </a>
                    {' '}· Automated social media marketing platform with AI-generated posts &amp; videos,
                    multi-platform integration (Facebook, LinkedIn, Instagram, X, Threads, TikTok),
                    and multi-day campaign scheduling.
                  </li>
                  <li>
                    <b>TaskMentor</b> —{' '}
                    <a href="https://taskmentor.io/" target="_blank" rel="noreferrer" className="exp-link">
                      taskmentor.io <i className="fa-solid fa-arrow-up-right-from-square exp-link-icon"></i>
                    </a>
                    {' '}· Project &amp; task tracker with AI summaries, achievement tracking, and a public dashboard.
                  </li>
                  <li>
                    <b>RemoteWorkFromAnywhere</b> —{' '}
                    <a href="https://remoteworkfromanywhere.com/" target="_blank" rel="noreferrer" className="exp-link">
                      remoteworkfromanywhere.com <i className="fa-solid fa-arrow-up-right-from-square exp-link-icon"></i>
                    </a>
                    {' '}· Remote job portal with a scraper aggregating listings across platforms and separate dashboards for job seekers and employers.
                  </li>
                  <li>
                    <b>Slangden</b> —{' '}
                    <a href="https://slangden.com/" target="_blank" rel="noreferrer" className="exp-link">
                      slangden.com <i className="fa-solid fa-arrow-up-right-from-square exp-link-icon"></i>
                    </a>
                    {' '}· User-generated slang dictionary with community voting and scoring.
                  </li>
                  <li>
                    <b>OliveDrift</b> —{' '}
                    <a href="https://www.olivedrift.com/" target="_blank" rel="noreferrer" className="exp-link">
                      olivedrift.com <i className="fa-solid fa-arrow-up-right-from-square exp-link-icon"></i>
                    </a>
                    {' '}· Reddit &amp; HackerNews post aggregator analyzing user problems/solutions with a dashboard and public API.
                  </li>
                  <li>
                    <b>Chess999</b> —{' '}
                    <a href="https://chess999.com/" target="_blank" rel="noreferrer" className="exp-link">
                      chess999.com <i className="fa-solid fa-arrow-up-right-from-square exp-link-icon"></i>
                    </a>
                    {' '}· Live online chess platform with opening/endgame practice sessions and AI-powered move analysis.
                  </li>
                </ul>
              </div>

              {/* City Computer Education */}
              <div className="timeline">
                <span>Computer Engineer — City Computer Education</span>
                <span><i className="fa-regular fa-calendar"></i> Mar 2017 – Jan 2024 · Kohalpur, Nepal</span>
                <span>
                  Taught and trained students in IT at one of Kohalpur&apos;s leading institutes,
                  covering programming, web development, and computer fundamentals.
                </span>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}
