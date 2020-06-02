import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Banner from 'components/ui/Banner';

import { SectionTitle, ImageSharpFluid } from 'helpers/definitions';
import LangContext from 'context/LangContext';

interface SectionHeroBanner extends SectionTitle {
  content1: string;
  content2: string;
  linkTo: string;
  linkText: string;
  img: {
    childImageSharp: {
      fluid: ImageSharpFluid;
    };
  }
}

const HeroBanner: React.FC = () => {
  const { es, en } = useStaticQuery(graphql`
    query {
      es: markdownRemark(frontmatter: { category: { eq: "hero section" }, lang: {eq: "es"} }) {
        frontmatter {
          title
          subtitle
          content1
          content2
          linkTo
          linkText
          img {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      en: markdownRemark(frontmatter: { category: { eq: "hero section" }, lang: {eq: "en"} }) {
        frontmatter {
          title
          subtitle
          content1
          content2
          linkTo
          linkText
          img {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const heroBanner_es: SectionHeroBanner = es.frontmatter;
  const heroBanner_en: SectionHeroBanner = en.frontmatter;

  return (
    <LangContext.Consumer>
      {lang => {
        if (lang.lang == 'es')
          var heroBanner = heroBanner_es
        else
          heroBanner = heroBanner_en
        return (
          <Banner
            title={heroBanner.title}
            subtitle={heroBanner.subtitle}
            content1={heroBanner.content1}
            content2={heroBanner.content2}
            linkTo={'/'+lang.lang+heroBanner.linkTo}
            linkText={heroBanner.linkText}
            img={heroBanner.img.childImageSharp.fluid}
          />)
      }
      }
    </LangContext.Consumer>
  );
};

export default HeroBanner;
