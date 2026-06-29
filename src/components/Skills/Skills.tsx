'use client';

import React, { useState, useEffect } from 'react';
import './Skills.css';
import CircularProgress from './CircularProgress';

interface WindowDimensions {
  width: number;
  height: number;
}

function getWindowDimensions(): WindowDimensions {
  return { width: window.innerWidth, height: window.innerHeight };
}

export default function Skills() {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({ width: 800, height: 600 });

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const finalSize = windowDimensions.width > 700
    ? windowDimensions.width / 7
    : windowDimensions.width / 4;
  const finalStrokeWidth = windowDimensions.width / 99;
  const finalTextSize = windowDimensions.width > 700 ? windowDimensions.width / 45 : '';

  const skills = [
    { label: 'Programming in C, C++, Python', percentage: 90 },
    { label: 'App/Software Development', percentage: 70 },
    { label: 'Full Stack Web Development', percentage: 90 },
    { label: 'Graphics Designing', percentage: 75 },
  ];

  return (
    <div className="skills" id="skills">
      <h1 className="text-center">Skills</h1>
      <div className="container">
        <div className="row">
          {skills.map((skill) => (
            <div key={skill.label} className="col skill">
              <CircularProgress
                size={finalSize}
                strokeWidth={finalStrokeWidth}
                percentage={skill.percentage}
                color="var(--red)"
                textSize={finalTextSize}
              />
              <span>{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
