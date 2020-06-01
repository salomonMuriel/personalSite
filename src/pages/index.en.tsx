import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/Services';
import News from 'components/News';
import Newsletter from 'components/Form';

const IndexPage: React.FC = () => {
  const LangContext = React.createContext('es');
  return (
    <LangContext.Provider value='es'>
      <Layout>
        <SEO title="About me" />
        <HeroBanner />
        <Services />
        <hr />
        <Newsletter />
        {/* <News /> */}
      </Layout>
    </LangContext.Provider>
  );
};

export default IndexPage;
