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
  content: React.ReactNode;
  linkTo: string;
  linkText: string;
  img: ImageSharpFluid;
}

const Banner: React.FC<Props> = ({ title, subtitle, content, linkTo, linkText, img }) => {
  return (
    <Styled.Banner>
      <Container section>
        <LeftContent>
          <TitleSection title={title} subtitle={subtitle} />
          <Styled.Content>{content}
          </Styled.Content>
          <Link to={linkTo}>
            <Button primary>{linkText}</Button>
          </Link>
        </LeftContent>
        <Styled.Image>
          <Img fluid={img} alt={title} />
        </Styled.Image>
      </Container>
    </Styled.Banner>
  );
}

export default Banner;
