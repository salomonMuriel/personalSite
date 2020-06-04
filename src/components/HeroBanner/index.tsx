import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Banner from 'components/ui/Banner';

import { SectionTitle, ImageSharpFluid } from 'helpers/definitions';
import LangContext from 'context/LangContext';

interface SectionHeroBanner extends SectionTitle {
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
        html
        frontmatter {
          title
          subtitle
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
        html
        frontmatter {
          title
          subtitle
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
  const content_es: string = es.html;
  const content_en: string = en.html;
  return (
    <LangContext.Consumer>
      {lang => {
        if (lang.lang == 'es') {
          var heroBanner = heroBanner_es
          var content = content_es
        }
        else {
          heroBanner = heroBanner_en
          content = content_en
        }
        return (
          <Banner
            title={heroBanner.title}
            subtitle={heroBanner.subtitle}
            linkTo={'/' + lang.lang + heroBanner.linkTo}
            linkText={heroBanner.linkText}
            img={heroBanner.img.childImageSharp.fluid}
            content={content}
          />)
      }
      }
    </LangContext.Consumer>
  );
};

export default HeroBanner;
