import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className='title'>Let's Chat</div>
      <div className='subTitle'>
        I'd love to hear about your cool ideas and work together.
      </div>
      <div className='contacts mt-3' style={{ fontSize: '0.85rem' }}>
        <div className='contact fa-lg no-underline hover:underline'>
          <a href='mailto:ssvijayg@gmail.com'>
            <i className='far fa-paper-plane mr-1'></i>Mail
          </a>
        </div>
        <div className='contact mt-3 fa-lg no-underline hover:underline'>
          <a href='https://github.com/vijay-guttula'>
            <i className='fab fa-github mr-1'></i>Github
          </a>
        </div>
        <div className='contact mt-3 fa-lg no-underline hover:underline'>
          <a href='https://twitter.com/vj_guttula'>
            <i className='fab fa-twitter mr-1'></i>Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
