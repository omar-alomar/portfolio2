import React, {useState, useContext } from 'react';
import Typewriter from "typewriter-effect"
import { RenderContext } from '../App'
import Socials from "./Socials"
import SocialsStatic from "./SocialsStatic"

export default function Greeting() {
  const { rendered, setRendered } = useContext(RenderContext)

  // updates rendered state after animation 
  setTimeout(() => {
    setRendered(true)
  },15000);
if (rendered === false) {
return (
      <>
      <div className="greeting">
        <h1 className="greeting__header">
          <Typewriter 
              options={{delay: 110}}
              onInit={(typewriter) => {
              typewriter.typeString("<span>Hi</span>")
              .pauseFor(200)
              typewriter.typeString("<span>.</span>")
              .pauseFor(1000)
              .typeString("<br/>I'm Omar,")
              .pauseFor(1000)
              .typeString("<br/>Web Designer.")
              .pauseFor(1000)
              .deleteChars(7)
              .typeString("veloper.")
              .pauseFor(1000)
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

    </>
)
}
