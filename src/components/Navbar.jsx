import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import InfoIcon from '@mui/icons-material/Info';

export default function Navbar() {
  return (
      <>
        <div className="nav">
          <Link to={"/projects"} className="nav__item"><CodeIcon className="nav__item--icon" /></Link>
          <Link to={"/"} className="nav__item"><HomeIcon className="nav__item--icon" /></Link>
          <Link to={"/about"} className="nav__item"><InfoIcon className="nav__item--icon" /></Link>
        </div>
      </>
  );
}
