import React from 'react';

const Work = () => {
  return (
    <div>
      <div className='title text-4xl'>Work</div>
      <div className='subtitle text-xl mt-5'>
        Working as an SDE intern @Toolbox since Aug, 2020.
      </div>
      <div className='subtitle text-lg mt-1'>Things I've done so far</div>
      <ul className='list-disc text-lg mt-1 ml-5'>
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
