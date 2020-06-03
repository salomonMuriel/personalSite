import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: No Encontrado" lang='es'/>
    <Container section>
      <TitleSection title="404" subtitle="Página no Encontrada" center />
      <p className="mt-4 text-center w-full">¡Esto aún no existe! ¿Cómo llegó aquí?</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
