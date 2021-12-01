import './App.css';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <div className='somethingIhavepickedupoftheInternet'>&nbsp;</div>
      <div className='mobile:w-screen  subpixel-antialiased Container md:container'>
        <Intro />
      </div>
      <div className='mobile:w-screen subpixel-antialiased Container md:container'>
        <Projects />
      </div>
      <div className='mobile:w-screen subpixel-antialiased Container md:container'>
        <Work />
      </div>
      <div className='mobile:w-screen subpixel-antialiased Container lastContainer md:container'>
        <Contact />
      </div>
    </>
  );
}

export default App;
