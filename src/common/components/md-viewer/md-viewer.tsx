import React from 'react';
import MarkdownIt from 'markdown-it';

interface Props {
  content: string;
}

const createMarkdownRender = () =>
  new MarkdownIt('default', {
    html: true,
    xhtmlOut: true,
    typographer: false,
    linkify: false,
    breaks: false,
  });

export const MarkdownViewer = (props: Props) => {
  const [markDownRender] = React.useState(createMarkdownRender());
  const { content } = props;

  const markdownToHTML = () => {
    return {
      __html: markDownRender.render(content || ''),
    };
  };

  return <div className="markdown-body" dangerouslySetInnerHTML={markdownToHTML()} />;
};
