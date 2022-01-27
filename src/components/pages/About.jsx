import React from 'react';
import { Link } from 'react-router-dom';
import Resume from "../../assets/resume.pdf"
import Skills from '../Skills';


export default function About() {
  return (
      <>
      <div className="about">
        <h1>About me</h1>
        <p>I'm a full stack web developer with a focus on the front-end.</p>
        <p>I love creating intuitive, dynamic user experiences.</p>
        <Link to={Resume} target="_blank" rel="noopener noreferrer"><button className="about__resume__btn" >Resume</button></Link>
        <Skills />
      </div>
      </>
  );
}
