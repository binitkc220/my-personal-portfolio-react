'use client';

import React from 'react';
import './Skills.css';
import useReveal from '@/hooks/useReveal';

const skills = [
  { label: 'Full Stack Web Development',        pct: 90, icon: 'fa-solid fa-code' },
  { label: 'Programming — C, C++, Python, JS',  pct: 90, icon: 'fa-solid fa-terminal' },
  { label: 'App / Software Development',        pct: 70, icon: 'fa-solid fa-mobile-screen' },
  { label: 'Graphics Designing',                pct: 75, icon: 'fa-solid fa-paintbrush' },
];

export default function Skills() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section className="skills-section" id="skills" ref={ref}>
      <div className="container">
        <h2 className="sec-title">My <span>Skills</span></h2>
        <p className="sec-subtitle">Technologies and disciplines I work with every day</p>

        <div className="skills-list">
          {skills.map((s, i) => (
            <div
              key={s.label}
              className={`skill-card reveal${visible ? ' visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="skill-header">
                <div className="skill-icon">
                  <i className={s.icon} aria-hidden="true" />
                </div>
                <span className="skill-label">{s.label}</span>
                <span className="skill-pct">{s.pct}%</span>
              </div>
              <div className="skill-track">
                <div
                  className={`skill-fill${visible ? ' animate' : ''}`}
                  style={
                    {
                      '--target': `${s.pct}%`,
                      transitionDelay: `${i * 0.1 + 0.3}s`,
                    } as React.CSSProperties
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
