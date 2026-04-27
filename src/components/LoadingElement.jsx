import React from 'react';
import './LoadingElement.css';

const LoadingElement = ({ isExiting }) => {
  const renderDots = (containerClass) => {
    return [...Array(8)].map((_, i) => (
      <div 
        key={i} 
        className={containerClass} 
        style={{ transform: `rotate(${(i * 360) / 18}deg) translate(60%)` }}
      >
        {[...Array(12)].map((_, j) => (
          <div 
            key={j} 
            className="dot" 
            style={{
              width: `${containerClass === 'bigDots' ? 15 - j : 13 - j}px`,
              height: `${containerClass === 'bigDots' ? 15 - j : 13 - j}px`,
              transform: `rotate(${0 - (j - 1) * (containerClass === 'bigDots' ? 36 : 15)}deg) translate(${containerClass === 'bigDots' ? '78px' : '48px'})`,
              animationName: `${containerClass === 'bigDots' ? 'bgDotsMoving' : 'smDotsMoving'}`,
              animationDuration: '15s'
            }}
          ></div>
        ))}
      </div>
    ));
  };

  return (
    <div className={`loading-overlay ${isExiting ? 'fade-out' : ''}`}>
      <div className="circles">
        <div className="bigCircles">{renderDots("bigDots")}</div>
        <div className="smallCircles">{renderDots("smallDots")}</div>
      </div>
    </div>
  );
};

export default LoadingElement;