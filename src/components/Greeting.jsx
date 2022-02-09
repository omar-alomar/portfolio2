import React, {useState, useContext } from 'react';
import Typewriter from "typewriter-effect"
import { RenderContext } from '../App'
import Socials from "./Socials"
import SocialsStatic from "./SocialsStatic"
import Particles from "react-tsparticles";


export default function Greeting() {
  const { rendered, setRendered } = useContext(RenderContext)

  // updates rendered state after animation 
  setTimeout(() => {
    setRendered(true)
  },7300);

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
if (rendered === false) {
return (
      <>
      <div className="greeting">
        <h1 className="greeting__header">
          <Typewriter 
              options={{delay: 70}}
              onInit={(typewriter) => {
              typewriter.typeString("<span>Hi</span>")
              typewriter.typeString("<span>.</span>")
              .pauseFor(600)
              .typeString("<br/>I'm Omar,")
              .pauseFor(100)
              .typeString("<br/>Web Designer.")
              .pauseFor(100)
              .deleteChars(7)
              .typeString("veloper.")
              .pauseFor(100)
              .typeString("<br/><span style='color: #8d8d8d; font-size: 40px;'>Check out my stuff!</span>")
              .start();
                }}
              />
          </h1>
          <div className="socials-container">
            <Socials />
          </div>
        </div>
      </>
  );
}
else return (
    <>
        <h1 className="greeting__header">
           Hi.<br/>
           I'm Omar,<br/>
           Web Developer. <br/>
           <span style={{color: '#8d8d8d', fontSize: '40px'}}>Check out my stuff!</span>
        </h1>
        <div className="socials-container">
          <SocialsStatic />
        </div>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={{marginTop: "6vh"}}
            height="94vh"
            options={{
              fpsLimit: 30,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 100,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#08fdd8",
                },
                links: {
                  color: "#08fdd8",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 5,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 1600,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
              detectRetina: true,
          }}
        />

    </>
)
}
