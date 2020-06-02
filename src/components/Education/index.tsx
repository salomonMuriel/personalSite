import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Timeline from 'components/ui/RightTimeline';
import * as Styled from './styles';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import { SectionTitle } from 'helpers/definitions';
import LangContext from 'context/LangContext';

interface Education {
  node: {
    id: string;
    html: React.ReactNode;
    frontmatter: {
      university: string;
      degree: string;
      startDate: string;
      endDate: string;
    };
  };
}

const Education: React.FC = () => {
  const { mR_es, aMR_es, mR_en, aMR_en } = useStaticQuery(graphql`
    query {
      mR_es: markdownRemark(frontmatter: { category: { eq: "education section" }, lang: { eq: "es" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      aMR_es: allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "education" }, lang: { eq: "es" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              university
              degree
              startDate
              endDate
            }
          }
        }
      }
      mR_en: markdownRemark(frontmatter: { category: { eq: "education section" }, lang: { eq: "en" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      aMR_en: allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "education" }, lang: { eq: "en" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              university
              degree
              startDate
              endDate
            }
          }
        }
      }
    }
  `);

  const sectionTitle_es: SectionTitle = mR_es.frontmatter;
  const education_es: Education[] = aMR_es.edges;
  const sectionTitle_en: SectionTitle = mR_en.frontmatter;
  const education_en: Education[] = aMR_en.edges;

  return (
    <LangContext.Consumer>
      {lang => {
        if (lang.lang == 'es') {
          var sectionTitle = sectionTitle_es
          var education = education_es
        }
        else {
          sectionTitle = sectionTitle_en
          education = education_en
        }
        return (
          <Styled.Banner>
            <Styled.Container>
              <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

              {education.map((item) => {
                const {
                  id,
                  html,
                  frontmatter: { university, degree, startDate, endDate }
                } = item.node;

                return (
                  <Timeline
                    key={id}
                    title={university}
                    subtitle={degree}
                    content={<FormatHtml content={html} />}
                    startDate={startDate}
                    endDate={endDate}
                  />
                );
              })}
            </Styled.Container>
          </Styled.Banner>
        )
      }}
    </LangContext.Consumer>
  );
};

export default Education;
