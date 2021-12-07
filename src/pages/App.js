import * as React from 'react';
import Intro from '../components/Intro/Intro';
import Projects from '../components/Projects/Projects';
import Work from '../components/Work/Work';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import '../styles/App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <div className='application'>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Vijay Guttula</title>
        </Helmet>
      </div>
      <div className='somethingIhavepickedupoftheInternet'>&nbsp;</div>
      <div className='subpixel-antialiased topContainer mx-auto md:mt-7'>
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
