import './App.css';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <div className='somethingIhavepickedupoftheInternet'>&nbsp;</div>
      <div className='md:container md:mx-auto subpixel-antialiased Container'>
        <Intro />
      </div>
      <div className='md:container md:mx-auto subpixel-antialiased Container'>
        <Projects />
      </div>
      <div className='md:container md:mx-auto subpixel-antialiased Container'>
        <Work />
      </div>
      <div className='md:container md:mx-auto subpixel-antialiased Container lastContainer'>
        <Contact />
      </div>
    </>
  );
}

export default App;
