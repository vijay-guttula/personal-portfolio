import React from 'react';

const Intro = () => {
  return (
    <div>
      <div className='introHeader inline-block text-6xl pl-1'>Hello,</div>
      <div className='introDes text-xl'>
        I'm<span className='font-bold'> Vijay Guttula</span>, a
        <span className='font-bold'> Senior CS Undergrad</span>, currently
        working as an <span> </span>
        <span className='font-bold'>
          SDE Intern @
          <a className='no-underline hover:underline' href='www.gotoolbox.in'>
            Toolbox
          </a>
        </span>
        .
      </div>
    </div>
  );
};

export default Intro;
