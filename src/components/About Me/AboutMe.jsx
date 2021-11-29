import React from 'react';

const AboutMe = () => {
  return (
    <div className='cardContainers'>
      <div className='titleSec'>
        <div className='img'></div>
        <div className='titleName'>
          Vijay <br /> Guttula
        </div>
        <div className='divider'></div>
        <div className='occupation'>SDE Intern | Senior CS Undergrad</div>
        <div className='socialMedia'>
          <i className='fab fa-instagram fa-lg'></i>
          <i className='fab fa-twitter fa-lg'></i>
          <i className='fab fa-linkedin-in fa-lg'></i>
        </div>
      </div>
      <div className='mainDes'>
        <div className='introTitle'>Hello,</div>
        <div className='introSubtitle'>Here's who I am &#38; what I do</div>
        <div className='introBtns'>
          <button>Resume</button>
          <button>Projects</button>
        </div>
        <div className='introDescription'>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
