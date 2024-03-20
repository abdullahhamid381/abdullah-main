import React, { useEffect, useRef, useState } from 'react';
import './Scss/Skill.scss';

const ProgressBar = ({ label, percentage, isActive }) => (
  <div className={`progress-bar ${isActive ? 'active' : ''}`}>
    <div className="label">{label}</div>
    <div className="bar-container">
      <div className="bar" style={{ width: `${isActive ? percentage : 0}%` }}></div>
    </div>
  </div>
);


const Skills = () => {
  const progressBarsData = [
    { label: 'HTML 5', percentage: 80 },
    { label: ' JAVACRIPT', percentage: 75 },
    { label: ' CSS 3 ', percentage: 75 },
    { label: 'REACT.JS', percentage: 80 },
    { label: 'BOOTSTRAP 5', percentage: 90 },
    { label: 'NEXT JS', percentage: 75 },
    { label: 'TAILWIND CSS', percentage: 85 },
    { label: 'NODE.JS', percentage: 75 },
  ];  

  const [isActive, setIsActive] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsActive(true);
          setHasAnimated(true);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="skill-back-parent" id="skill">
      <div className="skill-width">
        <div>
          <div className="section" ref={sectionRef}>
            <h3>Skill Experience</h3>
            <h2>Showcasing your talent amplifying your impact</h2>
          </div>

          <div className="progress-bars">
            {progressBarsData.map((bar, index) => (
              <ProgressBar
                key={index}
                label={bar.label}
                percentage={bar.percentage}
                isActive={isActive}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
