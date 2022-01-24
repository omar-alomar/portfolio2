import React from 'react';
import Typewriter from "typewriter-effect"

export default function Home() {
  return (
      <>
      <div className="home">
        <div className="home__greeting">
        <h1 className="home__greeting--header">
          <Typewriter 
            onInit={(typewriter) => {
              typewriter.typeString("<strong>Hi,</strong>")
              .pauseFor(1000)
              .typeString("<br/><strong>I'm Omar.</strong>")
              .pauseFor(1000)
              .typeString("<br/><strong>Web designer.</strong>")
              .pauseFor(1000)
              .deleteChars(7)
              .typeString("<strong>veloper.</strong>")
              .pauseFor(1000)
              .typeString("<br/><span style='color: #8d8d8d; font-size: 30px'>Check out my stuff!</span>")
              .start()
            }}
          />
          </h1>
          {/* <h1 className="home__greeting--header">Hi,</h1>
          <h2 className="home__greeting--header">I'm Omar.</h2>
          <h3 className="home__greeting--header">Web Developer.</h3>
          <p className="home__greeting--p">Check out my stuff.</p> */}
        </div>
      </div>
      </>
  );
}
