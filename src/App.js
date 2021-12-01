import './App.css';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';

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
    </>
  );
}

export default App;
