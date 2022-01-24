import React, { useState, useContext } from 'react';
import Typewriter from "typewriter-effect"
import Socials from '../Socials';
import { RenderContext } from '../../App'

export default function Home() {
  const { rendered, setRendered } = useContext(RenderContext)
  
  return (
      <>
      <div className="home">
        <div className="home__greeting">
          <h1 className="home__greeting--header">
            <Typewriter 
              onInit={(typewriter) => {
                typewriter.typeString("<strong><span style='font-size: 2.5rem;'>Hi</span></strong>")
                .pauseFor(200)
                typewriter.typeString("<strong><span style='font-size: 2.5rem;'>,</span></strong>")
                .pauseFor(1000)
                .typeString("<br/><strong>I'm Omar.</strong>")
                .pauseFor(1000)
                .typeString("<br/><strong>Web designer.</strong>")
                .pauseFor(1000)
                .deleteChars(7)
                .typeString("<strong>veloper.</strong>")
                .pauseFor(1000)
                .typeString("<br/><span style='color: #8d8d8d; font-size: 40px;'>Check out my stuff!</span>")
                .callFunction(() => {
                  setRendered(true)
                  console.log(rendered)
                })
                .start()
              }}
            />

            </h1>
         </div>
         <div className="socials-container">
          <Socials />
        </div>
      </div>
      </>
  );
}
