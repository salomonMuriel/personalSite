import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Banner from 'components/ui/Banner';

import { SectionTitle, ImageSharpFluid } from 'helpers/definitions';

interface SectionHeroBanner extends SectionTitle {
  content: string;
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
          content
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
      content={heroBanner.content}
      linkTo={heroBanner.linkTo}
      linkText={heroBanner.linkText}
      img={heroBanner.img.childImageSharp.fluid}
    />
  );
};

export default HeroBanner;
