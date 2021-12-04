import React from 'react';

const Footer = () => {
  return (
    <div className='mt-6 text-sm self-center justify-self-center text-center text-gray-400 mb-4'>
      Built using Gatsby &amp; TailwindCss.{' '}
      <a
        className='text-black no-underline hover:underline'
        href='https://github.com/vijay-guttula/personal-portfolio'
      >
        Source
      </a>
    </div>
  );
};

export default Footer;
