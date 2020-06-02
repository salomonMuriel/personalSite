import React, { useState } from 'react';

import * as Styled from './styles';
import LangContext from 'context/LangContext';

interface MainNavItem {
  title: string;
  slug: string;
}

const mainNavItems: MainNavItem[] = [
  {
    title: 'About Me',
    slug: '/'
  },
  {
    title: 'Resume',
    slug: '/resume/'
  },
  // {
  //   title: 'Blog',
  //   slug: '/blog/'
  // },
  {
    title: 'Contact Me',
    slug: '/contact/'
  }
];

const MainNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <LangContext.Consumer>
      {lang =>
      <>
        <Styled.MainNav open={open}>
          {mainNavItems.map((item, index) => (
            <Styled.MainNavItem
              key={`nav-item-${index}`}
              to={'/'+lang.lang+item.slug}
              activeClassName="active"
              whileTap={{ scale: 0.9 }}
            >
              {item.title}
            </Styled.MainNavItem>
          ))}
        </Styled.MainNav>
        <Styled.ToogleMainNav open={open} onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </Styled.ToogleMainNav>
      </>}
    </LangContext.Consumer>
  );
};

export default MainNav;
