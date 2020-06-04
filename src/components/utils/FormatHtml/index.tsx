import React, { ReactNode } from 'react';

interface Props {
  content: any;
}

const FormatHtml: React.FC<Props> = ({ content }) => (
  <div
    className="format-html"
    dangerouslySetInnerHTML={{
      __html: content
    }}
  />
);

export default FormatHtml;
