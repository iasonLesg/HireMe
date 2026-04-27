import React from 'react';
import './AnimatedDots.css';

const AnimatedDots = () => {
  const totalDots = 15;

  return (
    <div className="content">
      <div className="circle">
        {Array.from({ length: totalDots }).map((_, index) => (
          <span 
            key={index} 
            className={`dot no${index + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedDots;