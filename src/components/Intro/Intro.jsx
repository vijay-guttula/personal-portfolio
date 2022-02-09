import React from 'react';

const Intro = () => {
  return (
    <div className='pt-5'>
      <div className='introHeader inline-block pl-1  text-6xl'>Hello,</div>
      <div className='introDes text-xl inline-block mt-2 pt-3'>
        I'm<span className='font-bold'> Vijay Guttula</span>, a
        <span className='font-bold'> Senior CS Undergrad</span>
        . <br />
        I have wide range of interests from software product development in AI,
        Crypto to semiconductors.
        <br />
        And my current goal is to strengthen my CS background and be a better
        engineer than yesterday.
      </div>
    </div>
  );
};

export default Intro;
