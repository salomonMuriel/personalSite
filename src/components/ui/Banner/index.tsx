import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';
import Img from 'gatsby-image'
import * as Styled from './styles';
import { ImageSharpFluid } from 'helpers/definitions';
import { LeftContent } from './styles';

interface Props {
  title: string;
  subtitle?: string;
  content1: React.ReactNode;
  content2: React.ReactNode;
  linkTo?: string;
  linkText?: string;
  img?: ImageSharpFluid;
}

const Banner: React.FC<Props> = ({ title, subtitle, content1, content2, linkTo, linkText, img }) => {
  return (
    <Styled.Banner>
      <Container section>
        <LeftContent>
          <TitleSection title={title} subtitle={subtitle} />
          <Styled.Content>{content1}</Styled.Content>
          <Styled.Content>{content2}</Styled.Content>
          {linkTo?
          <Link to={linkTo}>
            <Button primary>{linkText}</Button>
          </Link>:null}
        </LeftContent>
        {img?
        <Styled.Image>
          <Img fluid={img} alt={title} />
        </Styled.Image>:null}
      </Container>
    </Styled.Banner>
  );
}

export default Banner;
