import * as React from 'react';
import Intro from '../components/Intro/Intro';
import Projects from '../components/Projects/Projects';
import Work from '../components/Work/Work';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import '../styles/App.css';

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
      <div className='mobile:w-screen subpixel-antialiased Container mb-3 md:containered'>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
