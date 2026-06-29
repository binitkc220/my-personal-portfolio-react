import React from 'react';
import './Timeline.css';

export default function Timeline() {
  return (
    <>
      <i className="fa-solid fa-graduation-cap header-icon"></i>
      <div className="timeline-area">
        <div className="timeline">
          <span>Tribhuvan University, IOE, Pulchowk Campus</span>
          <span><i className="fa-regular fa-calendar"></i> 2021 – 2024</span>
          <span>
            Bachelor of Engineering (BE) in Electronics, Communication and Information
            Engineering. Studied at one of Nepal&apos;s most prestigious engineering campuses.
          </span>
        </div>
        <div className="timeline">
          <span>BVM Secondary School, Kohalpur, Banke</span>
          <span><i className="fa-regular fa-calendar"></i> 2018 – 2020</span>
          <span>+2 in Science Faculty with good GPA.</span>
        </div>
        <div className="timeline">
          <span>Gorkha United Public School, Kohalpur, Banke</span>
          <span><i className="fa-regular fa-calendar"></i> 2017 – 2020</span>
          <span>Secondary education (classes 7–10). Enjoyed a lot and made many friends.</span>
        </div>
        <div className="timeline">
          <span>Adarsh Higher Secondary School, Nepalgunj, Banke</span>
          <span><i className="fa-regular fa-calendar"></i> up to 2017</span>
          <span>Primary school years. My first school — talented and enthusiastic from the start.</span>
        </div>
      </div>
    </>
  );
}
