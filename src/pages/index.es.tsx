import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/Services';
import News from 'components/News';
import Newsletter from 'components/Form';
import LangContext from 'context/LangContext';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Acerca de mí" lang='es'/>
    <HeroBanner />
    <Services />
    <hr />
    <Newsletter />
    {/* <News /> */}
  </Layout>
);

export default IndexPage;