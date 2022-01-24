import React, {useState, useContext } from 'react';
import { RenderContext } from '../App'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Socials() {
  return (
      <>
        <div className="socials">
            <div className="socials__icon--left"><a href="https://github.com/omar-alomar" rel="noreferrer" target="_blank">
              <GitHubIcon /></a></div>
            <div className="socials__icon--right"><a href="https://www.linkedin.com/in/omar-alomar-ba5430101/" rel="noreferrer" target="_blank">
              <LinkedInIcon /></a></div>
        </div>
      </>
  );
}
