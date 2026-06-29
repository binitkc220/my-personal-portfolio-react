import React from 'react';
import './ServicesCard.css';

interface ServicesCardProps {
  icon: string;
  heading: string;
  description: string;
}

export default function ServicesCard({ icon, heading, description }: ServicesCardProps) {
  return (
    <div className="card-wrapper">
      <div className="card r">
        <div className="card-body d-flex flex-column align-items-center justify-content-center">
          <i className={icon}></i>
          <h2 className="card-title">{heading}</h2>
          <h5 className="card-text text-muted">{description}</h5>
        </div>
      </div>
    </div>
  );
}
