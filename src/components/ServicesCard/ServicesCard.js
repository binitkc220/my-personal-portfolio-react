import React from 'react';
import './ServicesCard.css';

export default function ServicesCard(props) {
  return (
    <>
      <div className="card-wrapper">
        <div className="card r" >
        
          <div className="card-body d-flex flex-column align-items-center justify-content-center">
          <i className={props.icon}></i>
            <h2 className="card-title">{props.heading}</h2>
            <h5 className="card-text text-muted">{props.description}</h5>
          </div>
        </div>
      </div>
    </>
  )
}
