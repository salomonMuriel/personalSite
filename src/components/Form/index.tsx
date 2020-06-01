import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';
import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';

interface Newsletter extends SectionTitle {
  namePlaceholder: string;
  emailPlaceholder: string;
  textPlaceholder: string;
  submitPlaceholder: string;
  phonePlaceholder: string;
}

const Newsletter: React.FC = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "form section" } }) {
        frontmatter {
          title
          subtitle
          namePlaceholder
          emailPlaceholder
          textPlaceholder
          phonePlaceholder
          submitPlaceholder
        }
      }
    }
  `);

  const newsletter: Newsletter = markdownRemark.frontmatter;

  return (
    <Styled.Newsletter>
      <Container section>
        <form name="contact-form" data-netlify={true} netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <textarea name="message"></textarea>
        </form>
        <TitleSection title={newsletter.title} subtitle={newsletter.subtitle} center />
        <Styled.Form name='contact-form' method='post' action='/'>
          <input type="hidden" name="form-name" value="contact-form" />
          <Styled.Input type="text" name='name' id='name' placeholder={newsletter.namePlaceholder} />
          <Styled.Input type="email" name='email' id='email' placeholder={newsletter.emailPlaceholder} />
          <Styled.Input type="tel" name='phone' id='phone' placeholder={newsletter.phonePlaceholder} />
          <Styled.TextArea name='message' id='message' placeholder={newsletter.textPlaceholder} rows={5} />
          <Button primary type='submit'>
            {newsletter.submitPlaceholder}
          </Button>
        </Styled.Form>
      </Container>
    </Styled.Newsletter>
  );
};

export default Newsletter;
