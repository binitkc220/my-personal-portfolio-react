'use client';

import React from 'react';
import './Services.css';
import ServicesCard from '../ServicesCard/ServicesCard';
import useReveal from '@/hooks/useReveal';

const services = [
  {
    icon: 'fa-solid fa-terminal',
    heading: 'Programming',
    description:
      'C, C++, Python, and JavaScript — algorithms, data structures, scripting and automation.',
  },
  {
    icon: 'fa-solid fa-paintbrush',
    heading: 'Design',
    description:
      'Graphics design with CorelDRAW, Adobe Photoshop and other professional editing tools.',
  },
  {
    icon: 'fa-solid fa-laptop-code',
    heading: 'Development',
    description:
      'Full stack web apps (React, Next.js, Django), mobile with Flutter, software with Python & C++.',
  },
  {
    icon: 'fa-solid fa-server',
    heading: 'DevOps',
    description:
      'CI/CD pipelines, Docker, AWS EC2 & Amplify deployment, cloud infrastructure and monitoring.',
  },
];

export default function Services() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section className="services-section" id="services" ref={ref}>
      <div className="container">
        <h2 className="sec-title">What I <span>Offer</span></h2>
        <p className="sec-subtitle">Services I provide to clients and collaborators</p>

        <div className="services-grid">
          {services.map((s, i) => (
            <ServicesCard
              key={s.heading}
              icon={s.icon}
              heading={s.heading}
              description={s.description}
              delay={i * 0.1}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
