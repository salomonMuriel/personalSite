import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import { IconProps } from 'components/ui/Icon';

import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';
import Newsletter from 'components/Form';
import LangContext from 'context/LangContext';


interface Contact {
  node: {
    id: string;
    frontmatter: {
      title: string;
      content: string;
      icon: IconProps;
    };
  };
}

const ConctactInfo: React.FC = () => {
  const { mR_es, aMR_es, mR_en, aMR_en } = useStaticQuery(graphql`
    query {
      mR_es: markdownRemark(frontmatter: { category: { eq: "contact section" }, lang: { eq: "es" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      aMR_es: allMarkdownRemark(filter: { frontmatter: { category: { eq: "contact" }, lang: { eq: "es" } } }, sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            id
            frontmatter {
              title
              icon
              content
            }
          }
        }
      }
      mR_en: markdownRemark(frontmatter: { category: { eq: "contact section" }, lang: { eq: "en" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      aMR_en: allMarkdownRemark(filter: { frontmatter: { category: { eq: "contact" }, lang: { eq: "en" } } }, sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            id
            frontmatter {
              title
              icon
              content
            }
          }
        }
      }
    }
  `);

  const sectionTitle_es: SectionTitle = mR_es.frontmatter;
  const contacts_es: Contact[] = aMR_es.edges;
  const sectionTitle_en: SectionTitle = mR_en.frontmatter;
  const contacts_en: Contact[] = aMR_en.edges;

  return (
    <LangContext.Consumer>
      {lang => {
        if (lang.lang == 'es') {
          var sectionTitle = sectionTitle_es
          var contacts = contacts_es
        }
        else {
          sectionTitle = sectionTitle_en
          contacts = contacts_en
        }
        return (
          <div>
            <Container section>
              <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
              {contacts.map((item) => {
                const {
                  id,
                  frontmatter: { title, icon, content }
                } = item.node;

                return (
                  <Styled.ContactInfoItem key={id}>
                    <InfoBlock icon={icon} title={title} content={content} center />
                  </Styled.ContactInfoItem>
                );
              })}
            </Container>
            <Newsletter />
          </div>
        )
      }}
    </LangContext.Consumer>
  );
};

export default ConctactInfo;
