import React from 'react';
import ProjectCard from '../ProjectCard';
import cryptoApp from '../../assets/img/cryptoApp.png';
import gpt3 from '../../assets/img/gpt3.png';
import mbaEng from '../../assets/img/mba-eng.png';
import omegaSolutions from '../../assets/img/omegaSolutions.png';
import shippingSolutions from '../../assets/img/shippingSolutions.png';
import CodeIcon from '@mui/icons-material/Code';


export default function Projects() {

const projectList = [

  {id: 0,
   name: 'Omega Solutions',
   desc: 'React website for my web dev business.',
   img: omegaSolutions,
   liveLink: 'https://omegasolutions.tech',
   gitLink: 'https://github.com/omar-alomar/omega-solutions'
  },
  {id: 1,
    name: 'Mildenberg Boender and Associates',
    desc: 'A Wordpress site for a land development business',
    img: mbaEng,
    liveLink: 'https://mba-eng.com/',
    gitLink: ''
   },
   {id: 2,
    name: 'Shipping Solutions',
    desc: 'A web app built for use by shipping companies to manage orders, clients, and business operations. Class project.',
    img: shippingSolutions,
    liveLink: '',
    gitLink: 'https://github.com/omar-alomar/shippingSolutions'
   },
   {id: 3,
    name: 'Crypto App',
    desc: 'A web app that uses Redux and API calls to get the latest cryptocurrency prices, information, and news.',
    img: cryptoApp,
    liveLink: '',
    gitLink: 'https://github.com/omar-alomar/crypto-app'
   },
   {id: 4,
    name: 'OpenAI Landing Page',
    desc: 'React landing page for OpenAI GPT-3 I built from a figma file I found online.',
    img: gpt3,
    liveLink: '',
    gitLink: 'https://github.com/omar-alomar/gpt3Demo'
   },
]
const projectElement = projectList.map(project => {
  return <ProjectCard
  key={project.id}
  projectList={projectList[project.id]}
  />  
  })

  return (
      <>
        <div className="projects">
          <h1>Projects</h1>
          <h2>A few of my most recent projects.</h2>
          <br/><span className="projects__break"><CodeIcon/></span>
          {projectElement}
        </div>
      </>
  );
}
