import React from 'react';
import './ServicesCard.css';

interface ServicesCardProps {
  icon: string;
  heading: string;
  description: string;
  delay?: number;
  visible?: boolean;
}

export default function ServicesCard({
  icon,
  heading,
  description,
  delay = 0,
  visible = false,
}: ServicesCardProps) {
  return (
    <div
      className={`svc-card${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="svc-icon-wrap">
        <i className={icon} aria-hidden="true" />
      </div>
      <h3 className="svc-heading">{heading}</h3>
      <p className="svc-desc">{description}</p>
    </div>
  );
}
