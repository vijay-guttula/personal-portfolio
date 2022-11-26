import * as React from 'react';
import App from './App';
import Seo from '../components/SEO/SEO';

// markup
const IndexPage = () => {
  return (
    <>
      <Seo
        title={'Vijay Guttula | SDE'}
        description={
          'Software Developement.....Um, just someone who tinkers with tech'
        }
        canonical={'https://vijayguttula.com/'}
      />
      <App />
    </>
  );
};

export default IndexPage;
