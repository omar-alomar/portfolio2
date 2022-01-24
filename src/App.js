import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './css/App.css';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Navbar from './components/Navbar';

export const RenderContext = React.createContext({ render: false, setRender: () => {} })

function App() {
  const [rendered, setRendered] = useState(false)
  const value = { rendered, setRendered }
  return (
    <>
      <div className="App">
        <RenderContext.Provider value={value}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </RenderContext.Provider>
      </div>
    </>
  );
}

export default App;
