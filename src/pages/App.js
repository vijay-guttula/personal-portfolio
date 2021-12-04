import * as React from 'react';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <>
      <div className='somethingIhavepickedupoftheInternet'>&nbsp;</div>
      <div className='mobile:w-screen  subpixel-antialiased Container md:containered'>
        <Intro />
      </div>
      <div className='mobile:w-screen subpixel-antialiased Container md:containered'>
        <Projects />
      </div>
      <div className='mobile:w-screen subpixel-antialiased Container md:containered'>
        <Work />
      </div>
      <div className='mobile:w-screen subpixel-antialiased Container lastContainer md:containered'>
        <Contact />
      </div>
    </>
  );
}

export default App;
