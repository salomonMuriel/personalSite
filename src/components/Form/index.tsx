import React, { createRef, useState, useRef } from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';
import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';
import LangContext from 'context/LangContext';

interface Form extends SectionTitle {
  namePlaceholder: string;
  emailPlaceholder: string;
  textPlaceholder: string;
  submitPlaceholder: string;
  phonePlaceholder: string;
}


const ContactForm: React.FC = () => {

  const { markdownRemark_es, markdownRemark_en } = useStaticQuery(graphql`
    query {
      markdownRemark_es: markdownRemark(frontmatter: { category: { eq: "form section" }, lang: {eq: "es"} }) {
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
      markdownRemark_en: markdownRemark(frontmatter: { category: { eq: "form section" }, lang: {eq: "en"} }) {
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

  const newsletter_es: Form = markdownRemark_es.frontmatter;
  const newsletter_en: Form = markdownRemark_en.frontmatter;


  return (
    <LangContext.Consumer>
      {lang => {
        if (lang.lang == 'es')
          var newsletter = newsletter_es
        else
          newsletter = newsletter_en
        return (
          <Styled.Newsletter>
            <Container section>
              <TitleSection title={newsletter.title} subtitle={newsletter.subtitle} center />
              <Styled.Form name='contact-form' method='post' action='/' data-netlify={true} data-netlify-honeypot="bot-field" ref={createRef}>
                <input type="hidden" name="form-name" value="contact-form" />
                <input type="text" hidden name="bot-field"/>
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
        )
      }
    }
    </LangContext.Consumer>
  );
};

export default ContactForm;
