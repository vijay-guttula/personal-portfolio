import React from 'react';

const Intro = () => {
  return (
    <div>
      <div className='introHeader inline-block pl-1  text-6xl'>Hello,</div>
      <div className='introDes text-xl inline-block mt-3'>
        I'm<span className='font-bold'> Vijay Guttula</span>, a
        <span className='font-bold'> Senior CS Undergrad</span>, currently
        working as an <span> </span>
        <span className='font-bold'>
          SDE Intern @
          <a className='no-underline hover:underline' href='www.gotoolbox.in'>
            Toolbox
          </a>
        </span>
        . <br />
        My key interests lie in{' '}
        <span className='font-bold'>Industrial Tech</span>. <br />
        And my current goal is to strenthen my CS background and be a better
        engineer than yesterday.
      </div>
    </div>
  );
};

export default Intro;
