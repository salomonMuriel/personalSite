import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import ProgressBar from 'components/ui/ProgressBar';

import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';
import LangContext from 'context/LangContext';

interface Skill {
  node: {
    id: string;
    frontmatter: {
      title: string;
      percentage: number;
    };
  };
}

const Skills: React.FC = () => {
  const { mR_es, aMR, mR_en } = useStaticQuery(graphql`
    query {
      mR_es: markdownRemark(frontmatter: { category: { eq: "skills section" }, lang: { eq: "es" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      aMR: allMarkdownRemark(filter: { frontmatter: { category: { eq: "skills" } } }, sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            id
            frontmatter {
              title
              percentage
            }
          }
        }
      }
      mR_en: markdownRemark(frontmatter: { category: { eq: "skills section" }, lang: { eq: "en" } }) {
        frontmatter {
          title
          subtitle
        }
      }
    }
  `);

  const sectionTitle_es: SectionTitle = mR_es.frontmatter;
  const sectionTitle_en: SectionTitle = mR_en.frontmatter;
  const skills: Skill[] = aMR.edges;

  return (
    <LangContext.Consumer>
      {lang => {
        if (lang.lang == 'es') {
          var sectionTitle = sectionTitle_es
        }
        else {
          sectionTitle = sectionTitle_en
        }
        return (
          <Container section>
            <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
            <Styled.Skills>
              {skills.map((item) => {
                const {
                  id,
                  frontmatter: { title, percentage }
                } = item.node;

                return (
                  <Styled.Skill key={id}>
                    <ProgressBar title={title} percentage={percentage} />
                  </Styled.Skill>
                );
              })}
            </Styled.Skills>
          </Container>
        )
      }}
    </LangContext.Consumer>
  );
};

export default Skills;
