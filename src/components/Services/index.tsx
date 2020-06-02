import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import { IconProps } from 'components/ui/Icon';

import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';
import LangContext from 'context/LangContext';

interface Service {
  node: {
    id: string;
    frontmatter: {
      title: string;
      icon: IconProps;
      description: string;
    };
  };
}

const Services: React.FC = () => {
  const { mR_es, aMR_es, mR_en, aMR_en } = useStaticQuery(graphql`
    query {
      mR_es: markdownRemark(frontmatter: { category: { eq: "services section" }, lang: {eq: "es"} }) {
        frontmatter {
          title
          subtitle
        }
      }
      aMR_es: allMarkdownRemark(filter: { frontmatter: { category: { eq: "services" }, lang: {eq: "es"} } }, sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            id
            frontmatter {
              title
              icon
              description
            }
          }
        }
      }
      mR_en: markdownRemark(frontmatter: { category: { eq: "services section" }, lang: {eq: "en"} }) {
        frontmatter {
          title
          subtitle
        }
      }
      aMR_en: allMarkdownRemark(filter: { frontmatter: { category: { eq: "services" }, lang: {eq: "en"} } }, sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            id
            frontmatter {
              title
              icon
              description
            }
          }
        }
      }
    }
  `);

  const sectionTitle_es: SectionTitle = mR_es.frontmatter;
  const services_es: Service[] = aMR_es.edges;
  const sectionTitle_en: SectionTitle = mR_en.frontmatter;
  const services_en: Service[] = aMR_en.edges;

  return (
    <LangContext.Consumer>
      {lang => {
        if (lang.lang == 'es') {
          var sectionTitle = sectionTitle_es
          var services = services_es
        }
        else {
          sectionTitle = sectionTitle_en
          services = services_en
        }
        return (
          <Container section>
            <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
            <Styled.Services>
              {services.map((item) => {
                const {
                  id,
                  frontmatter: { title, icon, description }
                } = item.node;

                return (
                  <Styled.ServiceItem key={id}>
                    <InfoBlock icon={icon} title={title} content={description} />
                  </Styled.ServiceItem>
                );
              })}
            </Styled.Services>
          </Container>
        )
      }
      }
    </LangContext.Consumer>
  );
};

export default Services;
