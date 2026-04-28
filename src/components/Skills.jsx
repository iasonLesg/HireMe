import React from 'react';
// Check this line! Ensure the braces are there.
import { SKILLS_CATEGORIES } from './SkillsData'; 

const Skills = () => {
  const hiddenStyle = {
    position: 'absolute', // Ensures it doesn't take up space in the flow
    top: 0,               // Forces it to the very top corner
    left: 0,              // Forces it to the very top corner
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '0',          // Changed from -1px to 0 to be safer
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0',
    pointerEvents: 'none', // Critical so it doesn't block clicks
    zIndex: -1            // Sends it behind everything just in case
  };


  return (
    <div style={hiddenStyle} aria-hidden="false">
      <header>
        <h1>Professional Software Engineering Portfolio</h1>
        <p>Specialized in AI Integration, Microservices, and 3D Engineering Systems.</p>
      </header>

      {Object.entries(SKILLS_CATEGORIES).map(([key, category]) => (
        <section key={key}>
          <h2>{category.title}</h2>
          <ul>
            {category.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      ))}

      <section>
        <h2>Experience Summary</h2>
        <p>
          Significant tenure at Deep Excavation LLC as a Software Engineer, 
          implementing high-performance multithreaded solutions and AI-driven 
          workflows in the .NET ecosystem.
        </p>
      </section>
    </div>
  );
};

export default Skills;