import React from 'react';

const Work = () => {
  return (
    <div>
      <div className='title text-3xl'>Work</div>
      <div className='subTitle text-xl mt-3'>
        Working as an<span> </span>
        <span className='font-bold'>
          SDE Intern @
          <a className='no-underline hover:underline' href='www.gotoolbox.in'>
            Toolbox
          </a>
        </span>
        <span> </span>
        since <span className='font-bold'>Aug, 2020</span>.
      </div>
      <div className='subTitle text-lg'>Things I've done in the internship</div>
      <ul className='list-disc text-lg ml-5 tracking-wide leading-relaxed'>
        <li>Integrated the cancel order flow to the store</li>
        <li>Added module to support banners for targetted promotions</li>
        <li>Integrated the product video upload to dashboard</li>
        <li>Added support to broadcast and move feeds</li>
        <li>
          Added neccessary and compatible Cordova plugins to tweek native
          functionality
        </li>
      </ul>
    </div>
  );
};

export default Work;
