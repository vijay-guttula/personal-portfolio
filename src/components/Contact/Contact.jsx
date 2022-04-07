import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const Contact = () => {
  return (
    <div>
      <div className='title text-3xl'>Let's Chat</div>
      <div className='subTitle text-lg mt-3'>
        I'd love to hear about your cool ideas and work together.
      </div>
      <div
        className='contacts mt-3 tracking-wide leading-relaxed'
        style={{ fontSize: '0.85rem' }}
      >
        <div className='contact fa-lg no-underline hover:underline'>
          <a href='mailto:this.vijayguttula@gmail.com'>
            <FontAwesomeIcon
              icon={faPaperPlane}
              className='mr-1'
            ></FontAwesomeIcon>
            Mail
          </a>
        </div>
        <div className='contact mt-3 fa-lg no-underline hover:underline'>
          <a href='https://github.com/vijay-guttula'>
            <FontAwesomeIcon icon={faGithub} className='mr-1'></FontAwesomeIcon>
            Github
          </a>
        </div>
        <div className='contact mt-3 fa-lg no-underline hover:underline'>
          <a href='https://twitter.com/vj_guttula'>
            <FontAwesomeIcon
              className='mr-1'
              icon={faTwitter}
            ></FontAwesomeIcon>
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
