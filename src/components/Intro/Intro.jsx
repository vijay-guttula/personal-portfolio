import React from 'react';

const Intro = () => {
  return (
    <div className='pt-5'>
      <div className='introHeader inline-block pl-1  text-6xl'>Hello,</div>
      <br />
      <div className='introDes text-xl inline-block mt-2 pt-3'>
        I'm<span className='font-bold'> Vijay Guttula</span>, a
        <span className='font-bold'> Software Development Engineer (SDE)</span>
        . <br />
        Currently building&nbsp;
        <span className='font-bold'>
          <a
            className='no-underline hover:underline'
            href='https://www.wintwealth.com'
          >
            Wint Wealth
          </a>
          .
        </span>
        <br />
        <span>Up for building robust tech anytime.</span>
      </div>
    </div>
  );
};

export default Intro;
