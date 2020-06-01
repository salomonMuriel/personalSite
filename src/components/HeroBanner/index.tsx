import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Banner from 'components/ui/Banner';

import { SectionTitle, ImageSharpFluid } from 'helpers/definitions';

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
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "hero section" } }) {
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

  const heroBanner: SectionHeroBanner = markdownRemark.frontmatter;

  return (
    <Banner
      title={heroBanner.title}
      subtitle={heroBanner.subtitle}
      content1={heroBanner.content1}
      content2={heroBanner.content2}
      linkTo={heroBanner.linkTo}
      linkText={heroBanner.linkText}
      img={heroBanner.img.childImageSharp.fluid}
    />
  );
};

export default HeroBanner;
