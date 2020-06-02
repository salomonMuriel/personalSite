import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as Styled from './styles';

import { ImageSharpFluid } from 'helpers/definitions';
import LangContext from 'context/LangContext';

const Logo: React.FC = () => {
  const { site, placeholderImage } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "initialsIcon.png" }) {
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const logoTitle: string = site.siteMetadata.title;
  const logoImage: ImageSharpFluid = placeholderImage.childImageSharp.fluid;

  return (
    <LangContext.Consumer>
      {lang =>
        (
          <Styled.Logo to={"/"+lang.lang}>
            <Styled.Image>
              <Img fluid={logoImage} alt={logoTitle}/>
            </Styled.Image>
          </Styled.Logo>
        )
      }
    </LangContext.Consumer>
  );
};

export default Logo;
