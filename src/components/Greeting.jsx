import React, {useState, useContext } from 'react';
import Typewriter from "typewriter-effect"
import { RenderContext } from '../App'



export default function Greeting() {
  const { rendered, setRendered } = useContext(RenderContext)

  // updates rendered state after animation 
  setTimeout(() => {
    setRendered(true)
  },15000);
if (rendered === false) {
return (
      <>
      <h1 className="home__greeting--header">
        <Typewriter 
            options={{
                skipAddStyles: true
            }}
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
      </>
  );
}
else return (
    <>
        <h1 className="home__greeting--header">
           Hi.<br/>
           I'm Omar,<br/>
           Web Developer. <br/>
           <span style={{color: '#8d8d8d', fontSize: '40px'}}>Check out my stuff!</span>
        </h1>

    </>
)
}
