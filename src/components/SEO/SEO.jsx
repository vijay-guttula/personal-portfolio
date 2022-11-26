import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ title, description, canonical }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const { defaultTitle, siteUrl, twitterUsername } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    url: `${siteUrl}${pathname}`,
    description: description,
  };

  return (
    <Helmet
      title={seo.title}
      description={seo.description}
      link={
        canonical ? [{ rel: 'canonical', key: canonical, href: canonical }] : []
      }
    >
      {seo.url && <meta property='og:url' content={seo.url} />}

      {seo.title && <meta property='og:title' content={seo.title} />}

      {seo.description && (
        <meta property='og:description' content={seo.description} />
      )}

      {twitterUsername && (
        <meta name='twitter:creator' content={twitterUsername} />
      )}
    </Helmet>
  );
};

export default Seo;

Seo.propTypes = {
  title: PropTypes.string,
};

Seo.defaultProps = {
  title: null,
};

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        defaultTitle: title
        siteUrl: url
        twitterUsername
      }
    }
  }
`;
