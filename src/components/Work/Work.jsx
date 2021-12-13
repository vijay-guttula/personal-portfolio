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
        since <span className='font-bold'>Aug, 2021</span>.
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
          Architected and Designed responsive frontend for the web, web-based
          apps, and internal dashboards.
        </li>
        <li>
          Interfaced with the backend team to build requisite APIs for
          integration.
        </li>
        <li>
          Worked with the design team to understandand and optimize user
          journeys.
        </li>
        <li>
          Involved in the strategic decisions of UX and technology stacks.
        </li>
        <li>
          Implemented vigorous testing processes and constantly monitored and
          updated outdated packages, maintaining the sheer functionality of the
          app.
        </li>
      </ul>
    </div>
  );
};

export default Work;
