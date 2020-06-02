import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/Services';
import News from 'components/News';
import Newsletter from 'components/Form';
import LangContext from 'context/LangContext';

const IndexPage: React.FC = () => {
  return (
    <LangContext.Consumer>
      {lang => {
        if (lang.lang !== 'en') {
          lang.changeLang('en')
        }
        return (
          <Layout>
            <SEO title="About me" />
            <HeroBanner />
            <Services />
            <hr />
            <Newsletter />
            {/* <News /> */}
          </Layout>
        )
      }}
    </LangContext.Consumer >
  );
};

export default IndexPage;
