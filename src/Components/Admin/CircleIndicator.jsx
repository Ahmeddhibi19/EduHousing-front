import React from 'react';

const CircleIndicator = ({ percentage }) => {
    let bgColor;
    if (percentage >= 0 && percentage < 50) {
        bgColor = '#FF0000'; 
      // Green for low percentage
    } else if (percentage >= 50 && percentage < 75) {
      bgColor = '#FFA500'; // Yellow for moderate percentage
    } else {
        bgColor = '#008000';// Red for high percentage
    }
  
    const size = 100; // Default size
    const strokeWidth = 10; // Stroke width
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const dashOffset = circumference - (percentage / 100) * circumference;
  
    return (
      <div className="relative w-20 h-20">
        <svg className="absolute top-0 left-0" width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#808080"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={bgColor}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            className='z-10'
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/4 text-center">
          <span className="text-lg font-bold text-gray-700">{percentage}%</span>
        </div>
      </div>
    );
  };
  
export default CircleIndicator;
