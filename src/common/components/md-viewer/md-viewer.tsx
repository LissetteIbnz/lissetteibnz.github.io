import React from 'react';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js/lib/highlight';
// TODO: Bundle analyze
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
import 'highlight.js/styles/hopscotch.css';

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
    highlight: function(str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (__) {}
      }

      return ''; // use external default escaping
    },
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
