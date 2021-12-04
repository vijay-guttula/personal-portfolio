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
      <div className='subTitle text-lg mt-2'>
        Projects I've worked on during the internship
      </div>
      <ul className='text-lg font-bold mt-1 mb-2'>
        <li>Networks-Ecom-App (VueJs, Cordova, GraphQl)</li>
        <li>Networks-Web (PHP)</li>
        <li>Ecoms-Dashboard (ReactJs)</li>
      </ul>
      <ul className='list-disc text-lg ml-5 tracking-wide leading-relaxed'>
        <li>
          Periodically worked on bringing in new features and scaling the app
          for better functionality
        </li>
        <li>Worked on i18 for extended language support</li>
        <li>
          Together with the backend team, achieved in making the app load faster
          by 15%
        </li>
        <li>
          Worked on scaling neccessary and compatible Cordova plugins to tweek
          native functionality
        </li>
      </ul>
    </div>
  );
};

export default Work;
