'use client';

import React from 'react';
import './Portfolio.css';
import PortfolioCard from './PortfolioCard';

interface Project {
  title: string;
  description: string;
  imgUrl: string;
  live: string;
  sourcecode: string;
  type: string;
}

const projects: Project[] = [
  // ── New production projects ──────────────────────────────────────
  {
    title: 'AskMe',
    description: 'Social platform with real-time chat, WebRTC calls, wallet & booking system',
    imgUrl: '/img/projectimg/askme.png',
    live: 'https://www.askme.global/',
    sourcecode: 'null',
    type: 'Web App',
  },
  {
    title: 'NextPostAI',
    description: 'AI-powered social media marketing platform with multi-platform scheduling',
    imgUrl: '/img/projectimg/nextpostai.png',
    live: 'https://www.nextpostai.com/',
    sourcecode: 'null',
    type: 'Web App',
  },
  {
    title: 'TaskMentor',
    description: 'Project & task tracker with AI summaries and public achievement dashboard',
    imgUrl: '/img/projectimg/taskmentor.png',
    live: 'https://taskmentor.io/',
    sourcecode: 'null',
    type: 'Web App',
  },
  {
    title: 'RemoteWorkFromAnywhere',
    description: 'Remote job portal aggregating listings with dashboards for seekers & employers',
    imgUrl: '/img/projectimg/remoteworkfromanywhere.png',
    live: 'https://remoteworkfromanywhere.com/',
    sourcecode: 'null',
    type: 'Web App',
  },
  {
    title: 'Slangden',
    description: 'User-generated slang dictionary with community voting and scoring',
    imgUrl: '/img/projectimg/slangden.png',
    live: 'https://slangden.com/',
    sourcecode: 'null',
    type: 'Web App',
  },
  {
    title: 'OliveDrift',
    description: 'Reddit & HackerNews aggregator with problem/solution analysis and public API',
    imgUrl: '/img/projectimg/olivedrift.png',
    live: 'https://www.olivedrift.com/',
    sourcecode: 'null',
    type: 'Web App',
  },
  {
    title: 'Chess999',
    description: 'Live online chess platform with AI move analysis and practice sessions',
    imgUrl: '/img/projectimg/chess999.png',
    live: 'https://chess999.com/',
    sourcecode: 'null',
    type: 'Web App',
  },
  // ── Older projects ───────────────────────────────────────────────
  {
    title: 'TextUtils',
    description: 'Webapp developed using React',
    imgUrl: '/img/projectimg/textutils.webp',
    live: 'https://binitkc.com.np/textutils',
    sourcecode: 'https://github.com/binitkc220/TextUtils-React',
    type: 'Web App',
  },
  {
    title: 'Student Management System - C++',
    description: 'Login based student management system',
    imgUrl: '/img/projectimg/sms.webp',
    live: 'https://www.youtube.com/watch?v=WFRJIhbqB2s&t=47s&ab_channel=EasyExplanation',
    sourcecode: 'https://github.com/binitkc220/Student-Management-System-in-C',
    type: 'Software',
  },
  {
    title: 'Employee Management System - Django',
    description: 'Login based web app with data entry system',
    imgUrl: '/img/projectimg/django.webp',
    live: 'https://binitkc220.pythonanywhere.com',
    sourcecode: 'https://github.com/binitkc220/Employee-Management-System-Django',
    type: 'Web App',
  },
  {
    title: 'Anti-Corruption Nepal',
    description: 'App developed using Flutter for creating awareness on corruption',
    imgUrl: '/img/projectimg/anticorruption.webp',
    live: 'null',
    sourcecode: 'https://github.com/binitkc220/Anti-Corruption_App-Flutter',
    type: 'Software',
  },
  {
    title: 'iNotebook, a cloud Notebook',
    description: 'MERN stack web app',
    imgUrl: '/img/projectimg/inotebook.webp',
    live: 'https://binitkc.com.np/inotebook',
    sourcecode: 'https://github.com/binitkc220/iNotebook-MERN-Stack',
    type: 'Web App',
  },
  {
    title: 'BCCER Form Software',
    description: 'GUI based software created using Python',
    imgUrl: '/img/projectimg/bccer.webp',
    live: 'null',
    sourcecode: 'null',
    type: 'Software',
  },
  {
    title: 'Creativity',
    description: 'My first creative design with 3D Paint',
    imgUrl: '/img/projectimg/design.webp',
    live: 'null',
    sourcecode: 'null',
    type: 'Graphics',
  },
  {
    title: 'City Computer Education',
    description: 'My first designed website',
    imgUrl: '/img/projectimg/citywebpage.webp',
    live: 'https://citycomputer.edu.np',
    sourcecode: 'null',
    type: 'Web App',
  },
  {
    title: 'Bal Vidhya Secondary School',
    description: 'Designed website for my school',
    imgUrl: '/img/projectimg/bvm.webp',
    live: 'https://bvmss.edu.np',
    sourcecode: 'null',
    type: 'Web App',
  },
  {
    title: 'Creating Static Contact Form',
    description: 'View Details (Youtube)',
    imgUrl: '/img/projectimg/static.webp',
    live: 'https://www.youtube.com/watch?v=6hh8oxru2No&t=3s&ab_channel=BinitKc',
    sourcecode: 'null',
    type: 'Others',
  },
  {
    title: 'Creativity',
    description: 'Doraemon using CorelDraw',
    imgUrl: '/img/projectimg/doraemonbinit.webp',
    live: 'null',
    sourcecode: 'null',
    type: 'Graphics',
  },
  {
    title: 'Logo',
    description: 'BVM School logo designed using CorelDraw',
    imgUrl: '/img/projectimg/bvmlogo.webp',
    live: 'null',
    sourcecode: 'null',
    type: 'Graphics',
  },
];

type TabType = 'All' | 'Software' | 'Web App' | 'Graphics' | 'Others';
const tabs: TabType[] = ['All', 'Software', 'Web App', 'Graphics', 'Others'];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <h1 className="sec-title">Portfolio</h1>
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            {tabs.map((tab, i) => {
              const id = tab.toLowerCase().replace(/\s+/g, '-');
              return (
                <button
                  key={tab}
                  className={`nav-link ${i === 0 ? 'active' : ''}`}
                  id={`nav-${id}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#nav-${id}`}
                  type="button"
                  role="tab"
                  aria-controls={`nav-${id}`}
                  aria-selected={i === 0 ? 'true' : 'false'}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          {tabs.map((tab, i) => {
            const id = tab.toLowerCase().replace(/\s+/g, '-');
            const filtered = tab === 'All' ? projects : projects.filter((p) => p.type === tab);
            return (
              <div
                key={tab}
                className={`tab-pane fade show ${i === 0 ? 'active' : ''}`}
                id={`nav-${id}`}
                role="tabpanel"
                aria-labelledby={`nav-${id}-tab`}
              >
                <div className="row mt-3">
                  {filtered.map((project, index) => (
                    <PortfolioCard key={index} {...project} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
