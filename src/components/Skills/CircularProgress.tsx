'use client';

import React, { useEffect, useState } from 'react';

interface CircularProgressProps {
  size: number;
  strokeWidth: number;
  percentage: number;
  color: string;
  textSize: number | string;
}

export default function CircularProgress({
  size,
  strokeWidth,
  percentage,
  color,
  textSize,
}: CircularProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (progress * circumference) / 100;

  return (
    <svg width={size} height={size} viewBox={viewBox}>
      <circle
        fill="none"
        stroke="var(--red)"
        strokeOpacity={0.2}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        fill="none"
        stroke={color}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        strokeDasharray={`${dash} ${circumference - dash}`}
        strokeLinecap="round"
        style={{ transition: 'all 2s' }}
      />
      <text
        fill="#fff"
        fontSize={`${textSize}px`}
        x="50%"
        y="50%"
        dy="20px"
        textAnchor="middle"
      >
        {`${percentage}%`}
      </text>
    </svg>
  );
}
