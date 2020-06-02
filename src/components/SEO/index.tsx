import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type Meta =
  | {
    name: string;
    content: any;
  }
  | {
    property: string;
    content: any;
  };

interface Props {
  description?: string;
  lang?: string;
  meta?: Meta[];
  title: string;
  image?: string;
}

const SEO: React.FC<Props> = ({ description, lang, meta, title, image }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            url
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image || site.siteMetadata.image;
  console.log(site.siteMetadata.url + metaImage)
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:image`,
          content: site.siteMetadata.url + metaImage
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta!)}
    />
  );
};

SEO.defaultProps = {
  lang: `es`,
  meta: [] as Meta[],
  description: ``
};

export default SEO;
