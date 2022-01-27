import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';


export default function ProjectCard({ projectList }) {
  return (
      <>
        <div className="project-card">
            <h2>{projectList.name}</h2>
            <p>{projectList.desc}</p>
            <img src={projectList.img}/>
            <div className="project-card__btn-container">
                <a href={projectList.gitLink} rel="noreferrer" target="_blank">
                    <button className="project-card__button--git" ><GitHubIcon />GitHub</button></a>
                <a href={projectList.liveLink} rel="noreferrer" target="_blank">
                    <button className="project-card__button--live" ><LanguageIcon />Live Version</button></a>
            </div>

        </div>
      </>
  );
}
