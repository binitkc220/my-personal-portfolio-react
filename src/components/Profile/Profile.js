import React, { useState } from 'react';
import TiltCard from '../TiltCard/TiltCard';
import Timeline from '../Timeline/Timeline';
import './Profile.css';

export default function Profile() {

  const [personal, setPersonal] = useState(true);
  const [educational, setEducational] = useState(false);
  const [experience, setExperience] = useState(false);

  const handlePersonal = () => {
    setEducational(false);
    setExperience(false);
    setPersonal(true);
  }

  const handleEducational = () => {
    setPersonal(false);
    setExperience(false);
    setEducational(true);
  }

  const handleExperience = () => {
    setPersonal(false);
    setEducational(false);
    setExperience(true);
  }

  return (
    <div className="profile" id="about">
      <div className="container">
        <h1 className='text-center'>About</h1>

        <button type="button" className={`btn btn-link profile-red-underline ${personal ? 'active-underline' : ''}`} onClick={handlePersonal}><span className='profile-title'>Personal</span> <span className="profile-title" style={{ color: 'var(--red)' }}>Details</span></button>
        <button type="button" className={`btn btn-link profile-red-underline ${educational ? 'active-underline' : ''}`} onClick={handleEducational}><span className='profile-title'>Educational</span> <span className="profile-title" style={{ color: 'var(--red)' }}>Details</span></button>
        <button type="button" className={`btn btn-link profile-red-underline ${experience ? 'active-underline' : ''}`} onClick={handleExperience}><span className='profile-title'>Experience</span> <span className="profile-title" style={{ color: 'var(--red)' }}>Details</span></button><br /><br />

        {personal &&
          <div className='collapse-item'>
            <span>Hi, I am Binit KC from Kohalpur-11, Banke, Nepal. I am currently working in the field of Programmer, Blogger, Graphics Designer, Ethical Hacker, Teacher & a Cyber Trainer with the experience of two plus year in the field of Technology.</span><br /><br />
            <TiltCard />
          </div>}


        {educational &&
          <div className='collapse-item'>
            <Timeline />
          </div>}

        {experience &&
          <div className='collapse-item'>
            <i className="fa-solid fa-briefcase header-icon"></i>
            <div className="timeline-area">
              <br/>
              <div className="timeline">
                <span>Computer Engineer - City Computer Education </span>
                <span><i className="fa-regular fa-calendar"></i> Mar 2017 - Current</span>
                <span>City Computer Education is one of the best institute of Kohalpur, Banke which provide quality education to the student in the field of IT.</span>
              </div>  
            </div>
          </div>}


      </div>
    </div>
  )
}