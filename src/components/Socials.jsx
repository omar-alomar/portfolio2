import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Socials() {
  return (
      <>
        <div className="socials">
            <span className="socials__icon"><a href="https://github.com/omar-alomar" rel="noreferrer" target="_blank"><GitHubIcon /></a></span>
            <span className="socials__icon"><a href="https://www.linkedin.com/in/omar-alomar-ba5430101/" rel="noreferrer" target="_blank"><LinkedInIcon /></a></span>
        </div>
      </>
  );
}
