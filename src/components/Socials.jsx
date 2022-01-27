import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Socials() {
  return (
      <>
        <div className="socials">
            <a href="https://github.com/omar-alomar" rel="noreferrer" target="_blank" className="socials__icon--left">
              <GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/omar-alomar-ba5430101/" rel="noreferrer" target="_blank" className="socials__icon--right">
              <LinkedInIcon /></a>
        </div>
      </>
  );
}
