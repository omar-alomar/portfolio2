import React from 'react';

export default function Skills() {
    const skillList = [
        "ReactJS",
        "Git",
        "npm",
        "ES5/ES6",
        "SQL",
        "CSS",
        "BEM",
        "HTML",
        "WordPress",
        "Python",
        "C++",
        "NodeJS"
    ]
    const skillsElement = skillList.map((skill) => {return <div className="skills__grid-item"><p>{skill}</p></div>})
  return (
      <>
        <div className="skills">
            <h2>Skills:</h2>
            <div className="skills__grid">
                {skillsElement}
            </div>
        </div>
      </>
  );
}
