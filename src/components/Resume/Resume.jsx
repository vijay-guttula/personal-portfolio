import React from 'react';

const Resume = () => {
  return (
    <>
      {/* work */}
      <div className='cardContainersWork'>
        <div className='resumeTitle'>Work Experience</div>
        <div className='workContainer'>
          <div className='workIntro'>
            <div className='workTimeline'>2021-Present</div>
            <div className='workPosition'>SDE Intern</div>
            <div className='workCompany'>Toolbox</div>
            <div className='workLoc'>Bangalore, Karnataka, India</div>
          </div>
          <div className='workDes'>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </div>
        </div>
      </div>

      {/* education */}
      <div className='cardContainersWork'>
        <div className='resumeTitle'>Education</div>
        <div className='workContainer'>
          <div className='workIntro'>
            <div className='workTimeline'>2018-2022</div>
            <div className='workPosition'>
              Bachelor of Technology - Computer Science and Engineering
            </div>
            <div className='workCompany'>Lovely Professional University</div>
            <div className='workLoc'>Punjab, India</div>
          </div>
          <div className='workDes'>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </div>
        </div>
      </div>

      {/* personal skills */}
      <div className='cardContainersWork'>
        <div className='resumeTitle'>Skills</div>
        <div>
          <ul className='listContainer'>
            <div className='listRow'>
              <li>ad</li>
              <li>ad</li>
            </div>
            <div className='listRow'>
              <li>ad</li>
              <li>ad</li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Resume;
