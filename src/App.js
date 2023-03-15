import React, { useState } from 'react';  

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';   // in analitycs - about me - 3 buttons

import './App.css';
import MatrixRain from './Components/MatrixRain';
import Analytics from './Components/Analytics';
import NavBar from './Components/NavBar';
import RainStream from './Components/RainStream';

import './Components/Search/style.css';

import Contact from './Components/Contact';
import Hero from './Components/Hero';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Main from './Components/Search/Main';

function App() {
  const [nav, setNav] = useState(false);
  return (
    
    <div className="App">
    <MatrixRain />
    <RainStream />

      <NavBar nav={nav} setNav={setNav} />
      <Hero nav={nav} setNav={setNav} />
      <Analytics nav={nav} setNav={setNav} />
      <Projects nav={nav} setNav={setNav}/>
      <Experience nav={nav} setNav={setNav} /> 
      <Main />
      <Contact nav={nav} setNav={setNav} /> 
      
     
    </div>
  );
}

export default App;
