import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/Services';
import Testimonials from 'components/Testimonials';
import Newsletter from 'components/Newsletter';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About me" />
      <HeroBanner />
      <Services />
      <hr />
      <Newsletter/>
      <Testimonials />
    </Layout>
  );
};

export default IndexPage;
