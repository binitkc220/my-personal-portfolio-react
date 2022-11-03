import React from 'react';
import './Timeline.css';

export default function Timeline() {
  return (
    <>
    <i className="fa-solid fa-graduation-cap header-icon"></i>
    <div className="timeline-area">
        <br/>
        <div className="timeline">
            <span>IOE Pulchowk Campus</span>
            <span><i className="fa-regular fa-calendar"></i> 2077 - Current</span>
            <span>I am currently studying Bachelor in Electronics, Communication and Information Engieering in IOE Pulchowk Campus and I am very much interested and enthusiastic in this faculty.</span>
        </div>
        <div className="timeline">
            <span>BVM Secondary School, Kohalpur, Banke</span>
            <span><i className="fa-regular fa-calendar"></i> 2075 - 2076</span>
            <span>I completed by +2 in Science Faculty from BVM School with good GPA.</span>
        </div>
        <div className="timeline">
            <span>Gorkha United Public School, Kohalpur, Banke</span>
            <span><i className="fa-regular fa-calendar"></i> 2071 - 2074</span>
            <span>From class 7 to 10. Enjoyed a lot. Got many friends.</span>
        </div>
        <div className="timeline">
            <span>Adarsh Higher Secondary School, Nepalgunj, Banke</span>
            <span><i className="fa-regular fa-calendar"></i> 2063 - 2070</span>
            <span>My First School. I was talented in my childhood. </span>
        </div>
    </div>
    </>
  )
}
