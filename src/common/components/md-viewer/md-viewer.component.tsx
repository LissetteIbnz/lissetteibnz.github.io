import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { cx } from 'emotion';
import { Code } from './components';
import * as classes from './md-viewer.styles';

interface MarkdownViewerProps {
  content: string;
  className?: string;
}

export const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ content = '', className }) => (
  <ReactMarkdown
    className={cx(classes.base, className)}
    source={content}
    escapeHtml={false}
    renderers={{ code: Code }}
  />
);
