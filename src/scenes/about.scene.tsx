import React from 'react';
import content from 'content/es/aboutMe.md';
import { MarkdownViewer, Container } from '@/common/components';

export const AboutScene = () => (
  <Container>
    <MarkdownViewer content={content} />
  </Container>
);
