import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Timeline from 'components/ui/LeftTimeline';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import { SectionTitle } from 'helpers/definitions';
import LangContext from 'context/LangContext';

interface Experience {
  node: {
    id: string;
    html: React.ReactNode;
    frontmatter: {
      company: string;
      position: string;
      startDate: string;
      endDate: string;
    };
  };
}

const Experience: React.FC = () => {
  const { mR_es, aMR_es, mR_en, aMR_en } = useStaticQuery(graphql`
    query {
      mR_es: markdownRemark(frontmatter: { category: { eq: "experiences section" }, lang: { eq: "es" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      aMR_es: allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "experiences" }, lang: { eq: "es" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              company
              position
              startDate
              endDate
            }
          }
        }
      }
      mR_en: markdownRemark(frontmatter: { category: { eq: "experiences section" }, lang: { eq: "en" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      aMR_en: allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "experiences" }, lang: { eq: "en" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              company
              position
              startDate
              endDate
            }
          }
        }
      }
    }
  `);

  const sectionTitle_es: SectionTitle = mR_es.frontmatter;
  const experiences_es: Experience[] = aMR_es.edges;
  const sectionTitle_en: SectionTitle = mR_en.frontmatter;
  const experiences_en: Experience[] = aMR_en.edges;

  return (
    <LangContext.Consumer>
      {lang => {
        if (lang.lang == 'es') {
          var sectionTitle = sectionTitle_es
          var experiences = experiences_es
        }
        else {
          sectionTitle = sectionTitle_en
          experiences = experiences_en
        }
        return (
          <Container section>
            <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />
            {experiences.map((item) => {
              const {
                id,
                html,
                frontmatter: { company, position, startDate, endDate }
              } = item.node;
              return (
                <Timeline
                  key={id}
                  title={company}
                  subtitle={position}
                  content={<FormatHtml content={html} />}
                  startDate={startDate}
                  endDate={endDate}
                />
              );
            })}
          </Container>
        )
      }}
    </LangContext.Consumer>
  );
};

export default Experience;
