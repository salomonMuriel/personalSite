import React, { useEffect } from 'react';

import MainNav from './MainNav';
import Logo from './Logo';
import Img from 'gatsby-image'

import * as Styled from './styles';
import { useStaticQuery, graphql } from 'gatsby';
import LangContext from 'context/LangContext';
import { ImageSharpFluid } from 'helpers/definitions';
import { Location } from "@reach/router"
import styled from 'styled-components';


interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = ({ siteTitle }) => {
  const { colombiaFlag, usaFlag } = useStaticQuery(graphql`
  query {
    colombiaFlag: file(relativePath: { eq: "colombia.png" }) {
      childImageSharp {
        fluid(maxWidth: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    usaFlag: file(relativePath: { eq: "usa.png" }) {
      childImageSharp {
        fluid(maxWidth: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);
  const colombiaFlagFluid: ImageSharpFluid = colombiaFlag.childImageSharp.fluid;
  const usaFlagFluid: ImageSharpFluid = usaFlag.childImageSharp.fluid;
  return (
    <Location>
      {({ location }) => (
        <LangContext.Consumer>
          {lang => {
            const isBlog = (location.pathname.substring(0,5) === '/blog')
            return (
              < Styled.Header >
                <Styled.Wrapper>
                  <Logo />
                  <Styled.Flag hidden={isBlog} to={'/' + 'es' + location.pathname.substring(3)} onClick={() => lang.changeLang('es')}>
                    <Styled.Img>
                      <Img fluid={colombiaFlagFluid} title='Cambiar a Español' />
                    </Styled.Img>
                  </Styled.Flag>
                  <Styled.Flag hidden={isBlog} to={'/' + 'en' + location.pathname.substring(3)} onClick={() => lang.changeLang('en')}>
                    <Styled.Img>
                      <Img fluid={usaFlagFluid} title='Switch to English' />
                    </Styled.Img>
                  </Styled.Flag>
                  <MainNav />
                </Styled.Wrapper>
              </Styled.Header>)
          }}
        </LangContext.Consumer>
      )
      }
    </Location >
  )
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
