import React from 'react';
import './Portfolio.css';

interface PortfolioCardProps {
  title: string;
  description: string;
  imgUrl: string;
  live: string;
  sourcecode: string;
}

export default function PortfolioCard({ title, description, imgUrl, live, sourcecode }: PortfolioCardProps) {
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="image-overlay">
        <img src={imgUrl} alt={title} className="img-fluid card-image" />
        <div className="overlay">
          <div className="overlay-text">
            <h4>{title}</h4>
            <h6>{description}</h6>
          </div>
          <div className="d-flex flex-row justify-content-center overlay-actions">
            <a
              className={`btn btn-light m-2 ${live === 'null' ? 'invisible' : ''}`}
              href={live}
              target="_blank"
              rel="noreferrer"
            >
              View Live
            </a>
            <a
              className={`btn btn-light m-2 ${sourcecode === 'null' ? 'invisible' : ''}`}
              href={sourcecode}
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
