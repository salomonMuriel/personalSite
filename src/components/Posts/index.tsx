import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

import { SectionTitle, ImageSharpFluid } from 'helpers/definitions';

import * as Styled from './styles';
import LangContext from 'context/LangContext';

interface Post {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      description: string;
      date: string;
      tags: string[];
      cover: {
        childImageSharp: {
          fluid: ImageSharpFluid;
        };
      };
    };
  };
}

const Posts: React.FC = () => {
  const { mR_es, mR_en, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      mR_es: markdownRemark(frontmatter: { category: { eq: "blog section" }, lang: { eq: "es" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      mR_en: markdownRemark(frontmatter: { category: { eq: "blog section" }, lang: { eq: "en" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "blog" }, published: { eq: true } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            html
            fields {
              slug
            }
            frontmatter {
              title
              description
              date(formatString: "MMM DD, YYYY")
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const sectionTitle_es: SectionTitle = mR_es.frontmatter;
  const sectionTitle_en: SectionTitle = mR_en.frontmatter;
  const posts: Post[] = allMarkdownRemark.edges;

  return (
    <LangContext.Consumer>
      {lang => {
        if (lang.lang === 'es') {
          var sectionTitle = sectionTitle_es
        }
        else {
          sectionTitle = sectionTitle_en
        }
        return (
          < Container section >
            <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
            <Styled.Posts>
              {posts.map((item) => {
                const {
                  id,
                  fields: { slug },
                  frontmatter: { title, cover, description, date, tags }
                } = item.node;

                return (
                  <Styled.Post key={id}>
                    <Link to={slug}>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                        <Styled.Card>
                          <Styled.Image>
                            <Img fluid={cover.childImageSharp.fluid} alt={title} />
                          </Styled.Image>
                          <Styled.Content>
                            <Styled.Date>{date}</Styled.Date>
                            <Styled.Title>{title}</Styled.Title>
                            <Styled.Description>{description}</Styled.Description>
                          </Styled.Content>
                          <Styled.Tags>
                            {tags.map((item) => (
                              <Styled.Tag key={item}>{item}</Styled.Tag>
                            ))}
                          </Styled.Tags>
                        </Styled.Card>
                      </motion.div>
                    </Link>
                  </Styled.Post>
                );
              })}
            </Styled.Posts>
          </Container>
        )
      }}
    </LangContext.Consumer >
  );
};

export default Posts;
