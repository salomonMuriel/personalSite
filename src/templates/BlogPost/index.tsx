import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import * as Styled from './styles';
import { Post } from 'components/Posts/styles';

interface Post {
  html: React.ReactNode;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    date: string;
    langKey: string;
    description: string;
    static_image: string;
  };
}

interface Props {
  data: {
    markdownRemark: Post;
  };
  pageContext: {
    slug: string;
    next: Post;
    previous: Post;
  };
}

const BlogPost: React.FC<Props> = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} lang={post.frontmatter.langKey} description={post.frontmatter.description} image={post.frontmatter.static_image} />
      <Styled.Banner>
        <Styled.PostContainer section>
          <TitleSection title={post.frontmatter.date} subtitle={post.frontmatter.title} />
          <Styled.Content>
            <FormatHtml content={post.html} />
          </Styled.Content>
          <Styled.Links>
            <span>
              {previous && (
                <Link to={previous.fields.slug} rel="previous">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </span>
            <span>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </span>
          </Styled.Links>
        </Styled.PostContainer>
      </Styled.Banner>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        langKey
        static_image
        date(formatString: "MMM DD, YYYY")
      }
    }
  }
`;
