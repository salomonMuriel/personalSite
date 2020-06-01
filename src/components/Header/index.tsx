import React from 'react';

import MainNav from './MainNav';
import Logo from './Logo';
import Img from 'gatsby-image'

import * as Styled from './styles';
import { useStaticQuery, graphql } from 'gatsby';
import LangContext from 'context/LangContext';
import colombiaFlag from 'assets/images/colombia.svg'
import usaFlag from 'assets/images/usa.svg'

interface Props {
  siteTitle: string;
}


const Header: React.FC<Props> = ({ siteTitle }) => (
  <LangContext.Consumer>
    {lang =>
      <Styled.Header>
        <Styled.Wrapper>
          <Logo />
          <Styled.Flag>
            {(lang.lang == 'en') ?
              <img src={colombiaFlag} />
              :
              <img src={usaFlag} />
            }
          </Styled.Flag>
          <MainNav />
        </Styled.Wrapper>
      </Styled.Header>
    }
  </LangContext.Consumer>
);

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
