import React from 'react';
import Socials from '../Socials';
import Greeting from '../Greeting';

export default function Home() {
  return (
      <>
      <div className="home">
        <div className="home__greeting">
            <Greeting />
         </div>
         <div className="socials-container">
          <Socials />
        </div>
      </div>
      </>
  );
  
}
