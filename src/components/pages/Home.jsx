import React from 'react';
import Greeting from '../Greeting';

export default function Home() {

  return (
      <>
      <div className="home">
        <div className="home__greeting">
            <Greeting />
         </div>
      </div>
      </>
  );
  
}
