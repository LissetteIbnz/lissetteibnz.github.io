import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { Code } from './components';
import { base } from './md-viewer.styles';

interface MarkdownViewerProps {
  content: string;
}

export const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ content = '' }) => (
  <ReactMarkdown className={base} source={content} escapeHtml={false} renderers={{ code: Code }} />
);
